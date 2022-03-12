<!--
 * @Descripttion: 
 * @version: 
 * @Author: 十三
 * @Date: 2022-03-06 19:53:43
 * @LastEditors: 十三
 * @LastEditTime: 2022-03-06 20:03:57
-->
<template>
  <div>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[50, 100, 150, 200]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userTotal">
    </el-pagination>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "",
  data() {
    return {
      userTotal:0,
      currentPage: 1,//当前页
      pageSize: 50,//每页数据

    }
  },
  methods: {
    handleCurrentChange(){
    console.log("1")
    },
    handleSizeChange(){
       console.log("1")
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
</style>
