<template>
  <div class="echarts-box">
    <!--        <header class="screen-header">-->
    <!--      <div>-->
    <!--        <img src="./header_border_dark.png" alt="">-->
    <!--      </div>-->
    <!--      <span class="title">电商平台实时监控系统</span>-->
    <!--    </header>-->
    <div class="echarts" id="echarts">
      <div class="flex">
        <div class="pie card" id="pie">
        </div>
        <div class="bar card-calc margin-left-20 " id="bar">

        </div>
      </div>
      <div class="flex">
        <div class="dash card margin-top" id="dash">
        </div>
        <div class="mix card-calc margin-top margin-left-20" id="mix">
        </div>
      </div>
      <div class="flex">

      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {pieOption} from '../echarts/pie/index'
import {barOption} from '../echarts/bar/index'
import {dashOption} from '../echarts/dashboard/index'
import {mixOption} from '../echarts/mix/index'

export default {
  name: 'index',
  data() {
    return {
      barOption: barOption,
      pieOption: pieOption,
      dashOption: dashOption,
      // url: 'http://120.77.44.219:8093/lnr-self-care-assess-report.html?self_care_assess_no=20210923135045385&add_or_update=0&empi=945989&audit=0'
    }
  },
  components: {},
  mounted() {
    this.drawEcharts()
    this.drawBar()
    this.drawDash()
    this.drawMix()
    this.get_org_code_data()
    this.get_exam_data()

  },
  methods: {
    get_exam_data(){
      this.$get('/get_exam_echarts',{
        noLoading: true
      }).then(res => {
        if(res.data.status === 200) {
          console.log(89555)
          this.pieOption.series[0].data = res.data.result.pie
          this.drawEcharts()
          this.dashOption.series[0].data = res.data.result.dash
          this.drawDash()
        }
        console.log(res,233)
      })
    },
    get_org_code_data() {
      this.$get('/get_org_code_echarts',{
        noLoading: true
      }).then(res => {
        if(res.data.status === 200) {
          this.barOption.series[0].data = res.data.result.status0||[0, 0, 0, 0, 0, 0]
          this.barOption.series[1].data = res.data.result.status20||[0, 0, 0, 0, 0, 0]
          this.barOption.series[2].data = res.data.result.status60||[0, 0, 0, 0, 0, 0]
          this.drawBar()
        }
        console.log(res)

      })
    },
    drawMix() {
      let chart = echarts.init(document.getElementById('mix'), 'dark')
      // 设置配置项
      chart.setOption(mixOption)
    },
    drawDash() {
      let chart = echarts.init(document.getElementById('dash'), 'dark')
      // 设置配置项
      chart.setOption(this.dashOption)
    },
    drawBar() {
      let chart = echarts.init(document.getElementById('bar'), 'dark')
      // 设置配置项
      chart.setOption(this.barOption)
    },
    drawEcharts() {
      let chart = echarts.init(document.getElementById('pie'), 'dark')
      // 设置配置项
      chart.setOption(this.pieOption)

    }
  }

}
</script>

<style lang="scss" scoped>


.echarts-box {

  background-color: rgb(51, 51, 51);

  .echarts {
    width: 98%;
    height: 1000px;
  }

  .flex {
    display: flex;
    justify-content: flex-start;
  }

  .margin-top {
    margin-top: 20px;
  }

  .margin-left-20 {
    margin-left: 20px;
  }

  .card {
    cursor: pointer;
    width: 450px;
    height: 320px;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 255, .2);
    transition: all .2s;
    //box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  }

  .card-calc {
    cursor: pointer;
    width: 100%;
    height: 320px;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 255, .2);
    transition: all .2s;
    //box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  }

  //.card:hover {
  //  box-shadow: -12px 12px 2px -1px rgba(0, 0, 255, .2);
  //}
}
</style>
