<template>

  <div class="add-exam-dialog">
    <!-- Form -->
    <el-dialog title="新增体检" :visible.sync="dialogFormVisible"
               :before-close="handleClose"
    >
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm"
               @submit.native.prevent
      >
        <el-form-item class="width-80" label="身份证号" prop="name">
          <el-input @keydown.enter.native="searchClicked" v-model="ruleForm.idCard"></el-input>
          <el-button class="search-dialog" type="primary" @click="searchClicked">查询</el-button>
        </el-form-item>
        <div class="user-info-card" v-if="showStatus">
          <el-form-item label="基本信息">
            <el-col :span="11">
              <el-form-item label="姓名">
                <el-input disabled v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="出生日期">
                <el-input disabled v-model="ruleForm.birthday"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="">
            <el-col :span="11">
              <el-form-item label="性别">
                <el-input disabled v-model="ruleForm.gender"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item disabled label="所属机构" prop="region">
                <el-input disabled v-model="ruleForm.org_name"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="" prop="delivery">
            <el-form-item label="体检项目" prop="type">
              <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
              >全选
              </el-checkbox>
              <el-checkbox-group v-model="checkedList" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="item in ruleForm.codeList.lt"
                             :label="item.FeeItemCode"
                             name="type"
                             :key="item.FeeItemCode"
                >{{ item.FeeItemName }}
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitFormClicked()">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </div>
      </el-form>
      <!--    <div slot="footer" class="dialog-footer">-->
      <!--      <el-button @click="dialogFormVisible = false">取 消</el-button>-->
      <!--      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
      <!--    </div>-->
    </el-dialog>
  </div>
</template>

<script>
import diaLogFormRules from './utils/formRules';
import form from './utils/formRules';

export default {
  name: "index",
  props: ['dialogFormVisible'],
  data() {
    return {
      checkAll: false,
      isIndeterminate: true,
      rules: diaLogFormRules,
      showStatus: false,
      ruleForm: form,
      submitForm:{
        userId:'',
        apply_type:''
      },
      list: [],
      checkedList: ['JB001'],
    }
  },
  methods: {
    handleCheckAllChange(val) {
      console.log(val)
      if (val)
        for (var item of this.list) {
          this.checkedList.push(item.FeeItemCode)
        }
      else {
        this.checkedList = ['JB001']
      }
      this.isIndeterminate = false;
      console.log(this.checkedList)
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.list.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.list.length;

    },
    /**
     * 查询
     */
    searchClicked() {
      this.$get('/query_user_details_by_idCard', {
        idCard: this.ruleForm.idCard
      }).then(res => {
        if (res.data.status === 200) {
          this.ruleForm = res.data.result
          this.list = res.data.result.codeList.lt
          this.submitForm.userId = res.data.result.userId;
          this.showStatus = true
        } else {
          this.messageTip(res.data.msg)
          this.showStatus = false
        }

      })
    },
    /**
     * 弹窗关闭前处理
     */
    handleClose() {
      this.$emit('change-form-visible')
    },
    messageTip(msg, type = 'error') {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    },
    submitFormClicked() {
      if(this.checkedList){
        this.submitForm.apply_type = this.checkedList;
        this.$get('/add-apply-list',{
          userId:this.submitForm.userId,
          apply_type:JSON.stringify(this.checkedList)

        }).then(res=>{
          this.messageTip(res.data.msg,res.data.status===200?'success':'error')
        })
      }else {
        this.messageTip('表单有误，请检查!')
      }
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!');
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      // this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped lang="scss">
.add-exam-dialog {
  .search-dialog {
    float: right;
  }

  /deep/ .width-80 .el-input {
    width: 80%;
  }
}

</style>
