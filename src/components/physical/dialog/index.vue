<template>
  <el-dialog
    :title="dialogOptions.dialogTitle"
    :visible.sync="show"
    width="30%"
    center>
    <el-input v-model="input" :placeholder="dialogOptions.dialogPlaceholder"></el-input>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogOptions.DialogShow = false">取 消</el-button>
    <el-button type="primary" @click="dialogClicked">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      input: '',
      center: false
    }
  },
  methods: {
    dialogClicked() {
      this.dialogOptions.DialogShow = false
    }
  },
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    show: false,
    dialogOptions: {}
  }
}
</script>

<style scoped>

</style>
