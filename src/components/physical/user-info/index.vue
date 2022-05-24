<template>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="50%"
  :before-close="handleClose">
<el-form :model="formUserInfo=userInfoForm||formUserInfo" ref="vForm"  label-position="left" label-width="72px" size="medium"
    @submit.native.prevent>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="姓名" prop="userName" class="required">
          <el-input  v-model="formUserInfo.name" type="text" placeholder="输入姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="创建者" prop="creator">
          <el-input disabled v-model="formUserInfo.creator" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="证件号码" prop="idCard" class="required label-center-align">
          <el-input  v-model="formUserInfo.idcard" type="text" placeholder="请输入身份证"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="建档时间" prop="creatTime" class="label-center-align">
          <el-date-picker disabled  v-model="formUserInfo.creatime" type="date" class="full-width-input"
            format="yyyy-MM-dd" value-format="yyyy-MM-dd" clearable></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="年龄" prop="age" class="required">
          <el-input disabled v-model="formUserInfo.age" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="所属机构" prop="org_name">
          <el-select  v-model="formUserInfo.org_name" class="full-width-input" >
            <el-option v-for="(item, index) in org_nameOptions" :key="index" :label="item.label"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="民族" prop="nation" class="required">
          <el-select  v-model="formUserInfo.nation" class="full-width-input" >
            <el-option v-for="(item, index) in nationOptions" :key="index" :label="item.label"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="建档状态" prop="status">
          <el-select   v-model="formUserInfo.status" class="full-width-input" >
            <el-option v-for="(item, index) in statusOptions" :key="index" :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="联系方式" prop="phone" class="required label-center-align">
          <el-input  v-model="formUserInfo.phone||''" type="text" placeholder="请输入手机号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="性别" prop="gender" class="required">
          <el-radio-group v-model="formUserInfo.gender">
            <el-radio v-for="(item, index) in genderOptions" :key="item.value" :label="item.label"
               style="{display: inline}">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="出生日期" prop="birthday" class="required label-center-align">
          <el-date-picker   v-model="formUserInfo.birthday" type="date" class="full-width-input"
            format="yyyy-MM-dd" value-format="yyyy-MM-dd" clearable></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="居住类型" prop="live_type" class="required label-center-align">
          <el-radio-group  v-model="formUserInfo.live_type">
            <el-radio v-for="(item, index) in live_typeOptions" :key="index" :label="item.label"
               style="{display: inline}">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="血型" prop="blood_type" class="required">
          <el-select  v-model="formUserInfo.blood_type" class="full-width-input" >
            <el-option v-for="(item, index) in blood_typeOptions" :key="index" :label="item.label"
              :value="item.value" ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="类别" prop="person_type" class="required">
          <el-select  v-model="formUserInfo.person_type" class="full-width-input" >
            <el-option v-for="(item, index) in person_typeOptions" :key="index" :label="item.label"
              :value="item.value" ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="详细地址" prop="address" class="required">
          <el-input  v-model="formUserInfo.address" type="text" placeholder="请输入居住详细地址" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  <el-row style="display: flex;justify-content: space-between">
  <el-col v-if="!type" :span="12">
        <el-switch
  v-model="editor"
  @change="switchChange"
  active-text="编辑">
</el-switch>
  </el-col>
    <el-col :span="12" style="display: flex;justify-content: space-between">
      <el-button  type="primary" @click="addUser">确定</el-button>
      <el-button v-if="type" :loading="getLoading" @click="handleCreate" >生成</el-button>
       <el-button  type="warning" @click="handleClose">关闭</el-button>
    </el-col>
  </el-row>
</el-dialog>

</template>
<script>

import { nationList,
  rules,
  liveType,
  personType,
  boolType,
  genderType,
  orgName,
  statusType
}
  from '@/utils/plugin/utils'

