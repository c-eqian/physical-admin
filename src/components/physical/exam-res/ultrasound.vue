<template>
  <div>
    <h1>超声波检查</h1>
    <div class="uname">姓名:高胜云    性别:男     年龄:35    检查日期:2019-03-28</div>
    <div class="result" v-for="(item, index) in result" :key="index.id">
      <div v-html="item.result"></div>
    </div>
    <div class="serialNumber">体检执行编号:ITSY9088465812 超声波执行编号:ITSY-ULT-703149111</div>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>
  </div>
</template>
<script>
import {result} from './mockdata/ultrasoundcheck.js'
export default {
  data () {
    return {
      result
    }
  }
}
</script>
<style lang="less" scoped>
    h1{
      text-align: center;
    }
  .result{
    width: 900px;
    margin: 0 auto;
    text-align: left;
  }
  .tips,.serialNumber{
    text-align: left;
    width: 900px;
    margin: 0 auto;
    padding: 10px;
  }
  .uname{
    font-weight: 700;
    text-align: left;
    width: 900px;
    margin: 0 auto;
    font-size: 18px;
  }
</style>
