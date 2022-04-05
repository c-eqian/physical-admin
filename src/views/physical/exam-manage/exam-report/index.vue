<template>
  <div style="margin-top: 15px" class="exam-box">
    <el-input clearable placeholder="请输入体检编号" v-model="RequisitionId"  class="input-with-select">
      <el-select  slot="prepend" placeholder="请选择" value="22">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>
    <div class="exam-result-card">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <base-exam :examData="examData" ></base-exam>
        </el-tab-pane>
        <el-tab-pane label="生化检查">
          <other-exam :examData="examData"></other-exam>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>

</template>

<script>
import baseExam from './components/base/index'
import otherExam from './components/other/index'
export default {
  name: 'index',
  data() {
    return {
      examData:{

      },
      dialogOptions:{},
        RequisitionId: '',
    }
  },
  created() {
  },
  methods:{
    search(){
      this.$get('/query_exam_base_and_urine_by_rid',{
        RequisitionId:this.RequisitionId
      }).then(res=>{
        if(res.data.status===200){
          this.examData = Object.assign({},this.examData,res.data.result)
        }else {
          this.messageTip(res.data.msg)
        }
      })
    },
    messageTip(msg, type = 'error') {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    },
  },
  components: {
    baseExam,
    otherExam
  }
}
</script>

<style scoped>
.exam-result-card{
  overflow: auto;
  height: 580px;
}
.exam-box {
  height: 600px;
}

/deep/ .input-with-select {
  width: 50%;
  margin-left: 25%;
  margin-bottom: 25px;
}

/deep/ .el-select .el-input {

}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

</style>
