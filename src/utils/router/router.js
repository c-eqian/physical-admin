import Vue from "vue";
import Router from "vue-router";
import Index from "../../views/physical/index/Index.vue";
import Console from "../../views/physical/Console.vue";
import Users from "../../views/physical/exam-manage/exam-upload/index.vue";
import Articles from "../../views/physical/Articles.vue";
// import Echarts from '../../views/physical/Echarts.vue'
import Login from "../../views/physical/login/Login.vue";
import NotFound from "../../views/physical/NotFound.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name:'Login',
      component: Login,
    },
    {
      path: "/physical-manage/phy-exam-audit",
      component: () => import("@/views/physical/exam-manage/exam-audit/index"),
    },
    // {
    //   path: '/apply-list',
    //   name: 'applyList',
    //   component: () => import('@/views/physical/user-apply/apply-list/index')
    // },

    {
      path: "/index",
      component: Index,
      redirect: "/console",
      children: [
        {
          path: "/apply-list",
          name: "applyList",
          component: () =>
            import("@/views/physical/user-apply/apply-list/index"),
        },
        {
          path: "/self_info",
          name:'selfInfo',
          component : () => import("@/views/physical/personal/index")

        },
        {
          path: "/sys-user-manage/user-auth-list",
          name: "userManageUserAuth",
          component: () =>
            import("@/views/physical/sys-user-manage/user-auth/index"),
        },
        {
          path: "/physical-manage/exam-mock/immunoassay/:id",
          name: "examMockUrine",
          component: () =>
            import("@/views/physical/exam-manage/exam-mock/immunoassay"),
        },
        {
          path: "/physical-manage/exam-report-audit/:id",
          name: "examReportAudit",
          component: () =>
            import("@/views/physical/exam-manage/exam-report-audit/index"),
        },
        {
          path: "/analyze-manage/analyze-center",
          name: "analyzeManageAnalyze",
          component: () =>
            import("@/views/physical/analyze-manage/analyze-center/index"),
        },
        {
          path: "/physical-manage/upload_physical_exam",
          name:'uploadPhysicalExam',
          component: () =>
            import("@/views/physical/exam-manage/exam-upload/index"),
        },
        {
          path: "/user-manage/user-exam",
          component: () =>
            import("@/views/physical/exam-manage/user-exam/index"),
        },
        {
          path: "/user-manage/exam-report/mock",
          name: "examReportMock",
          component: () =>
            import("@/views/physical/exam-manage/exam-mock/index"),
        },
        {
          path: "/user-manage/user-exam-result",
          component: () =>
            import("@/views/physical/exam-manage/exam-report/index"),
        },
        {
          path: "/userList",
          name: "user-list",
          component: () => import("@/views/physical/user-manage/user-list"),
        },
        {
          path: "/console",
          name: "console",
          component: Console,
        },
        {
          path: "/users",
          name: "users",
          component: Users,
        },
        {
          path: "/articles",
          name: "articles",
          component: Articles,
        },
        // {
        //   path: '/echarts',
        //   name: 'echarts',
        //   component: () => import('@/views/physical/analyze-manage/analyze-center/index1')
        // },
        {
          path: "/404",
          component: NotFound,
        },
        {
          path: "/network-manage/Internet-connection",
          component: () =>
            import("@/views/physical/network-manage/Internet-connection/index"),
        },
        {
          path: "/physical-manage/aged-test",
          name: "Assessment-of-elderly",
          component: () =>
            import(
              "@/views/physical/exam-manage/Assessment-of-elderly/Assessment-of-elderly"
            ),
        },
        {
          path: "/physical-manage/aged-test/lnr_depression_assess_report/:id/:rid",
          name: "lnr_depression_assess_report",
          component: () =>
            import(
              "@/views/physical/exam-manage/Assessment-of-elderly/lnr_assess_report/lnr_depression_assess_report"
            ),
        },
        {
          path: "/physical-manage/aged-test/lnr-self-care-assess-report/:id/:rid",
          name: "lnr_self_care_assess_report",
          component: () =>
            import(
              "@/views/physical/exam-manage/Assessment-of-elderly/lnr_assess_report/lnr-self-care-assess-report"
            ),
        },
        {
          path: "/physical-manage/aged-test/lnr-mental-state-exam-report/:id/:rid",
          name: "lnr-mental-state-exam-report",
          component: () =>
            import(
              "@/views/physical/exam-manage/Assessment-of-elderly/lnr_assess_report/lnr-mental-state-exam-report"
            ),
        },
        {
          path: "/physical-manage/aged-test/follow-zyyjk-report/:id/:rid",
          name: "follow-zyyjk-report",
          component: () =>
            import(
              "@/views/physical/exam-manage/Assessment-of-elderly/lnr_assess_report/follow-zyyjk-report"
            ),
        },
      ],
    },
    {
      path: "*",
      redirect: { path: "/404" },
    },
  ],
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const LOGINURL = "/login";
  let url, user;

  url = to.path;
  user = sessionStorage.getItem("user");

  if (url === LOGINURL) {
    sessionStorage.removeItem("user");
  }

  // 判断是否登录
  if (!user && url !== LOGINURL) {
    next({ path: LOGINURL });
  } else {
    next();
  }
});

export default router;
