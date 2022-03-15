<template>
  <div class="exam-card"  v-if="examList">
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
        <el-collapse-item :title="item.FeeItemName" :name="item.FeeItemName" v-for="item in examList" :key="item.FeeItemCode">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
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
  },
  props: ['examList']
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
