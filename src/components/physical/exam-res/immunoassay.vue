<template>
  <div>
    <div style="position: absolute;top: 200px;">
      <el-row>
        <el-button type="primary" @click="getUrData" icon="el-icon-check">生成</el-button>
      </el-row>
      <el-row>
        <el-button type="danger" icon="el-icon-close" @click="saveUrData">保存</el-button>
      </el-row>
    </div>
    <h1>尿常规十一项</h1>
    <table>
      <tr>
        <th class="info" colspan="6">姓名:高胜云 &nbsp;&nbsp;&nbsp;性别:男 &nbsp;&nbsp;&nbsp; 年龄:35 &nbsp;&nbsp;&nbsp;送检日期:2019-03-28</th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in result1" :key="item.id">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.reference }}</td>
        <td>{{ item.units }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">尿常规执行编号:ITSY-PPL-195706381</th>
      </tr>
    </table>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>

    <h1>常规便检</h1>
    <table>
      <tr>
        <th class="info" colspan="6">姓名:高胜云 &nbsp;&nbsp;&nbsp;性别:男 &nbsp;&nbsp;&nbsp; 年龄:35 &nbsp;&nbsp;&nbsp;送检日期:2019-03-28</th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in result2" :key="item.id">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.reference }}</td>
        <td>{{ item.units }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">常规便检执行编号:ITSY-PPS-876448093</th>
      </tr>
    </table>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>

    <h1>癌指标筛查</h1>
    <table>
      <tr>
        <th class="info" colspan="6">姓名:高胜云 &nbsp;&nbsp;&nbsp;性别:男 &nbsp;&nbsp;&nbsp; 年龄:35 &nbsp;&nbsp;&nbsp;送检日期:2019-03-28</th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in result3" :key="item.id">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.reference }}</td>
        <td>{{ item.units }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">癌指标筛查执行编号:ITSY-CAN-315891536</th>
      </tr>
    </table>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>
  </div>
</template>
<script>
import {result1, result2, result3} from './mockdata/immunoassay.js'

export default {
  data() {
    return {
      result1,
      result2,
      result3
    }
  },
  methods: {
    getUrData() {
      this.$http.get('/api/random-urine').then(res => {
        let result = res.data;
        this.result1[0].result = result.result1;
        this.result1[0].hint = result.result1 < 5 ? "↓" : "↑"
        this.result1[1].result = result.result2;
        this.result1[1].hint = result.result2 === '-' ? "" : "阳性"
        this.result1[2].result = result.result3;
        this.result1[2].hint = result.result3 === '-' ? "" : "阳性"
        this.result1[3].result = result.result4;
        this.result1[3].hint = result.result4
        this.result1[4].result = result.result5;
        this.result1[4].hint = result.result5 === '-' ? "" : "阳性"
        this.result1[5].result = result.result6;
        this.result1[5].hint = result.result6 === '-' ? "" : "阳性"
        this.result1[6].result = result.result7;
        this.result1[6].hint = result.result7 === '-' ? "" : "阳性"
        this.result1[7].result = result.result8;
        if (1.015 < result.result8 < 1.025) {
          this.result1[7].hint = ""
        } else if (1.015 > result.result8) {
          this.result1[7].hint = "↓"
        } else {
          this.result1[7].hint = "↑"
        }
        this.result1[8].result = result.result9;
        if (4.5 < result.result9 < 8.0) {
          this.result1[8].hint = ""
        } else if (4.5 > result.result9) {
          this.result1[8].hint = "↓"
        } else {
          this.result1[8].hint = "↑"
        }
        this.result1[9].result = result.result10;
        this.result1[9].hint = result.result10 === '-' ? "" : "阳性"
        this.result1[10].result = result.result11;
        this.result1[10].hint = result.result11 === '-' ? "" : "阳性"
      })
    },
    saveUrData() {
      console.log(this.result1)
    },
  }
}
</script>
<style lang="less" scoped>
h1 {
  text-align: center;
}

table {
  // font-size: 14px;
  width: 900px;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid #000;

  th {
    border: 1px solid #000;

    &.info {
      text-align: left;
      padding-left: 10px;
      height: 30px;
    }
  }

  td {
    text-align: left;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    padding-left: 10px;

    strong {
      font-weight: bold;
    }
  }
}

.tips {
  text-align: left;
  width: 900px;
  margin: 0 auto;
  padding: 10px;
}
</style>
