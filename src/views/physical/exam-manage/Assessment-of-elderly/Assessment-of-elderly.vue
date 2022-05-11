<template>
  <el-row class="nav">
    <el-button type="primary" @click="to_lnr_depression_assess_report">抑郁评估</el-button>
    <el-button type="primary" @click="to_follow_zyyjk_report">中医药体质</el-button>
    <el-button type="primary" @click="to_lnr_self_care_assess_report">自理评估</el-button>
    <el-button type="primary" @click="to_lnr_mental_state_exam_report">智力评估</el-button>
    <router-view></router-view>
</el-row>

</template>

<script>
export default {
    methods:{
        to_lnr_depression_assess_report(){
            this.$router.push({ path: '/physical-manage/aged-test/lnr_depression_assess_report' })
        },
        to_lnr_self_care_assess_report(){
            this.$router.push({ path: '/physical-manage/aged-test/lnr-self-care-assess-report' })
        },
        to_lnr_mental_state_exam_report(){
            this.$router.push({ path: '/physical-manage/aged-test/lnr-mental-state-exam-report' })
        },
         to_follow_zyyjk_report(){
            this.$router.push({ path: '/physical-manage/aged-test/follow-zyyjk-report' })
        }
    }
}
</script>

<style>
.nav{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>