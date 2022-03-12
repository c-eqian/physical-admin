<template>
<div style="margin-top: 15px">
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
    <exam-card></exam-card>
</div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import examCard from '@/components/physical/exam-card/index'
export default {
  name: 'index',
  data () {
    return {
      input3: '',
      select: ''
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    examCard
  }
}
</script>

<style scoped>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

</style>
