<template>
<div>
      <exam-card @add-exam="addExam"  @updateData="updateData" @saveData="saveData"></exam-card>
    <add-exam-dialog :dialogFormVisible="dialogFormVisible" @change-form-visible="dialogFormVisible=false"></add-exam-dialog>

</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import examCard from '@/components/physical/exam-card/index'
import addExamDialog from './components/add-exam-dialog/index'
export default {
  name: 'index',
  data () {
    return {
      input3: '',
      select: '',
      dialogFormVisible: false,
      RequisitionId: '21101700009',
      examList: []
    }
  },
  methods: {
    saveData () {
      let data = { RequisitionId: this.RequisitionId, Height: '', Weight: '', BMI: '', Temperature: '', heart_rate: '' }
      for (const index in this.examList) {
        if (this.examList[index].FeeItemCode === 'JB001') {
          for (const ind in this.examList[index].lt) {
            if (this.examList[index].lt[ind].ItemCode === 'JB-001') {
              data.Height = this.examList[index].lt[ind].value || ''
            }
            if (this.examList[index].lt[ind].ItemCode === 'JB-002') {
              data.Weight = this.examList[index].lt[ind].value || ''
            }
          }
        }
      }
      this.$post('/cache-base-exam', data).then(res => {
        this.messageTip(res.data.msg, res.data.status === 200 ? 'success' : 'error')
      })
    },
    updateData (params) {
      for (const index in this.examList) {
        if (this.examList[index].FeeItemCode === 'JB001') {
          for (const ind in this.examList[index].lt) {
            if (this.examList[index].lt[ind].ItemCode === 'JB-001') {
              this.examList[index].lt[ind].value = params.length
            }
            if (this.examList[index].lt[ind].ItemCode === 'JB-002') {
              this.examList[index].lt[ind].value = params.weight
            }
          }
        }
      }
      this.$store.commit('BaseStore/updateExamList', this.examList)
    },
    requestUserExamList () { // 查询该条码下需要体检的项目大类
      this.$get('/current-exam-list', {
        RequisitionId: this.RequisitionId
      }).then(res => {
        if (res.data.status !== 200) {
          this.messageTip(res.data.msg)
        } else {
          this.examList = res.data.result.list
          this.$store.commit('BaseStore/updateExamList', this.examList)
        }
        console.log(res.data.result.list)
      })
    },
    messageTip (msg, type = 'error') {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    },
    addExam () {
      this.dialogFormVisible = true
    }
  },
  created () {
    // this.requestUserExamList()

  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    examCard,
    addExamDialog

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
  width: 45%;
  margin-left: 25%;
  margin-right: 5%;
  margin-bottom: 25px;
}

/deep/ .el-select .el-input {

}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

</style>
