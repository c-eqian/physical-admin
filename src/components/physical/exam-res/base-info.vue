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

      <!-- 眼科 -->
      <tr>
        <td rowspan="4">眼科</td>
        <td rowspan="2">裸眼视力</td>
        <td colspan="">右: 0.3</td>
        <td rowspan="2">矫正视力(度数)</td>
        <td colspan="3">右 -575</td>
        <td class="top" rowspan="4" colspan="2">医师意见:不过用眼疲劳,<br>每天三次眼保健操</td>
      </tr>
      <tr>
        <td>左: 0.5</td>
        <td colspan="3">左 -425</td>
      </tr>
      <tr>
        <td colspan="6">色觉 :正常</td>
      </tr>
      <tr>
        <td colspan="6">其他 :右眼散光50,左眼散光50,瞳距62</td>
      </tr>

      <!-- 五官科 -->
      <tr>
        <td rowspan="3">五官科</td>
        <td>听力(0~25dB)</td>
        <td>右: &gt;10cm</td>
        <td>左: &gt;10cm</td>
        <td colspan="3">耳疾: 无</td>
        <td class="top" rowspan="3" colspan="2">医师意见: 可遵医嘱口服维<br>生素B族</td>
      </tr>
      <tr>
        <td colspan="3">嗅觉(嗅阈检查) : 无黑色失嗅带</td>
        <td colspan="3">口吃 : 无</td>
      </tr>
      <tr>
        <td colspan="6">颜面部 : 面部有闭口及痤疮,无肿块,其他无异常</td>
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
    h1{
      text-align: center;
    }
  .base-info{
    // border: 1px solid #000;
    display: block;
    width: 900px;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    td{
      border: 1px solid #000;
      white-space:nowrap;
      width: 100px;
      text-align: left;
      padding-left: 10px;
      &.center{
        text-align: center;
      }
      &.top{
        vertical-align: top;
      }
    }
  }
  .tips,{
    text-align: left;
    width: 900px;
    margin: 0 auto;
    padding: 10px;
  }
</style>

