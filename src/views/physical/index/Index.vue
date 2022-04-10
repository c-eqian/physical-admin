<template>
  <el-container class="index-box">
    <el-aside :width="asideWidth">
      <div class="logo" v-show="!isCollapse">

<!--        <img class="logo" v-show="!isCollapse" src="../../../assets/logo2.png" alt="ELementUI" >-->
      </div>
      <menus :isCollapse="isCollapse"/>
    </el-aside>
    <el-container>
      <el-header>
        <headers/>
      </el-header>
      <el-main>
        <router-view v-if="isRouterAlive"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menus from '@/components/menus/menus'
import './main.css'
import Headers from '@/components/header/header'

export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  components: {
    Menus,
    Headers
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.BaseStore.isCollapse
    },
    asideWidth () {
      return this.$store.state.BaseStore.isCollapse ? 'auto' : '200px'
    }
  }
}
</script>

<style lang="scss">
.index-box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  .el-container{
    height: 100%;
    .el-main {
      height: 100%;
    }
  }
  .el-aside {
    background-color: #20222A;
    height: 100vh;
    min-height: 100%;
    .logo {
      background-repeat: no-repeat;
      background-image: url("../../../assets/logo2.png");
      //background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fdesgin_photo%2F40078%2F3835_list.jpg&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652168259&t=fde62ac70e74776aa995f647a169918f");
      color: rgba(255,255,255,.8);
      text-align: center;
      height: 60px;
      width: 100%;
      box-sizing: border-box;
      background-size:cover;
      border-bottom: 1px solid gray;
    }
  }
  .el-header {
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    background-color: #fff;
    line-height: 60px;
  }
}

</style>
