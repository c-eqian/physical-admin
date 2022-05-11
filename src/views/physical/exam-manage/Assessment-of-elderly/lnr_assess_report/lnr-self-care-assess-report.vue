<template>
  <div class="assess">
    <div class="report_title">
      <h1>老年人生活自理能力评估表</h1>
      <div class="title_nav">
        <div>居民姓名：</div>
        <div>电话号码：</div>
        <div>性别：</div>
        <div>身份证号：</div>
        <div>年龄：</div>
        <div>流水号：</div>
        <div>评估日期：</div>
        <div>机构名称：</div>
        <div>评估医生：</div>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      header-align="center"
      align="center"
      :span-method="objectSpanMethod"
    >
      <el-table-column
        prop="qus_id"
        label="题号"
        width="150"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="context"
        label="评估事项、评分"
        width="120"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column label="程度等级" header-align="center" align="center">
        <el-table-column
          prop="care_assess_level_1"
          label="可自理"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="care_assess_level_2"
          label="轻度依赖"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="care_assess_level_3"
          label="中度依赖"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="care_assess_level_4"
          label="不能自理"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop=""
          label="评分"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <div>
              <el-input
                v-model="tableData[scope.$index].answer"
                placeholder="请评分"
              ></el-input>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-button type="primary" class="results" @click="CalculationResults"
      >计算结果</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{}],
      input: "1",
    };
  },
  mounted() {
    //题目数据
    const jsonstr = [
      {
        qus_id: "1",
        context: "进餐：使用餐具将饭菜送入口、咀嚼、吞咽等活动",
        care_assess_level_1: "独立完成",
        care_assess_level_2: "—",
        care_assess_level_3: "需要协助，如切碎、搅拌食物等",
        care_assess_level_4: "完全需要帮助",
      },
      {
        qus_id: "",
        context: "评分",
        care_assess_level_1: "0",
        care_assess_level_2: "0",
        care_assess_level_3: "3",
        care_assess_level_4: "5",
      },
      {
        qus_id: "2",
        context: "梳洗：梳头、洗脸、刷牙、剃须洗澡等活动",
        care_assess_level_1: "独立完成",
        care_assess_level_2:
          "能独立地洗头、梳头、洗脸、刷牙、剃须等；洗澡需要协助",
        care_assess_level_3: "在协助下和适当的时间内，能完成部分梳洗活动",
        care_assess_level_4: "完全需要帮助",
      },
      {
        qus_id: "",
        context: "评分",
        care_assess_level_1: "0",
        care_assess_level_2: "1",
        care_assess_level_3: "3",
        care_assess_level_4: "7",
      },
      {
        qus_id: "3",
        context: "穿衣：穿衣裤、袜子、鞋子等活动",
        care_assess_level_1: "独立完成",
        care_assess_level_2: "—",
        care_assess_level_3: "需要协助，在适当的时间内完成部分穿衣",
        care_assess_level_4: "完全需要帮助",
      },
      {
        qus_id: "",
        context: "评分",
        care_assess_level_1: "0",
        care_assess_level_2: "0",
        care_assess_level_3: "3",
        care_assess_level_4: "5",
      },
      {
        qus_id: "4",
        context: "如厕：小便、大便等活动及自控",
        care_assess_level_1: "不需协助，可自控",
        care_assess_level_2: "偶尔失禁，但基本上能如厕或使用便具",
        care_assess_level_3: "经常失禁，在很多提示和协助下尚能如厕或使用便具",
        care_assess_level_4: "完全失禁，完全需要帮助",
      },
      {
        qus_id: "",
        context: "评分",
        care_assess_level_1: "0",
        care_assess_level_2: "1",
        care_assess_level_3: "5",
        care_assess_level_4: "10",
      },
      {
        qus_id: "5",
        context: "活动：站立、室内行走、上下楼梯、户外活动",
        care_assess_level_1: "独立完成所有活动",
        care_assess_level_2:
          "借助较小的外力或辅助装置能完成站立、行走、上下楼梯等",
        care_assess_level_3: "借助较大的外力才能完成站立、行走，不能上下楼梯",
        care_assess_level_4: "卧床不起，活动完全需要帮助",
      },
      {
        qus_id: "",
        context: "评分",
        care_assess_level_1: "0",
        care_assess_level_2: "1",
        care_assess_level_3: "5",
        care_assess_level_4: "10",
      },
    ];

    //设置答案列表
    jsonstr.forEach((item, index) => {
      item.answer = ""; 
    });
    this.tableData = jsonstr;
  },
  methods: {
    //计算评估结果
    CalculationResults() {
      const _answerList = this.tableData;
      let score = 0;
      //遍历答案列表，判断是否存在为答题情况
      let NotAnswerList = _answerList.filter(
        (item) => item.answer == "" && item.qus_id != ""
      );
      if (NotAnswerList.length > 0) {
        let AnsweId = NotAnswerList.map((v, i) => {
          return v.qus_id;
        });
        this.openmessage(AnsweId);
      } else {
        //计算评估分数
        for (let item of _answerList) {
          if (item.qus_id !== "") {
            score += parseInt(item.answer);
          }
        }
        this.CalculateScore(score); //计算评估等级
      }
    },
    openmessage(AnsweId) {
      this.$alert("第" + AnsweId + "请继续答题！", "提示", {
        confirmButtonText: "确定",
      });
    },
    CalculateScoremessage(str) {
      this.$alert(str, "评测结果", {
        confirmButtonText: "确定",
      });
    },
    //计算得分
    CalculateScore(score) {
      /*'可自理（0~3分）'轻度依赖（4~8分）'中度依赖（9~18分）''不能自理（19分以上）' */
      if (score <= 3) {
        this.CalculateScoremessage("可自理（0~3分）");
      } else if (score > 4 && score <= 8) {
        this.CalculateScoremessage("轻度依赖（4~8分）");
      } else if (score > 9 && score <= 18) {
        this.CalculateScoremessage("中度依赖（9~18分）");
      } else if (score > 19) {
        this.CalculateScoremessage("不能自理（19分以上）");
      }
    },
    //表格行列合并函数
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 6) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.assess {
  width: 90%;
  margin: auto;
  position: relative;
  .report_title {
    position: relative;
    text-align: center;
    margin: 20px 20px;
    h1 {
      font-size: 30px;
    }
    .title_nav {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 20px;
      div {
        width: 33.3%;
        text-align: left;
        margin-top: 10px;
      }
    }
  }
  .results {
    margin-top: 15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
}
</style>
 
