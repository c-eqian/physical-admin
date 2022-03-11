<template>
  <el-menu
    class="menu-nav"
    router
    :default-active="currentPath"
    background-color="#20222A"
    text-color="rgba(255,255,255,.8)"
    active-text-color="#ffd04b"
    :collapse="isCollapse">
        <!--          一级导航-->
          <el-submenu :index="item.menuid+''" v-for="item in menu" :key="item.menuid">
            <template slot="title">
              <i  :class='item.icon'></i>
              <span slot="title">{{ item.menuname }}</span>
            </template>
            <!--          二级菜单-->
            <el-menu-item :index="item2.path" v-for="item2 in item.children" :key="item2.menuid">
              <i :class='item2.icon'></i>
              <span slot="title">{{ item2.menuname }}</span>
            </el-menu-item>
          </el-submenu>
<!--    <el-menu-item index="/console">-->
<!--      <i class="el-icon-location"></i>-->
<!--      <span slot="title">主页</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="/users">-->
<!--      <i class="el-icon-menu"></i>-->
<!--      <span slot="title">用户</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="/articles">-->
<!--      <i class="el-icon-document"></i>-->
<!--      <span slot="title">文章</span>-->
<!--    </el-menu-item>-->
<!--    <el-submenu index="4">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-setting"></i>-->
<!--        <span>设置</span>-->
<!--      </template>-->
<!--      <el-menu-item index="/profile">基本资料 (空)</el-menu-item>-->
<!--      <el-menu-item index="/password">修改密码 (空)</el-menu-item>-->
<!--    </el-submenu>-->
<!--    <el-menu-item index="/echarts">-->
<!--      <i class="el-icon-share"></i>-->
<!--      <span slot="title">图表</span>-->
<!--    </el-menu-item>-->
  </el-menu>
</template>

<script>
export default {
  props: ['isCollapse'],
  data () {
    return {
      currentPath: location.pathname
    }
  },
  computed: {
    menu () {
      // eslint-disable-next-line no-unused-vars
      let MENU = this.$store.state.BaseStore.menus
      return MENU
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu {
    border: none;
  }
  .menu-nav:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
