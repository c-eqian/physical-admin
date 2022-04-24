import Vue from 'vue'
import Router from 'vue-router'
import Index from '../../views/physical/index/Index.vue'
import Console from '../../views/physical/Console.vue'
import Users from '../../views/physical/exam-manage/exam-upload/index.vue'
import Articles from '../../views/physical/Articles.vue'
import Echarts from '../../views/physical/Echarts.vue'
import Login from '../../views/physical/login/Login.vue'
import NotFound from '../../views/physical/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/physical-manage/phy-exam-audit',
      component: () => import('@/views/physical/exam-manage/exam-audit/index')
    },
    {
      path: '/apply-list',
      name:'applyList',
      component: () => import('@/views/physical/user-apply/apply-list/index')
    },

    {
      path: '/index',
      component: Index,
      redirect: '/console',
      children: [
        {
          path: '/physical-manage/exam-mock/immunoassay/:id',
          name: "examMockUrine",
          component: () => import('@/views/physical/exam-manage/exam-mock/immunoassay')
        },
        {
          path: '/physical-manage/exam-report-audit/:id',
          name: "examReportAudit",
          component: () => import('@/views/physical/exam-manage/exam-report-audit/index')
        },
        {
          path: '/analyze-manage/analyze-center',
          name: "analyzeManageAnalyze",
          component: () => import('@/views/physical/analyze-manage/analyze-center/index')
        },
        {
          path: '/physical-manage/upload_physical_exam',
          component: () => import('@/views/physical/exam-manage/exam-upload/index')
        },
        {
          path: '/user-manage/user-exam',
          component: () => import('@/views/physical/exam-manage/user-exam/index')
        },
        {
          path: '/user-manage/exam-report/mock',
          name: "examReportMock",
          component: () => import('@/views/physical/exam-manage/exam-mock/index')
        },
        {
          path: '/user-manage/user-exam-result',
          component: () => import('@/views/physical/exam-manage/exam-report/index')
        },
        {
          path: '/userList',
          name: 'user-list',
          component: () => import('@/views/physical/user-manage/user-list')
        },
        {
          path: '/console',
          name: 'console',
          component: Console
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/articles',
          name: 'articles',
          component: Articles
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: Echarts
        },
        {
          path: '/404',
          component: NotFound
        },
        {
          path: '/network-manage/Internet-connection',
          component: () => import('@/views/physical/network-manage/Internet-connection/index')
        }
      ]
    },
    {
      path: '*',
      redirect: {path: '/404'}
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const LOGINURL = '/login'
  let url, user

  url = to.path
  user = sessionStorage.getItem('user')

  if (url === LOGINURL) {
    sessionStorage.removeItem('user')
  }

  // 判断是否登录
  if (!user && url !== LOGINURL) {
    next({path: LOGINURL})
  } else {
    next()
  }
})

export default router
