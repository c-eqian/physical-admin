<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-03-05 11:29:46
 * @LastEditors: 十三
 * @LastEditTime: 2022-03-08 22:52:27
-->
<template>
  <el-autocomplete class="input-search" :placeholder="placeholder" :debounce=0
                   @select="handleSelect"
                   :fetch-suggestions="querySearch"
                   @keyup.enter.native="onKeyDown"
                   autocomplete="on" clearable v-model="inputSearch">
    <el-button slot="append" icon="el-icon-search"
               @click="searchBtn">
    </el-button>
  </el-autocomplete>
</template>
<script type="text/javascript">
export default {
  name: "",
  data() {
    return {
      inputSearch: '',//输入搜索
    }
  },
  methods: {
    //建议回调选中
    handleSelect(item) {
      console.log(item);
    },
    //搜索
    searchBtn() {
      if (this.inputSearch != '') {
        this.$emit("search", this.inputSearch)
      } else {
        this.messageTip("请输入搜索内容")
      }


    },
    querySearch(queryString, cb) { //输入框建议回调
      let dataList = [ // 也可以在后端接口动态获取
        {id: 1, value: "111"},
        {id: 2, value: "222"},
        {id: 3, value: "333"},
        {id: 4, value: "444"}
      ]
      var results = queryString ? dataList.filter(this.createFilter(queryString)) : dataList;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    onKeyDown(e) { //监听键盘回车键
      if (e.keyCode === 13 && this.inputSearch !== '') {
        this.$emit("search", this.inputSearch)
      } else {
        this.messageTip('请输入搜索内容')
      }

    },
    messageTip(msg = "无数据") { //提示窗口
      this.$message({
        message: msg,
        type: 'warning',
        duration: 1500
      });
    }
  },
  props: {
    "placeholder": String,
  },
  components: {}
}
</script>

<style lang="less" scoped>
</style>
