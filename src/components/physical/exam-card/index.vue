<template>
  <div class="exam-card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="physical-form">
        <div class="demo-input-suffix">
          体重：
          <el-input
            placeholder="请输入内容"
            v-model="input">
          </el-input>
        </div>
        <div class="demo-input-suffix">
          体重：
          <el-input
            placeholder="请输入内容"
            v-model="input">
          </el-input>
        </div>
        <div class="demo-input-suffix">
          体重：
          <el-input
            placeholder="请输入内容"
            v-model="input">
          </el-input>
        </div>
        <div class="demo-input-suffix">
          体重：
          <el-input
            placeholder="请输入内容"
            v-model="input">
          </el-input>
        </div>
      </div>
      <el-collapse>
        <el-collapse-item title="基础体检" name="1">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="尿常规" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="血常规" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="肝功能" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
        <el-collapse-item title="肾功能" name="5">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
        <el-collapse-item title="其他" name="6">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.physical-form {
  display: flex;
  justify-content: space-between;
}

.el-input {
  width: 100px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.exam-card {
  width: 100%;
  display: flex;
  justify-content: center;
}

.box-card {
  /*overflow: auto;*/
  width: 680px !important;
  margin-top: 50px;
}
</style>