export default {
  name: 'index',
  data () {
    return {
      editor: false,
      getLoading:false,
      selfDialogVisible: false,
      formUserInfo: {
        userName: '',
        creator: '',
        idCard: '',
        creatTime: null,
        age: '',
        org_name: '',
        nation: '',
        status: '',
        phone: '',
        gender: '',
        birthday: null,
        live_type: '',
        blood_type: '',
        person_type: '',
        address: ''
      },
      rules: {},
      org_nameOptions: [],
      nationOptions: [],
      statusOptions: [],
      genderOptions: [],
      live_typeOptions: [],
      blood_typeOptions: [],
      person_typeOptions: []
    }
  },

  created () {
    console.log(this.formUserInfo,258)
    this.statusOptions = statusType()
    this.nationOptions = nationList()
    this.rules = rules()
    this.org_nameOptions = orgName()
    this.genderOptions = genderType()
    this.live_typeOptions = liveType()
    this.blood_typeOptions = boolType()
    this.person_typeOptions = personType()
  },
  methods: {
   async addUser(){
      console.log(this.formUserInfo)
     const userId = this.$store.state.BaseStore.user.user_id;
      if(userId){
        this.formUserInfo.creator = userId;
        if(this.formUserInfo.gender==='男'){
          this.formUserInfo.gender=1;
        }else if(this.formUserInfo.gender==='女'){
          this.formUserInfo.gender=2;
        }
        if(this.formUserInfo.live_type==='户籍'){
          this.formUserInfo.live_type=1;
        }else if(this.formUserInfo.live_type==='非户籍'){
          this.formUserInfo.live_type=2;
        }
        await this.$post('/add-user',this.formUserInfo).then(res=>{
       this.messageTip(res.data.msg)
          if (res.data.status===200){
            setTimeout(()=>{
              this.$emit('closeDialogVisible')
              this.$emit('add-success')
            },1500)
          }
       console.log(res)
     })
      }else {
        this.messageTip('登录异常，请重新登录')
      }
    },
    async handleCreate() { // 获取随机数据
      this.getLoading = true
      await this.$get('/creat-user-info', {
        noLoading: true
      }).then(res => {
        if (res.data.status === 200) {
          this.formUserInfo.gender = res.data.result.gender;
          this.formUserInfo.idcard = res.data.result.idCard;
          this.formUserInfo.birthday = res.data.result.birthday;
          this.formUserInfo.address = res.data.result.address;
          this.formUserInfo.name = res.data.result.userName;
          this.formUserInfo.phone =res.data.result.phone;
          console.log(this.formUserInfo)
          // this.ruleForm = Object.assign({}, this.ruleForm, res.data.result)
        }
        console.log(res)
      })
      this.getLoading = false
    },
    submitForm () {
      this.$refs['vForm'].validate(valid => {
        if (!valid) return
        // TODO: 提交表单
      })
    },
    resetForm () {
      this.$refs['vForm'].resetFields()
    },
    switchChange(val){

      console.log(val)
    },
    handleClose (done) {
      this.editor = false
      this.$emit('user-info-form',{})
      this.$emit('closeDialogVisible')

    },
    messageTip(msg = '无数据') { // 提示窗口
      this.$message({
        message: msg,
        type: 'warning',
        duration: 1500
      })
    }
  },
  // eslint-disable-next-line vue/no-dupe-keys
  props: ['dialogVisible', 'userInfoForm','type']
}
</script>

<style lang="scss">
 .el-form el-form--label-left.el-input{
    width: 200px!important;
  }
  .el-input-number.full-width-input,
  .el-cascader.full-width-input {
    width: 100% !important;
  }

  .el-form-item--medium {
    .el-radio {
      line-height: 36px !important;
    }

    .el-rate {
      margin-top: 8px;
    }
  }

  .el-form-item--small {
    .el-radio {
      line-height: 32px !important;
    }

    .el-rate {
      margin-top: 6px;
    }
  }

  .el-form-item--mini {
    .el-radio {
      line-height: 28px !important;
    }

    .el-rate {
      margin-top: 4px;
    }
  }

  .clear-fix:before,
  .clear-fix:after {
    display: table;
    content: "";
  }

  .clear-fix:after {
    clear: both;
  }

  .float-right {
    float: right;
  }

</style>

<style lang="scss" scoped>
  div.table-container {
    table.table-layout {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;

      td.table-cell {
        display: table-cell;
        height: 36px;
        border: 1px solid #e1e2e3;
      }
    }
  }

  div.tab-container {}
//  ::v-deep .el-form-item__label{
//  padding: 0;
//}
    ::v-deep .el-input__inner{
      width: 200px;
    }
    ::v-deep .el-input{
      width: 200px;
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

  .custom-label {}

  .static-content-item {
    min-height: 20px;
    display: flex;
    align-items: center;

    ::v-deep .el-divider--horizontal {
      margin: 0;
    }
  }

</style>
