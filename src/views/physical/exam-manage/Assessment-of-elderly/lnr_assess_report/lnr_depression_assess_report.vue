<template>
  <div class="assess">
    <div class="report_title">
      <h1>老年人情感状态抑郁评估表</h1>
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
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="qus_id"
        label="题号"
        width="100"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="qus_content"
        label="问题"
        width="580"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column label="评分" header-align="center" align="center">
        <template slot-scope="scope">
          <div>
            <el-radio-group v-model="tableData[scope.$index].answer">
              <el-radio :label="0">否</el-radio>
              <el-radio :label="1">是</el-radio>
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
    };
  },
  mounted() {
    //题目数据
    const jsonstr = [
      { qus_id: "1", qus_content: "你对你的生活基本满意吗？" },
      { qus_id: "2", qus_content: "你是否丧失了很多你的兴趣和爱好？" },
      { qus_id: "3", qus_content: "你感到生活很空虚吗？" },
      { qus_id: "4", qus_content: "你经常感到很无聊吗？" },
      { qus_id: "5", qus_content: "你对未来充满希望吗？" },
      { qus_id: "6", qus_content: "你是否感到烦恼无法摆脱头脑中的想法？" },
      { qus_id: "7", qus_content: "大部分时间你都精神抖擞吗？" },
      {
        qus_id: "8",
        qus_content: "你是否觉得有什么不好的事情要发生而感到很害怕？",
      },
      { qus_id: "9", qus_content: "大部分时间你都觉得快乐吗？" },
      { qus_id: "10", qus_content: "你经常感到无助吗？" },
      { qus_id: "11", qus_content: "你是否经常感到不安宁或坐立不安？" },
      { qus_id: "12", qus_content: "你是否宁愿呆在家里而不愿出去干新鲜事？" },
      { qus_id: "13", qus_content: "你是否经常担心未来？" },
      { qus_id: "14", qus_content: "你是否觉得你的记忆力有问题？" },
      { qus_id: "15", qus_content: "你是否觉得现在活着很精彩？" },
      { qus_id: "16", qus_content: "你是否经常感到垂头丧气无精打采？" },
      { qus_id: "17", qus_content: "你是否感到你现在很没用？" },
      { qus_id: "18", qus_content: "你是否为过去的事担心很多？" },
      { qus_id: "19", qus_content: "你觉得生活很兴奋吗？" },
      { qus_id: "20", qus_content: "你是否觉得很困难学习新鲜事物？" },
      { qus_id: "21", qus_content: "你觉得精力充沛吗？" },
      { qus_id: "22", qus_content: "你觉得你的现状是毫无希望吗？" },
      { qus_id: "23", qus_content: "你是否觉得大部分人都比你活得好？" },
      { qus_id: "24", qus_content: "你是否经常把小事情都弄得很糟糕？" },
      { qus_id: "25", qus_content: "你经常有想哭的感觉吗？" },
      { qus_id: "26", qus_content: "你对集中注意力有困难吗？" },
      { qus_id: "27", qus_content: "你喜欢每天早晨起床的感觉吗？" },
      { qus_id: "28", qus_content: "你是否宁愿不参加社交活动？" },
      { qus_id: "29", qus_content: "你做决定容易吗？" },
      { qus_id: "30", qus_content: "你的头脑还和以前一样清楚吗？" },
    ];

    //设置答案列表
    jsonstr.forEach((item, index) => {
      item.answer = 2; //0：否，1：是，默认不选择
    });
    this.tableData = jsonstr;
  },
  methods: {
    //计算评估结果
    CalculationResults() {
      const _answerList = this.tableData;
      let score = 0;
      //遍历答案列表，判断是否存在为答题情况
      let NotAnswerList = _answerList.filter((item) => item.answer === 2);
      if (NotAnswerList.length > 0) {
        let AnsweId = NotAnswerList.map((v, i) => {
          return v.qus_id;
        });
        this.openmessage(AnsweId);
      } else {
          //计算评估分数
        for (let item of _answerList) {
          if (
            item.qus_id == "1" ||
            item.qus_id == "7" ||
            item.qus_id == "9" ||
            item.qus_id == "15" ||
            item.qus_id == "19" ||
            item.qus_id == "21" ||
            item.qus_id == "27" ||
            item.qus_id == "29" ||
            item.qus_id == "30"
          ) {
            if (item.answer === 0) {
              score++;
            }
          } else {
            if (item.answer === 1) {
              score++;
            }
          }
        }
        this.CalculateScore(score);//计算评估等级
      }
    },
    openmessage(AnsweId) {
      this.$alert("以下题目未填写，请继续答题！" + AnsweId, "提示", {
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
      /*正常（0~10分）轻度抑郁（11~20分）中重度抑郁（21~30分） */
      if (score <= 10) {
        this.CalculateScoremessage("正常（0~10分）");
      } else if (score > 10 && score <= 20) {
        this.CalculateScoremessage("轻度抑郁（11~20分）");
      } else if (score > 20 && score <= 30) {
        this.CalculateScoremessage("中重度抑郁（21~30分）");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.assess {
  width: 75%;
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
 
