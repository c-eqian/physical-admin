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
// import { Mqtt,
//   selfMqttClient,
//   Utf8ArrayToStr,
//   // eslint-disable-next-line no-unused-vars
//   mqttConnectStatus,
//   disConnection
//
// } from '@/utils/network/mqtt'
import {MQTT, Utf8ArrayToStr} from '@/utils/MQTT/index'
// eslint-disable-next-line no-unused-vars,import/no-duplicates
export default {
  name: 'index',
  data() {
    return {
      loading: false,
      switchStatus: false,
      message: '',
      client: '',
      topic: 'send/weight', // 发布主题
      sub: 'toServer', //订阅主题
    }
  },
  created() {
    this.client = this.$store.state.BaseStore.mqttClient
    this.switchStatus = this.$store.state.BaseStore.netConnect
  },
  methods: {
    switchChange(status) {
      this.loading = status
      if (status) {
        this.createConnection()
      } else {
        //连接断开
        if(this.client) {
          this.client.end()
        }
        this.$store.commit('BaseStore/updateMqttClient','')
        this.$store.commit('BaseStore/updateNetConnect')
        this.message = '断开连接'
      }
    },
    // 创建连接
    createConnection() {
      let mqtt = new MQTT({
        clientId: "physical-weight"
      })

      this.client = mqtt.mqtt_init()
      this.client.on("connect", e => {
        this.message = '连接成功'
        this.loading = false
        this.$store.commit('BaseStore/updateNetConnect')
        this.$store.commit('BaseStore/updateMqttClient',this.client)
        this.client.subscribe(this.sub, (err) => {
          if (!err) {
            this.message = `订阅成功-${this.sub}`
          }
        });

      });
      this.client.on("message", (topic, message) => {
        console.log(topic, message)
        this.message = JSON.stringify(Utf8ArrayToStr(message))
      });


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

.network-box-card /deep/ .network-card {
  width: 630px !important;
  min-height: 300px;
}

.network-box-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 600px;
}

.el-textarea__inner {
  min-height: 300px !important;
}

.network-box-card /deep/ .el-textarea__inner, .network-box-card /deep/ .el-card__body {
  padding: 0;
}

.network-box-card /deep/ .el-textarea__inner textarea {
  width: 100%;

  min-height: 300px !important;
}

</style>
