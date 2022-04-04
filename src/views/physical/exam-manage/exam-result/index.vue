<template>
  <div style="margin-top: 15px" class="exam-box">
<!--    <el-input clearable placeholder="请输入体检编号" v-model="userInfo.RequisitionId" class="input-with-select">-->
<!--      <el-select v-model="select" slot="prepend" placeholder="请选择">-->
<!--        <el-option label="餐厅名" value="1"></el-option>-->
<!--        <el-option label="订单号" value="2"></el-option>-->
<!--        <el-option label="用户电话" value="3"></el-option>-->
<!--      </el-select>-->
<!--      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>-->
<!--    </el-input>-->
    <!--    <exam-card></exam-card>-->
    <div class="exam-result-card">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <self-base-info></self-base-info>
        </el-tab-pane>
        <el-tab-pane label="生化检查">
          <blood-check></blood-check>
        </el-tab-pane>
        <el-tab-pane label="心电图检查">
          <e-c-g></e-c-g>
        </el-tab-pane>
        <el-tab-pane label="免疫检查">
          <immunoassay></immunoassay>
        </el-tab-pane>
        <el-tab-pane label="B超">
          <ultrasound></ultrasound>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import examCard from '@/components/physical/exam-card/index'
import selfBaseInfo from '@/components/physical/exam-res/base-info'
// eslint-disable-next-line no-unused-vars
import bloodCheck from '@/components/physical/exam-res/bloodcheck'
// eslint-disable-next-line no-unused-vars
import ECG from '@/components/physical/exam-res/ecg'
// eslint-disable-next-line no-unused-vars
import immunoassay from '@/components/physical/exam-res/immunoassay'
// eslint-disable-next-line no-unused-vars
import ultrasound from '@/components/physical/exam-res/ultrasound'
// eslint-disable-next-line no-unused-vars
import xray from '@/components/physical/exam-res/xray'

export default {
  name: 'index',
  data() {
    return {
      userInfo:{
        RequisitionId: '21101700009',
      }
    }
  },
  methods:{
    search(){
      this.$get('/get-cache-base-exam', {RequisitionId:this.userInfo.RequisitionId}).then(res => {
      if(res.data.status===200){
          this.userInfo = Object.assign({},this.userInfo,res.data.result)
      }
      else {
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
    // eslint-disable-next-line vue/no-unused-components
    examCard,

    selfBaseInfo,

    // eslint-disable-next-line vue/no-unused-components
    bloodCheck,
    // eslint-disable-next-line vue/no-unused-components
    ECG,
    // eslint-disable-next-line vue/no-unused-components
    immunoassay,
    // eslint-disable-next-line vue/no-unused-components
    ultrasound,
    // eslint-disable-next-line vue/no-unused-components
    xray

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
