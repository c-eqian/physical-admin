<template>
  <div style="margin-top: 15px" class="exam-box">
        <div>
      <el-row style="position: absolute;right: 50px;z-index: 999999">
        <el-button type="primary" @click="success" icon="el-icon-check" circle></el-button>
        <el-button type="danger" @click="refuse" icon="el-icon-close" circle></el-button>
      </el-row>
    </div>
    <div class="exam-result-card">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <self-base-info :dialogOptions="dialogOptions"></self-base-info>
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
      dialogOptions:{},
        RequisitionId: '',
    }
  },
  created() {
    this.RequisitionId = this.$route.params.id
  },
  methods:{
    refuse() {//不通过
      this.dialogOptions = {
        dialogTitle: '备注',
        dialogPlaceholder: '请输入备注内容',
        DialogShow: true
      }
    },
    success() { // 通过

      // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   this.$message({
      //     type: 'success',
      //     message: '操作成功!'
      //   });
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '已取消删除'
      //   });
      // });
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
