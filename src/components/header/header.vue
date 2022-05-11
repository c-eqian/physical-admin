<template>
  <div class="header-box">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <button class="btn-tool" title="折叠" @click="collapse">
          <i :class="changeIcon"></i>
        </button>
        <button class="btn-tool" title="返回" @click="toBack">
          <i class="el-icon-back"></i>
        </button>
        <button class="btn-tool" title="向后" @click="toGo">
          <i class="el-icon-right"></i>
        </button>
        <button class="btn-tool" title="刷新" @click="refresh">
          <i class="el-icon-refresh"></i>
        </button>
        <button class="btn-tool" title="全屏" @click="Utils.fullScreen">
          <i class="el-icon-rank"></i>
        </button>
        <button class="btn-tool" title="便签" @click="dialogVisible = true">
          <i class="el-icon-edit"></i>
        </button>
        <button class="btn-tool" title="消息" @click="dialogVisible = true">
          <i class="iconfont icon-shoucanghezi"></i>
        </button>
        <button class="btn-tool" title="用户体检" @click="dialogVisible = true">
          <i class="iconfont icon-shenqing"></i>
        </button>
<!--        <el-popover-->
        <!--          placement="top-start"-->
        <!--          title=""-->
        <!--          width="200"-->
        <!--          trigger="hover"-->
        <!--          content="用户体检申请">-->
        <!--          <button slot="reference" class="btn-tool" title="体检申请" @click="applyClicked">-->
        <!--          <el-badge is-dot class="iconfont icon-tongzhi1"></el-badge>-->
        <!--        </button>-->
        <!--        </el-popover>-->
        <button class="btn-tool" title="体检申请" @click="applyClicked">
          <el-badge is-dot class="iconfont icon-tongzhi1"></el-badge>
        </button>
        <button class="btn-tool" title="网络连接" @click="netConnectClicked">
          <el-badge is-dot class="iconfont" :class="netConnectStatus"></el-badge>
        </button>
      </el-col>
      <el-col :span="6" align="right">
        <span>{{ Utils.todayDate() }}</span>
        <el-dropdown trigger="click" class="user-name" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
         <el-avatar  size="small" src="https://s1.ax1x.com/2022/04/16/LYmxwn.jpg"></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile" disabled>个人资料</el-dropdown-item>
            <el-dropdown-item command="updatepwd" disabled>修改密码</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-dialog title="便签" width="400px"
               :close-on-click-modal="false"
               :visible.sync="dialogVisible"
               @closed="saveNotes">
      <el-input
        type="textarea"
        :rows="7"
        placeholder="请输入内容"
        v-model="notes">
      </el-input>
    </el-dialog>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  data () {
    return {
      isCollapse: false,
      dialogVisible: false,
      notes: localStorage.getItem('notes') || '便签中的内容会存储在本地，这样即便你关掉了浏览器，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录'
    }
  },
  methods: {
    toGo(){
      this.$router.go(1)
    },
    toBack(){
      this.$router.go(-1)
    },
    applyClicked () { // 申请列表
      this.$router.push({ name: 'applyList' })
    },
    netConnectClicked () { // 网络连接
      this.$router.push({ path: '/network-manage/Internet-connection' })
    },
    collapse () {
      this.$store.commit('BaseStore/switchCollapse')
    },
    refresh () {
      this.reload()
    },
    saveNotes () {
      localStorage.setItem('notes', this.notes)
    },
    handleCommand (command) {
      switch (command) {
        case 'logout':
          this.$router.replace({ path: '/login' })
          break
      }
    }
  },
  //
  computed: {
    netConnectStatus () { // 网络连接状态
      // eslint-disable-next-line no-unused-vars
      let status = this.$store.state.BaseStore.netConnect
      return status ? 'icon-wuxianwangluo' : 'icon-wuwangluo'
    },
    changeIcon () {
      let icon = this.$store.state.BaseStore.isCollapse
      return icon ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
    },
    username () {
      // eslint-disable-next-line no-unused-vars
      let { name } = this.$store.state.BaseStore.user
      return name
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-tool {
  border: none;
  background: transparent;
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  text-align: left;
}

.user-name {
  margin-left: 20px;
}
</style>
