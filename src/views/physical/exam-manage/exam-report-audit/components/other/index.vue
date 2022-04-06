<template>
  <div>
    <h1>尿常规十一项
    </h1>

    <table v-model="TJ002Data=examData.TJ002?examData:Lis_Result1">
      <tr>
        <th class="info" colspan="6">姓名:{{ TJ002Data.name }}
          &nbsp;&nbsp;&nbsp;性别:{{ TJ002Data.gender === 2 ? '女' : '男' }} &nbsp;&nbsp;&nbsp; 年龄:{{ TJ002Data.birthday }}
          &nbsp;&nbsp;&nbsp;送检日期:{{ TJ002Data.VisitingDate }}
        </th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in TJ002Data.TJ002" :key="item.ItemCode">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.ItemName }}</td>
        <td>{{ item.Lis_Result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.Lis_ReferenceRange }}</td>
        <td>{{ item.Lis_ResultUnit }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">尿常规执行编号:ITSY-PPL-195706381</th>
      </tr>
    </table>

    <h1>肝功能
    </h1>

    <table v-model="TJ008Data=examData.TJ008?examData:GTJ008">
      <tr>
        <th class="info" colspan="6">姓名:{{ TJ008Data.name }}
          &nbsp;&nbsp;&nbsp;性别:{{ TJ008Data.gender === 2 ? '女' : '男' }} &nbsp;&nbsp;&nbsp;
          年龄:{{ TJ008Data.birthday || '' }}
          &nbsp;&nbsp;&nbsp;送检日期:{{ TJ008Data.VisitingDate || '' }}
        </th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in TJ008Data.TJ008" :key="item.ItemCode">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.ItemName }}</td>
        <td>{{ item.Lis_Result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.Lis_ReferenceRange }}</td>
        <td>{{ item.Lis_ResultUnit }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">常规便检执行编号:ITSY-PPS-876448093</th>
      </tr>
    </table>

    <h1>血脂四项
    </h1>

    <table v-model="TJ010Data=examData.TJ010?examData:XTJ010">
      <tr>
        <th class="info" colspan="6">姓名:{{ TJ010Data.name }}
          &nbsp;&nbsp;&nbsp;性别:{{ TJ010Data.gender === 2 ? "女" : "男" }}
          &nbsp;&nbsp;&nbsp; 年龄:{{ TJ010Data.birthday }} &nbsp;&nbsp;&nbsp;送检日期:{{ TJ010Data.VisitingDate }}
        </th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in TJ010Data.TJ010" :key="item.ItemCode">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.ItemName }}</td>
        <td>{{ item.Lis_Result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.Lis_ReferenceRange }}</td>
        <td>{{ item.Lis_ResultUnit }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">癌指标筛查执行编号:ITSY-CAN-315891536</th>
      </tr>
    </table>
    <h1>肾功能
    </h1>

    <table v-model="TJ009Data=examData.TJ009?examData:STJ009">
      <tr>
        <th class="info" colspan="6">姓名:{{ TJ009Data.name }}
          &nbsp;&nbsp;&nbsp;性别:{{ TJ009Data.gender === 2 ? "女" : "男" }}
          &nbsp;&nbsp;&nbsp; 年龄:{{ TJ009Data.birthday }} &nbsp;&nbsp;&nbsp;送检日期:{{ TJ009Data.VisitingDate }}
        </th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in TJ009Data.TJ009" :key="item.ItemCode">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.ItemName }}</td>
        <td>{{ item.Lis_Result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.Lis_ReferenceRange }}</td>
        <td>{{ item.Lis_ResultUnit }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">癌指标筛查执行编号:ITSY-CAN-315891536</th>
      </tr>
    </table>
    <h1>血常规
    </h1>

    <table v-model="TJ001Data=examData.TJ001?examData:XTJ001">
      <tr>
        <th class="info" colspan="6">姓名:{{ TJ001Data.name }}
          &nbsp;&nbsp;&nbsp;性别:{{ TJ001Data.gender === 2 ? "女" : "男" }}
          &nbsp;&nbsp;&nbsp; 年龄:{{ TJ001Data.birthday }} &nbsp;&nbsp;&nbsp;送检日期:{{ TJ001Data.VisitingDate }}
        </th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in TJ001Data.TJ001" :key="item.ItemCode">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.ItemName }}</td>
        <td>{{ item.Lis_Result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.Lis_ReferenceRange }}</td>
        <td>{{ item.Lis_ResultUnit }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">癌指标筛查执行编号:ITSY-CAN-315891536</th>
      </tr>
    </table>
    <h1>糖化血红蛋白
    </h1>

    <table v-model="TJ006Data=examData.TJ006?examData:TTJ006">
      <tr>
        <th class="info" colspan="6">姓名:{{ TJ006Data.name }}
          &nbsp;&nbsp;&nbsp;性别:{{ TJ006Data.gender === 2 ? "女" : "男" }}
          &nbsp;&nbsp;&nbsp; 年龄:{{ TJ006Data.birthday }} &nbsp;&nbsp;&nbsp;送检日期:{{ TJ006Data.VisitingDate }}
        </th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in TJ006Data.TJ006" :key="item.ItemCode">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.ItemName }}</td>
        <td>{{ item.Lis_Result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.Lis_ReferenceRange }}</td>
        <td>{{ item.Lis_ResultUnit }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">癌指标筛查执行编号:ITSY-CAN-315891536</th>
      </tr>
    </table>
    <h1>乙肝表面抗原
    </h1>

    <table v-model="TJ007Data=examData.TJ007?examData:YTJ007">
      <tr>
        <th class="info" colspan="6">姓名:{{ TJ007Data.name }}
          &nbsp;&nbsp;&nbsp;性别:{{ TJ007Data.gender === 2 ? "女" : "男" }}
          &nbsp;&nbsp;&nbsp; 年龄:{{ TJ007Data.birthday }} &nbsp;&nbsp;&nbsp;送检日期:{{ TJ007Data.VisitingDate }}
        </th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in TJ007Data.TJ007" :key="item.ItemCode">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.ItemName }}</td>
        <td>{{ item.Lis_Result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.Lis_ReferenceRange }}</td>
        <td>{{ item.Lis_ResultUnit }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">癌指标筛查执行编号:ITSY-CAN-315891536</th>
      </tr>
    </table>
    <h1>空腹血糖
    </h1>

    <table v-model="TJ003Data=examData.TJ003?examData:KTJ003">
      <tr>
        <th class="info" colspan="6">姓名:{{ TJ003Data.name }}
          &nbsp;&nbsp;&nbsp;性别:{{ TJ003Data.gender === 2 ? "女" : "男" }}
          &nbsp;&nbsp;&nbsp; 年龄:{{ TJ003Data.birthday }} &nbsp;&nbsp;&nbsp;送检日期:{{ TJ003Data.VisitingDate }}
        </th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in TJ003Data.TJ003" :key="item.ItemCode">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.ItemName }}</td>
        <td>{{ item.Lis_Result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.Lis_ReferenceRange }}</td>
        <td>{{ item.Lis_ResultUnit }}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">癌指标筛查执行编号:ITSY-CAN-315891536</th>
      </tr>
    </table>
    <h1>大便潜血
    </h1>

    <table v-model="TJ005Data=examData.TJ005?examData:DTJ005">
      <tr>
        <th class="info" colspan="6">姓名:{{ TJ005Data.name }}
          &nbsp;&nbsp;&nbsp;性别:{{ TJ005Data.gender === 2 ? "女" : "男" }}
          &nbsp;&nbsp;&nbsp; 年龄:{{ TJ005Data.birthday }} &nbsp;&nbsp;&nbsp;送检日期:{{ TJ005Data.VisitingDate }}
        </th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in TJ005Data.TJ005" :key="item.ItemCode">
        <td>{{ item.abbreviation }}</td>
        <td>{{ item.ItemName }}</td>
        <td>{{ item.Lis_Result }}</td>
        <td><strong>{{ item.hint }}</strong></td>
        <td>{{ item.Lis_ReferenceRange }}</td>
        <td>{{ item.Lis_ResultUnit }}</td>
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

import {
  DTJ005,
  GTJ008, KTJ003,
  Lis_Result1,
  STJ009,
  TTJ006,
  XTJ001,
  XTJ010,
  YTJ007
} from "@/components/physical/exam-res/mockdata/immunoassay";

export default {
  props: ['examData'],
  data() {
    return {
      TJ001Data: {},
      TJ002Data: {},
      TJ008Data: {},
      TJ010Data: {},
      TJ007Data: {},
      TJ006Data: {},
      TJ005Data: {},
      TJ004Data: {},
      TJ003Data: {},
      TJ009Data: {},
      Lis_Result1,
      GTJ008: GTJ008,
      XTJ010: XTJ010,
      STJ009: STJ009,
      XTJ001: XTJ001,
      TTJ006: TTJ006,
      YTJ007: YTJ007,
      DTJ005: DTJ005,
      KTJ003: KTJ003,
    }
  },
  created() {
    // this.examData.RequisitionId = this.$route.params.id;
    // this.search()
    // console.log(id)
  },
  methods: {
    messageTip(msg, status) {
      this.$message({
        showClose: true,
        message: msg,
        type: status === 200 ? 'success' : 'error'
      })
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
