<template>
  <div>
    <el-input clearable placeholder="请输入体检编号" v-model="examData.RequisitionId" class="input-with-select">
      <el-select slot="prepend" placeholder="请选择" value="111">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>
    <div v-if="visible">
      <el-row style="position: absolute;right: 50px">
        <el-button type="primary" @click="success" icon="el-icon-check" circle></el-button>
        <el-button type="danger" @click="refuse" icon="el-icon-close" circle></el-button>
      </el-row>
    </div>
    <div v-else style="position: absolute;top: 200px;">
      <el-row>
        <el-button type="primary" @click="getBaseData" icon="el-icon-s-promotion">生成</el-button>
      </el-row>
      <el-row>
        <el-button type="danger" @click="saveBaseData" icon="el-icon-check">保存</el-button>
      </el-row>
    </div>
    <h1>体检结果基础信息</h1>
    <table class="base-info">
      <tr>
        <td>体检执行编号</td>
        <td colspan="8" class=" height-30">{{ examData.RequisitionId }}</td>
      </tr>
      <tr>
        <td class="center height-30">姓名</td>
        <td colspan="2" class="center height-30" style="width:200px">{{ examData.name }}</td>
        <td class="center height-30" style="height: 30px">性别</td>
        <td class="center height-30">{{ examData.gender === 2 ? '女' : '男' }}</td>
        <td class="center height-30" style="height: 30px">年龄</td>
        <td colspan="3" class="center height-30" style="width:300px">{{ examData.birthday }}</td>
      </tr>
      <tr>
        <td class="center height-30">证件号码</td>
        <td colspan="4" class="center height-30">{{ examData.idCard }}</td>
        <td class="center height-30">体检时间</td>
        <td colspan="3" class="center height-30">{{ examData.VisitingDate }}</td>
      </tr>
      <tr>
        <td class="center height-30">联系地址</td>
        <td colspan="4" style="width:400px" class="center height-30">{{ examData.cur_address }}</td>
        <td>联系电话</td>
        <td colspan="3" style="width:300px" class="center height-30">{{ examData.phone }}</td>
      </tr>
      <!-- 一般状况 -->
      <tr>
        <td rowspan="6">一般状况</td>
        <td class="center height-30">身高</td>
        <td colspan="2" class="center">{{ examData.Height }} cm</td>
        <td class="center height-30">体重</td>
        <td class="center height-30" colspan="2">{{ examData.Weight }} kg</td>
        <td class="top" rowspan="6" colspan="2"></td>
      </tr>
      <tr>
        <td class="center height-30"> 体质指数（BMI</td>
        <td class="center height-30">{{ `${examData.BMI}` }}kg</td>
        <td class="center height-30">参考值：</td>
        <td colspan="2">体质指数正常值：18.5～23.9</td>

      </tr>
      <tr>
        <td class="center height-30">心率</td>
        <td class="center height-30">{{ `${examData.heart_rate}` }}次/分钟</td>
        <td class="center height-30">体温</td>
        <td class="center height-30">{{ `${examData.Temperature}` }}℃</td>
      </tr>
      <tr>
      </tr>
      <tr>
        <td class="center height-30"> 血压</td>
        <td colspan="4" class="center height-30">{{ `${examData.LSBP}/${examData.LDBP}` }}mmHg</td>
      </tr>
      <tr>
        <td colspan="6" class="center height-30">血压正常值：舒张压：60-90mmHg 收缩压：90-140mmHg</td>
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
        <td colspan="2" class=" height-30">老年人智力评估</td>
        <td colspan="4" class="center height-30">心血管 : 正常</td>
        <td class="top" rowspan="4" colspan="2">医师意见: 可遵医嘱口服维<br>生素B族</td>
      </tr>

      <tr>
        <td colspan="2" class=" height-30">老年人中医体质辨识</td>
        <td colspan="4" class="center height-30">心血管 : 正常</td>
      </tr>
      <tr>
        <td colspan="2" class=" height-30">老年人自理评估</td>
        <td colspan="4" class="center height-30">心血管 : 正常</td>
      </tr>
      <tr>
        <td colspan="2" class=" height-30">老年人自理评估</td>
        <td colspan="4" class="center height-30">心血管 : 觉哦啊红烧婚纱后送哈怂上海好好</td>
      </tr>
      <!-- 内科 -->
      <tr>
        <td rowspan="5">内科</td>
        <td colspan="3" class=" height-30" style="height: 30px"></td>
        <td colspan="3" class=" height-30" style="height: 30px"></td>
        <td class="top" rowspan="5" colspan="2"><br>时吃药;脂肪肝,平时注意运动,<br></td>
      </tr>
      <tr>

      </tr>
      <tr>
        <td colspan="3" class=" height-30"></td>
        <td colspan="3" class=" height-30"></td>
      </tr>
      <tr>
        <td colspan="3" class=" height-30"></td>
        <td colspan="3" class=" height-30"></td>
      </tr>
      <tr>
        <td colspan="6" class=" height-30">其他 : 无</td>
      </tr>

      <!-- 外科 -->
      <tr>
        <td rowspan="4">外科</td>
        <td colspan="2" class=" height-30">皮肤 : 正常</td>
        <td colspan="2" class=" height-30">四肢 : 正常</td>
        <td colspan="2" class=" height-30">淋巴 : 无</td>
        <td class="top" rowspan="4" colspan="2">医生意见 : 建议去专业健身中<br>心在教练指导下进行减重训练</td>
      </tr>
      <tr>

      </tr>
      <tr>
        <td colspan="2" class=" height-30">关节 : 正常</td>
        <td colspan="2" class=" height-30">脊柱 : 正常</td>
        <td colspan="2" class=" height-30">甲状腺 : 正常</td>
      </tr>
      <tr>
        <td colspan="6" class=" height-30">其他 : 无</td>
      </tr>
      <tr>
        <td>化验检验</td>
        <td colspan="3" class=" height-30">肝功能(ALT) : 正常</td>
        <td colspan="5" class=" height-30">乙型肝炎表面抗原(HBsAg) : 阴性</td>
      </tr>
      <tr>
        <td>胸部透视</td>
        <td colspan="3" class=" height-30">正常</td>
        <td colspan="5" class=" height-30">其他 : 无</td>
      </tr>
      <tr>
        <td class="center height-30">审核医生</td>
        <td colspan="8" class="center height-30"></td>
      </tr>
    </table>
    <div class="tips">* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据</div>
    <el-dialog
      :title="dialogOptions.dialogTitle"
      :visible.sync="dialogOptions.DialogShow"
      width="30%"
      center>
      <el-input clearable @input="inputChange" type="textarea" v-model="dialogInput"
                :placeholder="dialogOptions.dialogPlaceholder"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogOptions.DialogShow = false">取 消</el-button>
    <el-button :disabled="dialogInputDisable" type="primary" @click="dialogClicked">确 定</el-button>
  </span>
    </el-dialog>
  </div>

