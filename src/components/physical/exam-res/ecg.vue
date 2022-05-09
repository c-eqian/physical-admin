<template>
  <div>
     <div style="position: absolute;top:">
      <el-row >
        <el-button type="primary"  icon="el-icon-check" >生成</el-button>
      </el-row>
      <el-row><el-button type="danger"  icon="el-icon-close" >保存</el-button></el-row>
    </div>
    <h1>心电图检查</h1>
    <table>
      <tr>
        <th class="info" colspan="6">姓名:高胜云 &nbsp;&nbsp;&nbsp;性别:男 &nbsp;&nbsp;&nbsp; 年龄:35 &nbsp;&nbsp;&nbsp;检查日期:2019-03-28</th>
      </tr>
      <tr>
        <th>项目</th>
        <th>实测</th>
        <th>正常值</th>
        <th>项目</th>
        <th>实测</th>
        <th>正常值</th>
      </tr>
      <tr>
        <td>P 波时限(秒)</td>
        <td>0.10</td>
        <td><0.12</td>
        <td>P-R 间期(秒)</td>
        <td>0.42</td>
        <td>0.32~0.44</td>
      </tr>
      <tr>
        <td>P-R 间期(秒)</td>
        <td>0.14</td>
        <td>0.12~0.20</td>
        <td>QTc 时限(秒)</td>
        <td>0.42</td>
        <td><0.45</td>
      </tr>
      <tr>
        <td>QSR 时限(秒)</td>
        <td>0.08</td>
        <td>0.06~0.10</td>
        <td>心房率(次/分钟)</td>
        <td>89</td>
        <td>60~100</td>
      </tr>
      <tr>
        <td>电轴(度)</td>
        <td>+45°</td>
        <td>+30°~90</td>
        <td>心室率(次/分钟)</td>
        <td>89</td>
        <td>60~100</td>
      </tr>
    </table>
    <div class="serialNumber">体检执行编号:ITSY9088465812 超声波执行编号:ITSY-ECG-41879714</div>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
    h1{
      text-align: center;
    }
  table{
    width: 900px;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    th,td{
      border: 1px solid #000;
      &.info{
        text-align: left;
        padding-left: 10px;
        height: 30px;
      }
    }
    td{
      text-align: left;
      padding-left: 20px;
    }
  }
  .tips,.serialNumber{
    text-align: left;
    width: 900px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
