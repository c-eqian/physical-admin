<template>
  <div>
      <h1>胸透报告</h1>
      <div class="uname">姓名:高胜云    性别:男     年龄:35    检查日期:2019-03-28</div>
      <div class="result" v-html="result"></div>
      <div class="conclusion">结论:所检项目均正常</div>
      <div class="serialNumber">体检执行编号:ITSY9088465812 超声波执行编号:ITSY-XRAY-796005530</div>
      <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>
  </div>
</template>
<script>
import { result } from './mockdata/xray.js'
export default {
  data () {
    return {
      result
    }
  },
}
</script>
<style lang="less" scoped>
    h1{
      text-align: center;
    }
  .result{
    text-align: left;
    width: 900px;
    margin: 0 auto;
  }
  .tips,.serialNumber,.conclusion{
    text-align: left;
    width: 900px;
    margin: 0 auto;
    padding: 10px;
  }
  .conclusion{
    font-weight: 700;
    font-size: 20px;
  }
  .uname{
    font-weight: 700;
    text-align: left;
    width: 900px;
    margin: 0 auto;
    font-size: 18px;
  }
</style>
