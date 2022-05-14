<template>
  <el-descriptions class="margin-top" title="带边框列表" :column="3" border>
    <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      {{ userInfo.sys_user_name }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        证件
      </template>
      {{ userInfo.idCard }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        性别
      </template>
      {{ userInfo.sex }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      {{ userInfo.phone }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        账号
      </template>
      {{ userInfo.sys_user_account }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        密码
      </template>
      {{ userInfo.sys_user_password }}
      <el-button type="primary " @click="visiblePassWord" size="mini">显示</el-button>
    </el-descriptions-item>

    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        创建人
      </template>
      {{ userInfo.create_by }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        邮箱
      </template>
      {{ userInfo.email }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        所属机构
      </template>
      {{ userInfo.org_name }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        创建时间
      </template>
      {{ userInfo.register_time }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        更新时间
      </template>
      {{ userInfo.account_change_time }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        状态
      </template>
      <el-tag :type="userInfo.statusType.tag">
        {{
          userInfo.statusType.label
        }}
      </el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag :type="userInfo.type.tag">
        {{
          userInfo.type.label
        }}
      </el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        联系地址
      </template>
      {{
        userInfo.address
      }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import {handleLabel, handleStatus} from "@/views/physical/personal/utils";
import {handlefForMatTime, handleGender} from "@/utils/plugin/utils";

export default {
  name: "index",
  data() {
    return {
      userId: '',
      sys_user_password: '',
      userInfo: {
        sys_user_password: '',
        account_change_time:'',
        register_time:'',
        statusType: {
          label: '',
          tag: ''
        },
        type: {
          label: '',
          tag: ''
        }
      }
    }
  },
  created() {
    this.userId = this.$store.state.BaseStore.user.user_id;
    if (this.userId) {
      this.getUserInfo()
    } else {
      this.messageTip('账号异常，请重新登录!', 'error')
      setTimeout(() => {
        this.$router.replace({
          name: 'Login'
        })
      }, 1500)
    }
  },
  methods: {
    visiblePassWord() {
      if (this.userInfo.sys_user_password.includes('*')) {
        this.userInfo.sys_user_password = this.$SM4DeCrypto(this.sys_user_password).toString()
      } else {
        let password = Array.from(this.$SM4DeCrypto(this.userInfo.sys_user_password).toString())
        let enLength = ''
        password.forEach(item => {
          enLength += '*'
        })
        this.userInfo.sys_user_password = enLength
      }
    },
    getUserInfo() {
      this.$get('/query-sys-user-info', {
        userId: this.userId
      }).then(res => {
        if (res.data.status === 200) {
          this.userInfo = Object.assign({}, this.userInfo, res.data.result);
          this.sys_user_password = this.userInfo.sys_user_password;
          let password = Array.from(this.$SM4DeCrypto(this.userInfo.sys_user_password).toString())
          let enLength = ''
          password.forEach(item => {
            enLength += '*'
          })
          this.userInfo.sys_user_password = enLength
          this.userInfo.statusType = handleStatus(this.userInfo.status);
          this.userInfo.sex = handleGender(this.userInfo.sex)
          this.userInfo.type = handleLabel(this.userInfo.sys_type);
          this.userInfo.register_time  = handlefForMatTime(this.userInfo.register_time)
          this.userInfo.account_change_time  = handlefForMatTime(this.userInfo.account_change_time)
        }
        console.log(res)
      })
    },
    messageTip(msg = '无数据', type = 'warning') { // 提示窗口
      this.$message({
        message: msg,
        type: type,
        duration: 1500
      })
    }
  }
}
</script>

<style scoped>

</style>
