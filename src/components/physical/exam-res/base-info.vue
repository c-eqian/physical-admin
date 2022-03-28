<template>
  <div>
    <h1>体检结果基础信息</h1>
    <table class="base-info">
      <tr>
        <td class="center">姓名</td>
        <td colspan="2" style="width:200px">高胜云</td>
        <td class="center">性别</td>
        <td>男</td>
        <td class="center">年龄</td>
        <td colspan="3" style="width:300px">35</td>
      </tr>
      <tr>
        <td>联系地址</td>
        <td colspan="4" style="width:400px">上海市浦东新区高博路211弄1304室</td>
        <td>联系电话</td>
        <td colspan="3" style="width:300px">18616242909</td>
      </tr>

      <!-- 一般状况 -->
      <tr>
        <td rowspan="4">一般状况</td>
        <td>身高 : 171cm</td>
        <td colspan="2"></td>
        <td>体重</td>
        <td colspan="2">104kg</td>
        <td class="top" rowspan="4" colspan="2"></td>
      </tr>
      <tr>
        <td> 体质指数（BMI</td>
        <td>222kg</td>
        <td>参考值：</td>
        <td colspan="2">体质指数正常值：18.5～23.9</td>

      </tr>
      <tr>
        <td> 血压</td>
        <td colspan="2">正常</td>
        <td> 状态</td>
        <td>正常</td>
      </tr>
      <tr>
        <td colspan="6">血压正常值：舒张压：60-90mmHg 收缩压：90-140mmHg</td>
      </tr>

      <!-- 心电图 -->
      <tr>
        <td rowspan="3">心电图</td>
        <td colspan="6" style="height: 200px">血压正常值：舒张压：60-90mmHg 收缩压：90-140mmHg</td>
        <td class="top" rowspan="3" colspan="2">医师意见: 可遵医嘱口服维<br>生素B族</td>
      </tr>
      <tr>
      </tr>
      <tr>
      </tr>

      <!-- B超 -->
      <tr>
        <td rowspan="3">B超</td>
        <td colspan="6" style="height: 200px">血压正常值：舒张压：60-90mmHg 收缩压：90-140mmHg</td>
        <td class="top" rowspan="3" colspan="2">医师意见: 可遵医嘱口服维<br>生素B族</td>
      </tr>
      <tr>
      </tr>
      <tr>
      </tr>
      <!-- 老年人评估 -->
      <tr>
        <td rowspan="4">老年人评估</td>
        <td colspan="2">老年人智力评估</td>
        <td colspan="4">心血管 : 正常</td>
        <td class="top" rowspan="4" colspan="2">医师意见: 可遵医嘱口服维<br>生素B族</td>
      </tr>

      <tr>
        <td colspan="2">老年人中医体质辨识</td>
        <td colspan="4">心血管 : 正常</td>
      </tr>
      <tr>
        <td colspan="2">老年人自理评估</td>
        <td colspan="4">心血管 : 正常</td>
      </tr>
            <tr>
        <td colspan="2">老年人自理评估</td>
        <td colspan="4" style="min-height: 100px;width: 100px">心血管 : 觉哦啊红烧婚纱后送哈怂上海好好</td>
      </tr>
      <!-- 内科 -->
      <tr>
        <td rowspan="5">内科</td>
        <td>心率</td>
        <td>89次/分钟</td>
        <td colspan="4">血压: 85/130mmHg</td>
        <td class="top" rowspan="5" colspan="2">医师意见:血压稍高,询问后得<br>知平时有口服降压药,注意按<br>时吃药;脂肪肝,平时注意运动,<br>尽量少吃高热量,高脂肪食物</td>
      </tr>
      <tr>
        <td colspan="3">发育及营养状况 : 正常</td>
        <td colspan="3">心血管 : 正常</td>
      </tr>
      <tr>
        <td colspan="3">神经及精神 : 正常</td>
        <td colspan="3">肝 : 脂肪肝</td>
      </tr>
      <tr>
        <td colspan="3">肺及呼吸道 : 正常</td>
        <td colspan="3">脾 : 正常</td>
      </tr>
      <tr>
        <td colspan="6">其他 : 无</td>
      </tr>

      <!-- 外科 -->
      <tr>
        <td rowspan="4">外科</td>
        <td>身高 : 171cm</td>
        <td colspan="2"></td>
        <td>体重</td>
        <td colspan="2">104kg</td>
        <td class="top" rowspan="4" colspan="2">医生意见 : 建议去专业健身中<br>心在教练指导下进行减重训练</td>
      </tr>
      <tr>
        <td colspan="2">皮肤 : 正常</td>
        <td colspan="2">四肢 : 正常</td>
        <td colspan="2">淋巴 : 无</td>
      </tr>
      <tr>
        <td colspan="2">关节 : 正常</td>
        <td colspan="2">脊柱 : 正常</td>
        <td colspan="2">甲状腺 : 正常</td>
      </tr>
      <tr>
        <td colspan="6">其他 : 无</td>
      </tr>
      <tr>
        <td>化验检验</td>
        <td colspan="3">肝功能(ALT) : 正常</td>
        <td colspan="5">乙型肝炎表面抗原(HBsAg) : 阴性</td>
      </tr>
      <tr>
        <td>胸部透视</td>
        <td colspan="3">正常</td>
        <td colspan="5">其他 : 无</td>
      </tr>
      <tr>
        <td>体检执行编号</td>
        <td colspan="8">ITSY9088465812</td>
      </tr>
    </table>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>
  </div>
</template>

<script>
export default {
  name: 'base-info'
}
</script>

<style scoped lang="less">
h1 {
  text-align: center;
}

.base-info {
  // border: 1px solid #000;
  display: block;
  width: 900px;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;

  td {
    border: 1px solid #000;
    white-space: nowrap;
    width: 100px;
    text-align: left;
    padding-left: 10px;

    &.center {
      text-align: center;
    }

    &.top {
      vertical-align: top;
    }
  }
}

.tips, {
  text-align: left;
  width: 900px;
  margin: 0 auto;
  padding: 10px;
}
</style>

