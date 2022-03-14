<template>
  <div>
    <h1>血清检查一</h1>
    <table>
      <tr>
        <th class="info" colspan="6">姓名:高胜云 &nbsp;&nbsp;&nbsp;性别:男 &nbsp;&nbsp;&nbsp; 年龄:35 &nbsp;&nbsp;&nbsp;送检日期:2019-03-28</th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>

      <tr v-for="(item, index) in list1" :key="item.id">
        <td>{{item.abbreviation}}</td>
        <td>{{item.name}}</td>
        <td>{{item.result}}</td>
        <td><strong>{{item.hint}}</strong></td>
        <td>{{item.reference}}</td>
        <td>{{item.units}}</td>
      </tr>

      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">血清检查执行编号:ITSY-BBT-779016484</th>
      </tr>
    </table>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>

    <h1>血清检查二</h1>
    <table>
      <tr>
        <th class="info" colspan="6">姓名:高胜云 &nbsp;&nbsp;&nbsp;性别:男 &nbsp;&nbsp;&nbsp; 年龄:35 &nbsp;&nbsp;&nbsp;送检日期:2019-03-28</th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in list2" :key="item.id">
        <td>{{item.abbreviation}}</td>
        <td>{{item.name}}</td>
        <td>{{item.result}}</td>
        <td><strong>{{item.hint}}</strong></td>
        <td>{{item.reference}}</td>
        <td>{{item.units}}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">血清检查执行编号:ITSY-BBT-779033798</th>
      </tr>
    </table>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>

    <h1>全血检查一</h1>
    <table>
      <tr>
        <th class="info" colspan="6">姓名:高胜云 &nbsp;&nbsp;&nbsp;性别:男 &nbsp;&nbsp;&nbsp; 年龄:35 &nbsp;&nbsp;&nbsp;送检日期:2019-03-28</th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in list3" :key="item.id">
        <td>{{item.abbreviation}}</td>
        <td>{{item.name}}</td>
        <td>{{item.result}}</td>
        <td><strong>{{item.hint}}</strong></td>
        <td>{{item.reference}}</td>
        <td>{{item.units}}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">全血检查执行编号:ITSY-BBC-2335337790</th>
      </tr>
    </table>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>

    <h1>全血检查二</h1>
    <table>
      <tr>
        <th class="info" colspan="6">姓名:高胜云 &nbsp;&nbsp;&nbsp;性别:男 &nbsp;&nbsp;&nbsp; 年龄:35 &nbsp;&nbsp;&nbsp;送检日期:2019-03-28</th>
      </tr>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in list4" :key="item.id">
        <td>{{item.abbreviation}}</td>
        <td>{{item.name}}</td>
        <td>{{item.result}}</td>
        <td><strong>{{item.hint}}</strong></td>
        <td>{{item.reference}}</td>
        <td>{{item.units}}</td>
      </tr>
      <tr>
        <th class="info" colspan="3">体检执行编号:ITSY9088465812</th>
        <th class="info" colspan="3">全血检查执行编号:ITSY-BBC-233697033</th>
      </tr>
    </table>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>
  </div>
</template>
<script>
import {list1,list2,list3,list4} from './mockdata/bloodcheck.js'
export default {
  data() {
    return {
      list1,
      list2,
      list3,
      list4
    }
  }
}
</script>
<style lang="less" scoped>
    h1{
      text-align: center;
    }
  table{
    // font-size: 14px;
    width: 900px;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid #000;
    th{
      border: 1px solid #000;
      &.info{
        text-align: left;
        padding-left: 10px;
        height: 30px;
      }
    }
    td{
      text-align: left;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      padding-left: 10px;
      strong{
        font-weight: bold;
      }
    }
  }
  .tips{
    text-align: left;
    width: 900px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
