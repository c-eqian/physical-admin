<template>
  <div style="margin-top: 15px" class="exam-box">
    <el-input placeholder="请输入体检编号" v-model="input3" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <exam-card :examList="examList" @updateData="updateData"></exam-card>

  </div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import examCard from '@/components/physical/exam-card/index'

export default {
  name: 'index',
  data () {
    return {
      input3: '',
      select: '',
      RequisitionId: '21101700009',
      examList: []
    }
  },
  methods: {
    updateData(params){
      console.log(params)
    },
    requestUserExamList () { // 查询该条码下需要体检的项目大类
      this.$get('/current-exam-list', {
        RequisitionId: this.RequisitionId
      }).then(res => {
        if (res.data.status !== 200) {
          this.messageTip(res.data.msg)
        }
        else {
          this.examList = res.data.result
        }
        console.log(res)
      })
    },
    messageTip (msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      })
    }
  },
  created () {
    this.requestUserExamList()
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    examCard

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
