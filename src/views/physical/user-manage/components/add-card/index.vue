<template>
  <el-dialog center width="40%" title="添加绑卡" :visible.sync="addCardVisible">
    <el-form :model="form=rowForm">
      <el-row>
        <el-col>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input disabled v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="卡号" :label-width="formLabelWidth">
            <el-input clearable v-model="cardId" autocomplete="off"></el-input>
          </el-form-item>

        </el-col>
      </el-row>
      <el-switch
        v-model="switchStatus"
        active-text="连接"
        @change="switchChange"
        v-loading="loading"
      >
      </el-switch>
    </el-form>
    <div slot="footer" class="dialog-footer">

      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="updateAddCardVisible">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {MQTT, Utf8ArrayToStr} from "@/utils/MQTT";

export default {
  name: "index",
  props: ['addCardVisible', 'rowForm'],
  data() {
    return {
      switchStatus: false,
      loading: false,
      sub: 'addCard', //订阅主题
      client: '',
      cardId:'',
      form: {
        name: '',
        cardId: '',
        userId: '',
        idCard: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    updateData(params) {
      this.form.cardId = params
      this.cardId = params
      // this.formData.Height = params.height||this.formData.Height;
      // this.formData.Weight = params.weight||this.formData.Weight;
      // this.formData.heart_rate = params.HR||this.formData.heart_rate;
      // this.formData.Temperature = params.temperature||this.formData.Temperature
      // this.$store.commit('BaseStore/updateExamList', this.examList)
    },
    switchChange(status) {
      this.loading = status
      if (status) {
        this.createConnection()
      } else {
        //连接断开
        if (this.client) {
          this.client.end()
          this.client = ''
        }
      }
    },
    // 创建连接
    createConnection() {
      let mqtt = new MQTT({
        clientId: `physical-addCard${new Date().getTime()}`
      })

      this.client = mqtt.mqtt_init()
      this.client.on("connect", e => {
        this.message = '连接成功'
        this.loading = false
        this.client.subscribe(this.sub, (err) => {
          if (!err) {
            this.message = `连接成功`
            this.MqttTip('连接成功')
          } else {
            this.MqttTip('连接异常', 'error')
          }
        });

      });
      this.client.on("message", (topic, message) => {
        if(topic===this.sub){
          this.noticeMsg()
        let {
          id
        } = Utf8ArrayToStr(message)
          // console.log(id)
          this.updateData(id)
        }

      });
    },
    MqttTip(msg, type = 'success') {
      this.$message({
        message: msg,
        type: type
      });
    },
    noticeMsg() {
      this.$notify({
        title: '读卡成功',
        message: '数据接收成功',
        type: 'success'
      });
    },
    close() {
      this.$emit('update-visible')
    },
    updateAddCardVisible() {
      this.$get('/add-card',{
        userId:this.rowForm.userId,
        cardId:this.cardId,
      }).then(res=>{
        this.MqttTip(res.data.msg,res.data.status===200?'success':'error')
        if(res.data.status===200){
          setTimeout(()=>{
            this.close()
          },1500)
        }
      })
      // this.$emit('update-visible')
    }
  }
}
</script>

<style scoped>

</style>
