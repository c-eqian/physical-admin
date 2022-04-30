<template>
  <div class="add-sys-user">
    <el-dialog
      title="新增机构用户"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" prop="userName">
              <el-input clearable v-model="ruleForm.userName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="证件" prop="idCard">
              <el-input clearable v-model="ruleForm.idCard"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系方式" prop="phone">
              <el-input clearable v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="gender">
              <el-radio-group v-model="ruleForm.gender">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="出生日期" prop="birthday">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday"
                              style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="区域机构" prop="org_id">
              <el-select
                v-model="ruleForm.org_id"
                @visible-change="remoteMethod"
                filterable
                placeholder="请选择机构"
                :loading="loading"
                @change="handleSelect"
              >
                <el-option
                  v-for="item in orgList"
                  :key="item.org_code"
                  :label="item.org_name"
                  :value="item.org_code">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="角色分配" prop="sys_type">
              <el-radio-group v-model="ruleForm.sys_type">
                <el-radio :label="0" name="type">管理员</el-radio>
                <el-radio :label="1" name="type">医生</el-radio>
                <el-radio :label="2" name="type">护士</el-radio>
                <el-radio :label="3" name="type">其他</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="登录账号" prop="userAccount">
          <el-input clearable v-model="ruleForm.userAccount"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="userPassword">
          <el-input show-password clearable v-model="ruleForm.userPassword"></el-input>
        </el-form-item>
        <el-form-item label="启用" prop="status">
          <el-switch v-model="ruleForm.status"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="creatLoading" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="creatUserInfo" :loading="getLoading">获取</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {rules} from '@/views/physical/sys-user-manage/utils'

export default {
  name: "index",
  props: ['dialogVisible'],
  data() {
    return {
      orgList: [],
      loading: false,
      creatLoading: false,
      getLoading: false,
      isRequest: false,
      ruleForm: {
        org_id: '',
        idCard: '',
        phone: '',
        user_id: '',
        userName: '',
        userAccount: '',
        userPassword: '',
        status: true,
        sys_type: '',
        create_by: '',
        authority: '',
        gender: '',
        birthday: ''

      },
      rules: rules
    };
  },
  methods: {
    async creatUserInfo() { // 获取随机数据
      this.getLoading = true
      await this.$get('/creat-user-info', {
        noLoading: true
      }).then(res => {
        if (res.data.status === 200) {
          this.ruleForm = Object.assign({}, this.ruleForm, res.data.result)
        }
        console.log(res)
      })
      this.getLoading = false
    },
    handleSelect(item) {
      console.log(item)
    },
    // 远程搜索
    async remoteMethod(isSearch) {
      if (isSearch && this.orgList.length === 0) {
        this.loading = true
        await this.$get('/sys-org-list', {
          noLoading: true
        }).then(res => {
          if (res.data.status === 200) {
            this.orgList = res.data.result
            console.log(this.orgList)
          } else {
            this.messageTip(res.data.msg)
          }
          console.log(res)
        })
        this.loading = false
      }


    },
    async submitForm(formName) {
      if (this.creatLoading) {
        return
      }
      console.log(222)
      await this.$refs[formName].validate((valid) => {
        this.ruleForm.create_by = this.$store.state.BaseStore.user.user_id
        this.ruleForm.noLoading = true
        this.isRequest = valid;
      })
      if (this.isRequest) {
        this.creatLoading = true
        console.log(3333)
        await this.$post('/add-sys-user', this.ruleForm).then(res => {
          this.messageTip(res.data.msg)
          this.creatLoading = false
          if (res.data.status !== 200) {
            return
          }
          this.isRequest = false
          setTimeout(() => {
            this.$emit('creat-success')
          }, 1500)
        })
      }


    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose() {
      this.$emit('update-viable')

    },
    messageTip(msg = '无数据') { // 提示窗口
      this.$message({
        message: msg,
        type: 'warning',
        duration: 1500
      })
    }
  }
}
</script>

<style scoped lang="scss">
.add-sys-user {

  ::v-deep .el-checkbox-group {
    margin-left: 20px;
  }

  ::v-deep .el-radio-button__inner, .el-radio-group {
    margin-left: 20px;
  }

  ::v-deep .el-form-item__label {
    padding: 0;
  }

  ::v-deep .el-input__inner {
    width: 200px;
  }

  ::v-deep .el-input {
    margin-left: 20px;
    width: 200px;
  }

  ::v-deep .el-switch {
    margin-left: 20px;
  }

  .label-left-align ::v-deep .el-form-item__label {
    text-align: left;
  }

  .label-center-align ::v-deep .el-form-item__label {
    text-align: center;
  }

  .label-right-align ::v-deep .el-form-item__label {
    text-align: right;
  }
}

</style>
