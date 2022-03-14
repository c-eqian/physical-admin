<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-03-09 21:13:08
 * @LastEditors: 十三
 * @LastEditTime: 2022-03-09 21:56:38
-->
<template>
  <div id="physical-res-form">
    <div class="physical-res-header">
      <pageHeader :contentTitle="contentTitle" @goBack="goBack"></pageHeader>
      <nav-list></nav-list>
      </div>
    <router-view/>
  </div>
</template>

<style lang="less">
    h1{
      text-align: center;
    }
.physical-res-header{
  width: 98%;
  margin-left: 1%;
  display: flex;
  align-items: center;
}
#physical-res-form {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import NavList from './navlist'
import pageHeader from '../../../components/physical/pageHeader/pageHeader.vue'
export default {
  data() {
    return {
      contentTitle:"体检报告单"
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  },
  components:{
    NavList,
    pageHeader
  }
}
</script>
