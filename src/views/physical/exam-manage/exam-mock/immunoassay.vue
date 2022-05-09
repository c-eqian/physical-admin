<template>
  <div>
    <h1>尿常规十一项
      <el-row v-if="checkCode.TJ002">
        <el-button type="primary" @click="getUrData" size="mini" icon="el-icon-check">生成</el-button>
        <el-button type="danger" icon="el-icon-s-promotion" size="mini" @click="saveUrData">保存</el-button>
      </el-row>

    </h1>

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
      <tr v-for="(item, index) in Lis_Result1" :key="item.ItemCode">
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
      <el-row v-if="checkCode.TJ008">
        <el-button type="primary" @click="getTJ008" size="mini" icon="el-icon-check">生成</el-button>
        <el-button type="danger" icon="el-icon-s-promotion" size="mini" @click="saveTJ008">保存</el-button>
      </el-row>
    </h1>

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
      <tr v-for="(item, index) in GTJ008" :key="item.id">
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
      <el-row v-if="checkCode.TJ010">
        <el-button type="primary" @click="getTJ010" size="mini" icon="el-icon-check">生成</el-button>
        <el-button type="danger" icon="el-icon-s-promotion" size="mini" @click="saveTJ010">保存</el-button>
      </el-row>
    </h1>

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
      <tr v-for="(item, index) in XTJ010" :key="item.id">
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
      <el-row v-if="checkCode.TJ009">
        <el-button type="primary" @click="getTJ009" size="mini" icon="el-icon-check">生成</el-button>
       <el-button type="danger" icon="el-icon-s-promotion" size="mini" @click="saveTJ009">保存</el-button>
      </el-row>
    </h1>

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
      <tr v-for="(item, index) in STJ009" :key="item.id">
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
      <el-row v-if="checkCode.TJ001">
        <el-button type="primary" @click="getTJ001" size="mini" icon="el-icon-check">生成</el-button>
        <el-button type="danger" icon="el-icon-s-promotion" size="mini" @click="saveTJ001">保存</el-button>
      </el-row>
    </h1>

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
      <tr v-for="(item, index) in XTJ001" :key="item.id">
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
      <el-row v-if="checkCode.TJ006">
        <el-button type="primary" @click="getTJ006" size="mini" icon="el-icon-check">生成</el-button>
        <el-button type="danger" icon="el-icon-s-promotion" size="mini" @click="saveTJ006">保存</el-button>
      </el-row>
    </h1>

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
      <tr v-for="(item, index) in TTJ006" :key="item.id">
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
      <el-row v-if="checkCode.TJ007">
        <el-button type="primary" @click="getTJ007" size="mini" icon="el-icon-check">生成</el-button>
        <el-button type="danger" icon="el-icon-s-promotion" size="mini" @click="saveTJ007">保存</el-button>
      </el-row>
    </h1>

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
      <tr v-for="(item, index) in YTJ007" :key="item.id">
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
      <el-row v-if="checkCode.TJ003">
        <el-button type="primary" @click="getTJ003" size="mini" icon="el-icon-check">生成</el-button>
       <el-button type="danger" icon="el-icon-s-promotion" size="mini" @click="saveTJ003">保存</el-button>
      </el-row>
    </h1>

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
      <tr v-for="(item, index) in KTJ003" :key="item.id">
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
      <el-row v-if="checkCode.TJ005">
        <el-button type="primary" @click="getTJ005" size="mini" icon="el-icon-check">生成</el-button>
         <el-button type="danger" icon="el-icon-s-promotion" size="mini" @click="saveTJ005">保存</el-button>
      </el-row>
    </h1>

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
      <tr v-for="(item, index) in DTJ005" :key="item.id">
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
  Lis_Result1,
  GTJ008,
  XTJ010,
  STJ009,
  XTJ001,
  TTJ006,
  YTJ007,
  DTJ005,
  KTJ003
} from '@/components/physical/exam-res/mockdata/immunoassay.js'
import qs from 'qs'

