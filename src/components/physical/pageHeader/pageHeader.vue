<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-03-06 23:53:30
 * @LastEditors: 十三
 * @LastEditTime: 2022-03-07 21:30:31
-->
<template>
  <div class="page-header">
      <el-page-header @back="goBack" :content="contentTitle">
</el-page-header>
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  data () {
    return {

    }
  },
  props: ['contentTitle'],
  methods: {
    goBack () {
      this.$emit('goBack')
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.page-header{
  width:12.5rem;
}

</style>
