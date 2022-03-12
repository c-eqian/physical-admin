<template>
  <div class="network-box-card">
    <el-card shadow="hover" class="network-card">
      <div slot="header" class="clearfix">
        <span>网络连接</span>
        <el-switch style="float: right; padding: 3px 0"
          v-model="switchStatus"
                   v-loading="loading"
                   @change="switchChange"
          active-text="连接">
        </el-switch>
      </div>
      <el-input class="el-textarea__inner" v-model="message" type="textarea"></el-input>
    </el-card>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars,import/no-duplicates
import { Mqtt,
  selfMqttClient,
  Utf8ArrayToStr,
  // eslint-disable-next-line no-unused-vars
  mqttConnectStatus,
  disConnection

} from '@/utils/network/mqtt'
// eslint-disable-next-line no-unused-vars,import/no-duplicates
export default {
  name: 'index',
  data () {
    return {
      loading: false,
      switchStatus: false,
      message: ''
    }
  },
  methods: {
    switchChange (status) {
      if (status) {
        this.loading = status
        this.createConnection()
      } else {
        disConnection()
        this.message = '断开连接'
        this.loading = status
      }
    },
    // 创建连接
    createConnection () {
      // eslint-disable-next-line no-unused-vars
      let mqtt = new Mqtt()
      // eslint-disable-next-line no-unused-vars
      mqtt.mqttInit()
      this.loading = false
      this.message = '连接成功'
      mqtt.mqttSub('123456')
      let client = selfMqttClient()
      client.on('message', (topic, message) => {
        this.message = Utf8ArrayToStr(message).msg
        console.log(1, this.message)
      })
    }

  }
}
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.network-box-card /deep/.network-card {
  width: 630px!important;
  min-height: 300px;
}

.network-box-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 600px;
}
.el-textarea__inner{
  min-height: 300px !important;
}
.network-box-card /deep/ .el-textarea__inner,.network-box-card /deep/.el-card__body{
      padding: 0;
}
.network-box-card /deep/.el-textarea__inner textarea{
    width: 100%;

    min-height: 300px !important;
}

</style>
