<template>
  <div class="exam-card" v-if="examList">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div slot="header" class="clearfix">
          <span style="color: blue">{{message}}</span>
           <el-button style="margin-left: 35%;padding: 3px 0" type="text">保存数据</el-button>
          <el-switch style="float: right; padding: 3px 0"
                     v-model="switchStatus"
                     v-loading="loading"
                     @change="switchChange"
                     active-text="连接">
          </el-switch>
        </div>
      </div>
      <div class="physical-form">
        <div class="demo-input-suffix">
          姓名：
          <el-tag>陈十三</el-tag>
        </div>
        <div class="demo-input-suffix">
          编号：
          <el-tag type="info">99999999999</el-tag>
        </div>
        <div class="demo-input-suffix">
          体检编码：
          <el-tag type="success">45045645879</el-tag>
        </div>
      </div>
      <el-collapse accordion>
        <el-collapse-item :title="item.FeeItemName" :name="item.FeeItemName" v-for="item in examListStatus"
                          :key="item.FeeItemCode">
          <div  class="item-flex" v-for="(ite,index) in item.lt" :key="ite.ItemCode">
           <span style="color: blue"> {{ index + 1 }}.{{ ite.ItemName }}</span>
            <span v-if="item.FeeItemCode==='JB001'" style="float: right;color: #67C23A;font-size: 1.3rem"></span>
             <el-divider ></el-divider>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>

</template>

<script>
import {MQTT, Utf8ArrayToStr} from "@/utils/MQTT";

export default {
  name: 'index',
  data() {
    return {
      loading: false,
      switchStatus: false,
      message: '建立连接',
      client: '',
      topic: 'send/weight', // 发布主题
      sub: 'toServer', //订阅主题
      input: '',
      formData:{
        Height:'',
        Weight:'',
        Temperature:'',

      }

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
        if (this.client) {
          this.client.end()
        }
        this.$store.commit('BaseStore/updateMqttClient', '')
        this.$store.commit('BaseStore/updateNetConnect')
        this.message = '建立连接'
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
        this.$store.commit('BaseStore/updateMqttClient', this.client)
        this.client.subscribe(this.sub, (err) => {
          if (!err) {
            this.message = `订阅成功-${this.sub}`
          }
        });

      });
      this.client.on("message", (topic, message) => {
        console.log(topic, message)
        let data = Utf8ArrayToStr(message)
        const {
          params
        } = data
        //this.message = JSON.stringify(data)
        this.$emit("updateData",params)
      });
    }
  },
  computed: {
    examListStatus: function () {
      return this.examList
    },
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
  .item-flex{
    display: flex;
    justify-content: space-between;
  }
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
  min-width: 680px;
  margin-top: 50px;
}
</style>
