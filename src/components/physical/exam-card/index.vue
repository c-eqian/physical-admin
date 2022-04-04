<template>
  <div style="margin-top: 15px" class="exam-box">
    <el-input clearable placeholder="请输入体检编号" v-model="formData.RequisitionId"  class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"  @click="search"></el-button>
    </el-input>
    <el-button type="primary" @click="mockData">MOCK数据</el-button>
    <div class="exam-card" v-if="examList">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div slot="header" class="clearfix">
            <span style="color: blue">{{ message }}</span>
            <el-button style="margin-left: 35%;padding: 3px 0" @click="saveData" type="text">保存数据</el-button>
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
          <el-collapse-item title="基本体检" v-model="formData">
            <div class="item-flex">
              <span style="color: blue"> 1.身高(cm)</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{`${formData.Height}`}}</span>
              <el-divider></el-divider>
            </div>
            <div class="item-flex">
              <span style="color: blue"> 2.体重(kg)</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{`${formData.Weight}`}}</span>
              <el-divider></el-divider>
            </div>
            <div class="item-flex">
              <span style="color: blue"> 3.体温(℃)</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{`${formData.Temperature}`}}</span>
              <el-divider></el-divider>
            </div>
            <div class="item-flex">
              <span style="color: blue"> 4.心率(次/min)</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{`${formData.heart_rate}`}}</span>
              <el-divider></el-divider>
            </div>
          </el-collapse-item>
          <el-collapse-item :title="item.FeeItemName" :name="item.FeeItemName" v-for="item in examList"
                            :key="item.FeeItemCode" v-if="item.FeeItemCode!=='JB001'">
            <div class="item-flex" v-for="(ite,index) in item.lt" :key="ite.ItemCode">
              <span style="color: blue"> {{ index + 1 }}.{{ ite.ItemName }}</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{ ite.value, ite.ItemName }}</span>
              <el-divider></el-divider>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
  </div>
</template>

<script>
import {MQTT, Utf8ArrayToStr} from "@/utils/MQTT";

export default {
  name: 'index',
  data() {
    return {
      input3: '',
      select: '',

      examList: [],
      loading: false,
      switchStatus: false,
      message: '建立连接',
      client: '',
      topic: 'send/weight', // 发布主题
      sub: 'toServer', //订阅主题
      input: '',
      formData: {
        RequisitionId: '21101700009',
        Weight: '',
        Height:"",
        Temperature: '',
        heart_rate:'',
        BMI:'',
      }

    }
  },
  created() {
    this.client = this.$store.state.BaseStore.mqttClient
    this.switchStatus = this.$store.state.BaseStore.netConnect
  },
  methods: {
    mockData(){
      this.$router.push({name:'examReportMock'})
    },
    search(){
       this.requestUserExamList()
    },
    saveData() {
      this.$post('/cache-base-exam', this.formData).then(res => {
        this.messageTip(res.data.msg, res.data.status === 200 ? 'success' : 'error')
      })
    },
    updateData(params) {
      this.formData.Height = params.length;
      this.formData.Weight = params.weight;
      this.$store.commit('BaseStore/updateExamList', this.examList)
    },
    requestUserExamList() { // 查询该条码下需要体检的项目大类
      this.$get('/current-exam-list', {
        RequisitionId: this.formData.RequisitionId
      }).then(res => {
        if (res.data.status !== 200) {
          this.messageTip(res.data.msg)
        } else {
          this.examList = res.data.result
          this.$store.commit('BaseStore/updateExamList', this.examList)
        }
        console.log(res)
      })
    },
    messageTip(msg, type = 'error') {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    },
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
        clientId: `physical-weight${new Date().getTime()}`
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
        this.updateData(params)
      });
    },

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

.item-flex {
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