export default {
  data() {
    return {
      Lis_Result1,
      GTJ008:GTJ008,
      XTJ010:XTJ010,
      STJ009:STJ009,
      XTJ001:XTJ001,
      TTJ006:TTJ006,
      YTJ007:YTJ007,
      DTJ005:DTJ005,
      KTJ003:KTJ003,
      checkCode:{
        JB001:'',
        TJ002:'',
        TJ003:'',
        TJ005:'',
        TJ006:'',
        TJ007:'',
        TJ008:'',
        TJ009:'',
        TJ010:'',
        TJ001:''
      },
      examData: {
        RequisitionId: '',
      }
    }
  },
  created() {
    this.examData.RequisitionId = this.$route.params.id;
    this.search()
    // console.log(id)
  },
  methods: {
    /**
     * 大便潜血
     * */
    getTJ005(){
      this.$http('/api/DTJ005').then(res=>{
        this.DTJ005 =[... res.data.data]
      })
    },
    saveTJ005(){
      this.saveData(this.DTJ005)
    },
    /**
     * 空腹血糖
     * */
    getTJ003(){
      this.$http('/api/KTJ003').then(res=>{
        this.KTJ003 =[... res.data.data]
      })
    },
    saveTJ003(){
this.saveData(this.KTJ003)
    },
    /**
     * 乙肝表面抗原
     * */
    getTJ007(){
      this.$http('/api/YTJ007').then(res=>{
        this.YTJ007 =[... res.data.data]
      })
    },
    saveTJ007(){
this.saveData(this.YTJ007)
    },
    /**
     * 糖化红蛋白
     * */
    getTJ006(){
      this.$http('/api/TTJ006').then(res=>{
        this.TTJ006 =[... res.data.data]
      })
    },
    saveTJ006(){
this.saveData(this.TTJ006)
    },
    /**
     * 血常规
     * */
    getTJ001(){
      this.$http('/api/XTJ001').then(res=>{
        this.XTJ001 =[... res.data.data]
      })
    },
    saveTJ001(){
this.saveData(this.XTJ001)
    },
    /**
     * 肝功能
     * */
    getTJ008(){
      this.$http('/api/GTJ008').then(res=>{
        this.GTJ008 =[... res.data.data]
      })

    },
    saveTJ008(){
this.saveData(this.GTJ008)
    },
    /**
     * 血脂四项
     * */
    getTJ010(){
      this.$http('/api/XTJ010').then(res=>{
        this.XTJ010 =[... res.data.data]
      })
    },
    saveTJ010(){
    this.saveData(this.XTJ010)
    },
    /**
     * 肾功能
     */
    getTJ009(){
      this.$http('/api/STJ009').then(res=>{
        this.STJ009 =[... res.data.data]
      })
    },
    saveTJ009(){
      this.saveData(this.STJ009)

    },
    search() {
      this.$get('/check_exam_type_btn_by_rid', {RequisitionId: this.examData.RequisitionId}).then(res => {
        if (res.data.status === 200) {
          this.checkCode = Object.assign({}, this.checkCode, res.data.result)
        } else {
          this.messageTip(res.data.msg)
        }
      })
    },
    /**
     * 尿常规
     */
    getUrData() {
      this.$http.get('/api/random-urine').then(res => {
        let result = res.data;
        this.Lis_Result1[0].Lis_Result = result.result1;
        this.Lis_Result1[0].hint = result.result1 < 5 ? "↓" : "↑"
        this.Lis_Result1[1].Lis_Result = result.result2;
        this.Lis_Result1[1].hint = result.result2 === '-' ? "" : "阳性"
        this.Lis_Result1[2].Lis_Result = result.result3;
        this.Lis_Result1[2].hint = result.result3 === '-' ? "" : "阳性"
        this.Lis_Result1[3].Lis_Result = result.result4;
        this.Lis_Result1[3].hint = result.result4
        this.Lis_Result1[4].Lis_Result = result.result5;
        this.Lis_Result1[4].hint = result.result5 === '-' ? "" : "阳性"
        this.Lis_Result1[5].Lis_Result = result.result6;
        this.Lis_Result1[5].hint = result.result6 === '-' ? "" : "阳性"
        this.Lis_Result1[6].Lis_Result = result.result7;
        this.Lis_Result1[6].hint = result.result7 === '-' ? "" : "阳性"
        this.Lis_Result1[7].Lis_Result = result.result8;
        if (1.015 < result.result8 < 1.025) {
          this.Lis_Result1[7].hint = ""
        } else if (1.015 > result.result8) {
          this.Lis_Result1[7].hint = "↓"
        } else {
          this.Lis_Result1[7].hint = "↑"
        }
        this.Lis_Result1[8].Lis_Result = result.result9;
        if (4.5 < result.result9 < 8.0) {
          this.Lis_Result1[8].hint = ""
        } else if (4.5 > result.result9) {
          this.Lis_Result1[8].hint = "↓"
        } else {
          this.Lis_Result1[8].hint = "↑"
        }
        this.Lis_Result1[9].Lis_Result = result.result10;
        this.Lis_Result1[9].hint = result.result10 === '-' ? "" : "阳性"
        this.Lis_Result1[10].Lis_Result = result.result11;
        this.Lis_Result1[10].hint = result.result11 === '-' ? "" : "阳性"
      })
    },
    saveData(params){
      this.$get('/insert-exam-urine-by-rid', {
        RequisitionId: this.examData.RequisitionId,
        data: {data: params},
      }).then(res => {
        this.messageTip(res.data.msg,res.data.status)
      })
    },
    saveUrData() {
      this.saveData(this.Lis_Result1)
    },
    messageTip(msg, status) {
      this.$message({
        showClose: true,
        message: msg,
        type: status===200?'success':'error'
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