</template>

<script>
import {handle_BMI} from "@/utils/handle";

export default {
  name: 'base-info',
  data() {
    return {
      dialogOptions: {},
      dialogInput: '',
      dialogInputDisable: false,
      visible: false,
      examData: {
        RequisitionId: '21101700009',
        org_code: '',
        Height: '',
        Weight: '',
        name: '',
        birthday: '',
        gender: '',
        idCard: '',
        VisitingDate: '',
        cur_address: '',
        phone: '',
        BMI: '',
        heart_rate: '',
        Temperature: '36.5',
        LSBP: '',
        LDBP: ''
      }

    }
  },
  // computed: {
  //   userInfoChange: function () {
  //     // this.examData = Object.assign({}, this.examData,this.userInfo)
  //     this.examData.RequisitionId = this.userInfo.RequisitionId;
  //     this.examData.RequisitionId = this.userInfo.RequisitionId;
  //     this.examData.BMI = handle_BMI(this.examData.Height,this.examData.Weight)
  //     return this.examData
  //   }
  // },
  created() {
    this.visible = this.$route.params.visible;
    const id = this.$route.params.id;
    console.log(id)
  },
  methods: {
    search() {
      this.$get('/get-cache-base-exam', {RequisitionId: this.examData.RequisitionId}).then(res => {
        if (res.data.status === 200) {
          this.examData = Object.assign({}, this.examData, res.data.result)
        } else {
          this.messageTip(res.data.msg)
        }
      })
    },
    saveBaseData() {
      this.examData.Operator = this.$store.state.BaseStore.user.name
      console.log(this.examData)
      this.$post('/insertbaseexam', this.examData).then(res => {
        this.messageTip(res.data.msg)
      })
    },
    getBaseData() {
      this.$http.get('/api/base-exam').then(res => {
        this.$confirm('是否覆盖现有数据?', '提示', {
          confirmButtonText: '覆盖',
          cancelButtonText: '不了',
          type: 'warning'
        }).then(() => {
        this.examData.LDBP = res.data.LDBP;
        this.examData.LSBP = res.data.LSBP;
        this.examData.Weight = res.data.Weight.toString();
        this.examData.Height = res.data.Height.toString();
        this.examData.heart_rate = res.data.heart_rate.toString();
        this.examData.Temperature = res.data.Temperature.toString();
        this.examData.VisitingDate = res.data.VisitingDate;
        this.examData.BMI = handle_BMI(res.data.Height, res.data.Weight)
        }).catch(() => {
          this.examData.LDBP = res.data.LDBP;
        this.examData.LSBP = res.data.LSBP;
        this.examData.heart_rate = res.data.heart_rate.toString();
        this.examData.Temperature = res.data.Temperature.toString();
        this.examData.VisitingDate = res.data.VisitingDate;
        this.examData.BMI = handle_BMI(res.data.Height, res.data.Weight)

        });
        // console.log(this.examData)
      })


    },
    inputChange() {

    },
    messageTip(msg, type = 'error') {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    },
    dialogClicked() {

    },
    refuse() {//不通过
      this.dialogOptions = {
        dialogTitle: '备注',
        dialogPlaceholder: '请输入备注内容',
        DialogShow: true
      }
    },
    success() { // 通过

      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
  }
}
</script>

<style scoped lang="less">
.height-30 {
  height: 30px;
}

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

.tips {
  text-align: left;
  width: 900px;
  margin: 0 auto;
  padding: 10px;
}
</style>
