<template>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="50%"
  :before-close="handleClose">
<!--    <el-descriptions class="margin-top" title="无边框列表" :column="3" :size="size">-->
<!--    <template slot="extra">-->
<!--      <el-button type="primary" size="small">操作</el-button>-->
<!--    </template>-->
<!--    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>-->
<!--    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>-->
<!--    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>-->
<!--    <el-descriptions-item label="备注">-->
<!--      <el-tag size="small">学校</el-tag>-->
<!--    </el-descriptions-item>-->
<!--    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>-->
<!--  </el-descriptions>-->
<!--  <span slot="footer" class="dialog-footer">-->
<!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
<!--  </span>-->
<el-form :model="formUserInfo=userInfoForm||formUserInfo" ref="vForm" :rules="rules" label-position="left" label-width="72px" size="medium"
    @submit.native.prevent>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="姓名" prop="userName" class="required">
          <el-input :disabled="!editor" v-model="formUserInfo.name" type="text" placeholder="输入姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="创建者" prop="creator">
          <el-input disabled v-model="formUserInfo.creator" type="text" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="证件号码" prop="idCard" class="required label-center-align">
          <el-input :disabled="!editor" v-model="formUserInfo.idcard" type="text" placeholder="请输入身份证"></el-input>
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
          <el-select :disabled="!editor" v-model="formUserInfo.org_name" class="full-width-input" >
            <el-option v-for="(item, index) in org_nameOptions" :key="index" :label="item.label"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="民族" prop="nation" class="required">
          <el-select :disabled="!editor" v-model="formUserInfo.nation" class="full-width-input" >
            <el-option v-for="(item, index) in nationOptions" :key="index" :label="item.value"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="建档状态" prop="status">
          <el-select  :disabled="!editor" v-model="formUserInfo.status" class="full-width-input" >
            <el-option v-for="(item, index) in statusOptions" :key="index" :label="item.value"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="联系方式" prop="phone" class="required label-center-align">
          <el-input :disabled="!editor" v-model="formUserInfo.phone" type="text" placeholder="请输入手机号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="性别" prop="gender" class="required">
          <el-radio-group v-model="formUserInfo.gender">
            <el-radio v-for="(item, index) in genderOptions" :key="index" :label="item.label"
              :disabled="!editor" style="{display: inline}">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="出生日期" prop="birthday" class="required label-center-align">
          <el-date-picker :disabled="!editor"  v-model="formUserInfo.birthday" type="date" class="full-width-input"
            format="yyyy-MM-dd" value-format="yyyy-MM-dd" clearable></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="居住类型" prop="live_type" class="required label-center-align">
          <el-radio-group :disabled="!editor" v-model="formUserInfo.live_type">
            <el-radio v-for="(item, index) in live_typeOptions" :key="index" :label="item.label"
              :disabled="item.disabled" style="{display: inline}">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="血型" prop="blood_type" class="required">
          <el-select :disabled="!editor" v-model="formUserInfo.blood_type" class="full-width-input" >
            <el-option v-for="(item, index) in blood_typeOptions" :key="index" :label="item.label"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="类别" prop="person_type" class="required">
          <el-select :disabled="!editor" v-model="formUserInfo.person_type" class="full-width-input" >
            <el-option v-for="(item, index) in person_typeOptions" :key="index" :label="item.label"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="grid-cell">
        <el-form-item label="详细地址" prop="address" class="required">
          <el-input :disabled="!editor" v-model="formUserInfo.address" type="text" placeholder="请输入居住详细地址" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  <el-row style="display: flex;justify-content: space-between">
  <el-col :span="12">
        <el-switch
  v-model="editor"
  active-text="编辑">
</el-switch>
  </el-col>
    <el-col :span="12" style="display: flex;justify-content: space-between">
      <el-button  type="primary">确定</el-button>
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
  orgName
}
  from '@/utils/plugin/utils'

export default {
  name: 'index',
  data () {
    return {
      editor: false,
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
    this.nationOptions = nationList()
    this.rules = rules()
    this.org_nameOptions = orgName()
    this.genderOptions = genderType()
    this.live_typeOptions = liveType()
    this.blood_typeOptions = boolType()
    this.person_typeOptions = personType()
  },
  methods: {
    submitForm () {
      this.$refs['vForm'].validate(valid => {
        if (!valid) return
        // TODO: 提交表单
      })
    },
    resetForm () {
      this.$refs['vForm'].resetFields()
    },
    handleClose (done) {
      this.editor = false
      this.$emit('closeDialogVisible')
      // console.log(111)
      // done()
      // this.$confirm('确认关闭？', {
      //   type: 'warning'
      // }).then(_ => {
      //   done()
      // })
      //   .catch(_ => {})
      // done()
    }
  },
  // eslint-disable-next-line vue/no-dupe-keys
  props: ['dialogVisible', 'userInfoForm']
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
  ::v-deep .el-form-item__label{
  padding: 0;
}
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
