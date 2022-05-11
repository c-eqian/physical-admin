<template>
  <div class="assess">
    <div class="report_title">
      <h1>老年人中医药体质评估表</h1>
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
    <el-table :data="tableData" style="width: 100%" border>
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
        label="请根据近一年的体验和感觉，回答以下问题"
        width="300"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="没有(根本不/从来没有)"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <div>
            <el-radio-group v-model="tableData[scope.$index].answer">
              <el-radio :label="1">1</el-radio>
            </el-radio-group>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="很少(有一点/偶尔)"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <div>
            <el-radio-group v-model="tableData[scope.$index].answer">
              <el-radio :label="2">2</el-radio>
            </el-radio-group>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        label="有时(有些/少数时间)"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <div>
            <el-radio-group v-model="tableData[scope.$index].answer">
              <el-radio :label="3">3</el-radio>
            </el-radio-group>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        label="经常(相当/多数时间)"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <div>
            <el-radio-group v-model="tableData[scope.$index].answer">
              <el-radio :label="4">4</el-radio>
            </el-radio-group>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        label="总是(非常/每天)"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <div>
            <el-radio-group v-model="tableData[scope.$index].answer">
              <el-radio :label="5">5</el-radio>
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
      { qus_id: "1", qus_content: "您精力充沛吗？ （指精神头足，乐于做事）" },
      {
        qus_id: "2",
        qus_content:
          "您容易疲乏吗？（指体力如何，是否稍微活动一 下或做一点家务劳动就感到累）",
      },
      { qus_id: "3", qus_content: "您容易气短，呼吸短促，接不上气吗？" },
      { qus_id: "4", qus_content: "您说话声音低弱无力吗? （指说话没有力气）" },
      {
        qus_id: "5",
        qus_content: "您感到闷闷不乐、情绪低沉吗?（指心情不愉快， 情绪低落）",
      },
      {
        qus_id: "6",
        qus_content: "您容易精神紧张、焦虑不安吗?（指遇事是否心 情紧张）",
      },
      { qus_id: "7", qus_content: "您因为生活状态改变而感到孤独、失落吗？" },
      { qus_id: "8", qus_content: "您容易感到害怕或受到惊吓吗?" },
      {
        qus_id: "9",
        qus_content:
          "您感到身体超重不轻松吗?(感觉身体沉重)[BMI 指数=体重（kg）/身高2（m）]",
      },
      { qus_id: "10", qus_content: "您眼睛干涩吗?" },
      {
        qus_id: "11",
        qus_content:
          "您手脚发凉吗?（不包含因周围温度低或穿的少 导致的手脚发冷）",
      },
      {
        qus_id: "12",
        qus_content:
          "您胃脘部、背部或腰膝部怕冷吗？（指上腹部、背部、腰部或膝关节等，有一处或多处怕冷）",
      },
      {
        qus_id: "13",
        qus_content:
          "您比一般人耐受不了寒冷吗？（指比别人容易 害怕冬天或是夏天的冷空调、电扇等）",
      },
      { qus_id: "14", qus_content: "您容易患感冒吗?（指每年感冒的次数）" },
      { qus_id: "15", qus_content: "您没有感冒时也会鼻塞、流鼻涕吗?" },
      { qus_id: "16", qus_content: "您有口粘口腻，或睡眠打鼾吗？" },
      {
        qus_id: "17",
        qus_content:
          "您容易过敏(对药物、食物、气味、花粉或在季节 交替、气候变化时)吗?",
      },
      {
        qus_id: "18",
        qus_content: "您的皮肤容易起荨麻疹吗? (包括风团、风疹块、 风疙瘩)",
      },
      {
        qus_id: "19",
        qus_content:
          "您的皮肤在不知不觉中会出现青紫瘀斑、皮下出血吗?（指皮肤在没有外伤的情况下出现青一块 紫一块的情况）",
      },
      {
        qus_id: "20",
        qus_content:
          "您的皮肤一抓就红，并出现抓痕吗?（指被指甲或钝物 划过后皮肤的反应）",
      },
      { qus_id: "21", qus_content: "您皮肤或口唇干吗?" },
      { qus_id: "22", qus_content: "您有肢体麻木或固定部位疼痛的感觉吗？" },
      {
        qus_id: "23",
        qus_content: "您面部或鼻部有油腻感或者油亮发光吗?（指脸 上或鼻子）",
      },
      { qus_id: "24", qus_content: "您面色或目眶晦黯，或出现褐色斑块/斑点吗?" },
      { qus_id: "25", qus_content: "您有皮肤湿疹、疮疖吗" },
      { qus_id: "26", qus_content: "您感到口干咽燥、总想喝水吗？" },
      {
        qus_id: "27",
        qus_content: "您感到口苦或嘴里有异味吗? （指口苦或口臭）",
      },
      { qus_id: "28", qus_content: "您腹部肥大吗? （指腹部脂肪肥厚）" },
      {
        qus_id: "29",
        qus_content:
          "您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？（指不喜欢吃凉的食物，或吃了凉的 食物后会不舒服）",
      },
      {
        qus_id: "30",
        qus_content:
          "您有大便黏滞不爽、解不尽的感觉吗? (大便容易粘在马桶或便坑壁上)",
      },
      { qus_id: "31", qus_content: "您容易大便干燥吗?" },
      {
        qus_id: "32",
        qus_content:
          "您舌苔厚腻或有舌苔厚厚的感觉吗? （如果自我感觉不清楚可由调查员观察后填写）",
      },
      {
        qus_id: "33",
        qus_content: "您舌下静脉瘀紫或增粗吗？ （可由调查员辅助观察后填写）",
      },
    ];

    //设置答案列表
    jsonstr.forEach((item, index) => {
      item.answer = 6; //0：否，1：是，默认不选择
    });
    this.tableData = jsonstr;
  },
  methods: {
    //计算评估结果
    CalculationResults() {
      const _answerList = this.tableData;
      //遍历答案列表，判断是否存在未答题情况
      let NotAnswerList = _answerList.filter((item) => item.answer === 6);
      if (NotAnswerList.length > 0) {
        let AnsweId = NotAnswerList.map((v, i) => {
          return v.qus_id;
        });
        this.openmessage(AnsweId);
      } else {
        //计算评估分数
        let qi_xu_zhi_point = 0; //气虚质（2）（3）（4）（14）
        let yang_xu_zhi_point = 0; //阳虚质（11）（12）（13）（29）
        let yin_xu_zhi_point = 0; //阴虚质（10）（21）（26）（31）
        let tan_shi_zhi_point = 0; //痰湿质（9）（16）（28）（32）
        let shi_re_zhi_point = 0; //湿热质（23）（25）（27）（30）
        let xue_yu_zhi_point = 0; //血瘀质（19）（22）（24）（33）
        let qi_yu_zhi_point = 0; //气郁质（5）（6）（7）（8）
        let te_bing_zhi_point = 0; //特禀质（15）（17）（18）（20）
        let ping_he_zhi_point = 0; //平和质（1）（2）（4）（5）（13）其中，（2）（4）（5）（13）反向计分，即1→5， 2→4，3→3，4→2，5→1）
        for (let item of _answerList) {
            console.log(item.answer)
          if (
            item.qus_id == "2" ||
            item.qus_id == "3" ||
            item.qus_id == "4" ||
            item.qus_id == "14"
          ) {
            qi_xu_zhi_point += item.answer;
          } else if (
            item.qus_id == "11" ||
            item.qus_id == "12" ||
            item.qus_id == "12" ||
            item.qus_id == "29"
          ) {
            yang_xu_zhi_point += item.answer;
          } else if (
            item.qus_id == "10" ||
            item.qus_id == "21" ||
            item.qus_id == "26" ||
            item.qus_id == "31"
          ) {
            yin_xu_zhi_point += item.answer;
          } else if (
            item.qus_id == "9" ||
            item.qus_id == "16" ||
            item.qus_id == "28" ||
            item.qus_id == "32"
          ) {
            tan_shi_zhi_point += item.answer;
          } else if (
            item.qus_id == "23" ||
            item.qus_id == "25" ||
            item.qus_id == "27" ||
            item.qus_id == "30"
          ) {
            shi_re_zhi_point += item.answer;
          } else if (
            item.qus_id == "19" ||
            item.qus_id == "22" ||
            item.qus_id == "24" ||
            item.qus_id == "33"
          ) {
            xue_yu_zhi_point += item.answer;
          } else if (
            item.qus_id == "5" ||
            item.qus_id == "6" ||
            item.qus_id == "7" ||
            item.qus_id == "8"
          ) {
            qi_yu_zhi_point += item.answer;
          } else if (
            item.qus_id == "15" ||
            item.qus_id == "17" ||
            item.qus_id == "18" ||
            item.qus_id == "20"
          ) {
            te_bing_zhi_point += item.answer;
          } else if (
            item.qus_id == "1" ||
            item.qus_id == "2" ||
            item.qus_id == "4" ||
            item.qus_id == "5" ||
            item.qus_id == "13"
          ) {
            ping_he_zhi_point += item.answer;
          }
        }
        console.log(qi_xu_zhi_point,ping_he_zhi_point)
        var zd = "";

        var qi_xu_zhi_zd = "";
        if (qi_xu_zhi_point >= 11) {
          qi_xu_zhi_zd = "是气虚质";
        } else if (qi_xu_zhi_point >= 9 && qi_xu_zhi_point <= 10) {
          qi_xu_zhi_zd = "倾向是气虚质";
        }

        var yang_xu_zhi_zd = "";
        if (yang_xu_zhi_point >= 11) {
          yang_xu_zhi_zd = "是阳虚质";
        } else if (yang_xu_zhi_point >= 9 && yang_xu_zhi_point <= 10) {
          yang_xu_zhi_zd = "倾向是阳虚质";
        }

        var yin_xu_zhi_zd = "";
        if (yin_xu_zhi_point >= 11) {
          yin_xu_zhi_zd = "是阴虚质";
        } else if (yin_xu_zhi_point >= 9 && yin_xu_zhi_point <= 10) {
          yin_xu_zhi_zd = "倾向是阴虚质";
        }

        var tan_shi_zhi_zd = "";
        if (tan_shi_zhi_point >= 11) {
          tan_shi_zhi_zd = "是痰湿质";
        } else if (tan_shi_zhi_point >= 9 && tan_shi_zhi_point <= 10) {
          tan_shi_zhi_zd = "倾向是痰湿质";
        }

        var shi_re_zhi_zd = "";
        if (shi_re_zhi_point >= 11) {
          shi_re_zhi_zd = "是湿热质";
        } else if (shi_re_zhi_point >= 9 && shi_re_zhi_point <= 10) {
          shi_re_zhi_zd = "倾向是湿热质";
        }

        var xue_yu_zhi_zd = "";
        if (xue_yu_zhi_point >= 11) {
          xue_yu_zhi_zd = "是血瘀质";
        } else if (xue_yu_zhi_point >= 9 && xue_yu_zhi_point <= 10) {
          xue_yu_zhi_zd = "倾向是血瘀质";
        }

        var qi_yu_zhi_zd = "";
        if (qi_yu_zhi_point >= 11) {
          qi_yu_zhi_zd = "是气郁质";
        } else if (qi_yu_zhi_point >= 9 && qi_yu_zhi_point <= 10) {
          qi_yu_zhi_zd = "倾向是气郁质";
        }

        var te_bing_zhi_zd = "";
        if (te_bing_zhi_point >= 11) {
          te_bing_zhi_zd = "是特禀质";
        } else if (te_bing_zhi_point >= 9 && te_bing_zhi_point <= 10) {
          te_bing_zhi_zd = "倾向是特禀质";
        }

        var ping_he_zhi_zd = "";
        if (
          ping_he_zhi_point >= 17 &&
          qi_xu_zhi_point <= 8 &&
          yang_xu_zhi_point <= 8 &&
          yin_xu_zhi_point <= 8 &&
          tan_shi_zhi_point <= 8 &&
          shi_re_zhi_point <= 8 &&
          xue_yu_zhi_point <= 8 &&
          qi_yu_zhi_point <= 8 &&
          te_bing_zhi_point <= 8
        ) {
          ping_he_zhi_zd = "是平和质";
        } else if (
          ping_he_zhi_point >= 17 &&
          qi_xu_zhi_point <= 10 &&
          yang_xu_zhi_point <= 10 &&
          yin_xu_zhi_point <= 10 &&
          tan_shi_zhi_point <= 10 &&
          shi_re_zhi_point <= 10 &&
          xue_yu_zhi_point <= 10 &&
          qi_yu_zhi_point <= 10 &&
          te_bing_zhi_point <= 10
        ) {
          ping_he_zhi_zd = "基本是平和质";
        }

        zd =
          qi_xu_zhi_zd +
          " " +
          yang_xu_zhi_zd +
          " " +
          yin_xu_zhi_zd +
          " " +
          tan_shi_zhi_zd +
          " " +
          shi_re_zhi_zd +
          " " +
          xue_yu_zhi_zd +
          " " +
          qi_yu_zhi_zd +
          " " +
          te_bing_zhi_zd +
          " " +
          ping_he_zhi_zd;

        this.CalculateScoremessage(zd)
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

