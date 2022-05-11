<template>
  <div class="assess">
    <div class="report_title">
      <h1>老年人智力评估表</h1>
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
      :span-method="objectSpanMethod"
      @cell-mouse-leave="cellMouseLeave"
      @cell-mouse-enter="cellMouseEnter"
      :cell-class-name="tableRowClassName"
      border
      header-align="center"
      align="center"
    >
      <el-table-column
        prop="qus_id"
        label="项目"
        width="130"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="context"
        label="问题"
        header-align="center"
        align="center"
      >
      </el-table-column>

      <el-table-column label="回答记录" header-align="center" align="center">
        <template slot-scope="scope">
          <div>
            <el-input
              v-model="tableData[scope.$index].results"
              placeholder="请评分"
            ></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="评分" header-align="center" align="center">
        <template slot-scope="scope">
          <div>
            <el-radio-group v-model="tableData[scope.$index].answer">
              <el-radio :label="0">0分</el-radio>
              <el-radio :label="1">1分</el-radio>
            </el-radio-group>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-table
      style="width: 100%"
      border
      header-align="center"
      align="center"
      :data="drawinglist"
      :show-header="false"
    >
      <el-table-column
        prop="qus_id"
        label="项目"
        width="130"
        header-align="center"
        align="center"
        :show-header="false"
      >
      </el-table-column>
      <el-table-column
        prop="context"
        label="问题"
        header-align="center"
        align="center"
        type="index"
        width="326"
      >
        <template slot-scope="scope">
          <el-popover placement="top-start" title="" trigger="hover">
            <img
              slot="reference"
              :src="drawinglist[scope.$index].src"
              style="width: 160px; height: 100px"
            />
            老年人智力测试图片
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="回答记录" header-align="center" align="center">
        <template slot-scope="scope">
          <div>
            <el-input
              v-model="drawinglist[scope.$index].results"
              placeholder="请评分"
            ></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="评分" header-align="center" align="center">
        <template slot-scope="scope">
          <div>
            <el-radio-group v-model="drawinglist[scope.$index].answer">
              <el-radio :label="0">0分</el-radio>
              <el-radio :label="1">1分</el-radio>
            </el-radio-group>
          </div>
        </template>
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
      orderIndexArr: [],
      rowIndex: "-1",
      hoverOrderArr: [],
      _length: 0,
      drawinglist: [],
    };
  },
  mounted() {
    //题目数据
    const jsonstr = [
      {
        id: 1,
        qus_id: "定向力（10分）",
        context: "今年是哪一年？",
      },
      {
        id: 2,
        qus_id: "定向力（10分）",
        context: "现在是什么季节？",
      },
      {
        id: 3,
        qus_id: "定向力（10分）",
        context: " 现在是几月份？",
      },
      {
        id: 4,
        qus_id: "定向力（10分）",
        context: " 今天是几号？",
      },
      {
        id: 5,
        qus_id: "定向力（10分）",
        context: " 今天是星期几？",
      },
      {
        id: 6,
        qus_id: "定向力（10分）",
        context: "现在是哪个省/直辖市？",
      },
      {
        id: 7,
        qus_id: "定向力（10分）",
        context: "现在是哪个县？",
      },
      {
        id: 8,
        qus_id: "定向力（10分）",
        context: "现在是哪个乡（街道）？",
      },
      {
        id: 9,
        qus_id: "定向力（10分）",
        context: "现在在哪个医院？",
      },
      {
        id: 10,
        qus_id: "定向力（10分）",
        context: "现在在第几层楼？",
      },

      {
        id: 11,
        qus_id: "记忆力（10分）请说出三个词，在说完后请马上重复三个词",
        context: "皮球",
      },
      {
        id: 11,
        qus_id: "记忆力（10分）请说出三个词，在说完后请马上重复三个词",
        context: "国旗",
      },
      {
        id: 12,
        qus_id: "记忆力（10分）请说出三个词，在说完后请马上重复三个词",
        context: "树木",
      },

      {
        id: 13,
        qus_id: "注意力和计算力（5分）",
        context: "100 - 7",
      },
      {
        id: 14,
        qus_id: "注意力和计算力（5分）",
        context: "100 - 7 - 7",
      },
      {
        id: 15,
        qus_id: "注意力和计算力（5分）",
        context: "100 - 7 - 7 - 7",
      },
      {
        id: 16,
        qus_id: "注意力和计算力（5分）",
        context: "100 - 7 - 7 - 7 - 7",
      },
      {
        id: 17,
        qus_id: "注意力和计算力（5分）",
        context: "100 - 7 - 7 - 7 - -7 -7",
      },

      {
        id: 18,
        qus_id: "回忆能力（10分）回忆说出刚才的三个词",
        context: "皮球",
      },
      {
        id: 20,
        qus_id: "回忆能力（10分）回忆说出刚才的三个词",
        context: "国旗",
      },
      {
        id: 21,
        qus_id: "回忆能力（10分）回忆说出刚才的三个词",
        context: "树木",
      },

      {
        id: 22,
        qus_id: "语言能力（8分）",
        context: "这是什么？（展示铅笔）",
      },
      {
        id: 23,
        qus_id: "语言能力（8分）",
        context: "这是什么？（展示手表）",
      },
      {
        id: 24,
        qus_id: "语言能力（8分）",
        context: "请复述 —— 瑞雪兆丰年",
      },
      {
        id: 25,
        qus_id: "语言能力（8分）",
        context: "左手拿起一张纸",
      },
      {
        id: 26,
        qus_id: "语言能力（8分）",
        context: "把它对折",
      },
      {
        id: 27,
        qus_id: "语言能力（8分）",
        context: "把它放在您的右腿上",
      },
      {
        id: 28,
        qus_id: "语言能力（8分）",
        context: "请读下面的句子，并按照做 —— 闭上你的眼睛",
      },
      {
        id: 29,
        qus_id: "语言能力（8分）",
        context: "写出一个句子",
      },
    ];
    const drawinglist = [
      {
        id: 30,
        qus_id: "画图能力（1分）",
        context: "画出如下图画",
        src: require("../../../../../assets/img/t.gif"),
        answer: 2,
        results: "",
      },
    ];

    //设置答案列表
    jsonstr.forEach((item, index) => {
      item.answer = 2; //0：否，1：是，默认不选择
      item.results = "";
    });
    this.tableData = jsonstr;
    this._length = jsonstr.length;
    this.drawinglist = drawinglist;
    this.getOrderNumber();
  },
  methods: {
    //计算评估结果
    CalculationResults() {
      const _answerList = this.tableData;
      let score = 0;
      //遍历答案列表，判断是否存在为答题情况
      let NotAnswerList = _answerList.filter(
        (item) => item.answer === 2 || item.results == ""
      );
      if (NotAnswerList.length > 0) {
        let AnsweId = NotAnswerList.map((v, i) => {
          return v.id;
        });
        if (
          this.drawinglist[0].answer === 2 ||
          this.drawinglist[0].results === ""
        ) {
          AnsweId = AnsweId + this.drawinglist[0].id;
          console.log(AnsweId)
        }
        this.openmessage(AnsweId);
      } else {
        //计算评估分数
        for (let item of _answerList) {
          if (item.answer === 1) {
            score++;
          }
        }
        if (this.drawinglist[0].answer == 1) {
          score++;
        }
        console.log(score);
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
      /*正常（27~30 分）轻度（21~26分）中度（10~20分）重度（9分以下） */
      if (score >= 27 && score <= 30) {
        this.CalculateScoremessage("正常（27~30 分）");
      } else if (score >= 26 && score <= 21) {
        this.CalculateScoremessage("轻度（21~26分）");
      } else if (score >= 10 && score <= 20) {
        this.CalculateScoremessage("中度（10~20分）");
      } else if (score < 9) {
        this.CalculateScoremessage("重度（9分以下）");
      }
    },
    // 获取相同编号的数组
    getOrderNumber() {
      const orderObj = {};
      this.tableData.forEach((item, index) => {
        item.rowIndex = index;
        if (orderObj[item.qus_id]) {
          orderObj[item.qus_id].push(index);
        } else {
          orderObj[item.qus_id] = [];
          orderObj[item.qus_id].push(index);
        }
      });
      // 将数组长度大于1的值 存储到this.orderIndexArr（也就是需要合并的项）
      Object.keys(orderObj).forEach((key) => {
        if (orderObj[key].length > 1) {
          this.orderIndexArr.push(orderObj[key]);
        }
      });
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        for (let i = 0; i < this.orderIndexArr.length; i += 1) {
          let element = this.orderIndexArr[i];
          for (let j = 0; j < element.length; j += 1) {
            let item = element[j];
            if (rowIndex === item) {
              if (j === 0) {
                return {
                  rowspan: element.length,
                  colspan: 1,
                };
              }
              if (j !== 0) {
                return {
                  rowspan: 0,
                  colspan: 0,
                };
              }
            }
          }
        }
      }
    },
    tableRowClassName({ row, rowIndex }) {
      let arr = this.hoverOrderArr;
      for (let i = 0; i < arr.length; i += 1) {
        if (rowIndex === arr[i]) {
          return "hovered-row";
        }
      }
    },
    cellMouseEnter(row, column, cell, event) {
      this.rowIndex = row.rowIndex;
      this.hoverOrderArr = [];
      this.orderIndexArr.forEach((element) => {
        if (element.indexOf(this.rowIndex) >= 0) {
          this.hoverOrderArr = element;
        }
      });
    },
    cellMouseLeave(row, column, cell, event) {
      this.rowIndex = "-1";
      this.hoverOrderArr = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.assess {
  width: 85%;
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
  ._img {
    background-color: aqua;
    width: 50px;
    height: 50px;
  }
}
</style>
 
