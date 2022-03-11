import Vue from 'vue'
import Router from 'vue-router'
import Index from '../../views/physical/index/Index.vue'
import Console from '../../views/physical/Console.vue'
import Users from '../../views/physical/Users.vue'
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
      path: '/index',
      component: Index,
      children: [
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
        }
      ]
    },
    {
      path: '*',
      redirect: { path: '/404' }
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
    next({ path: LOGINURL })
  } else {
    next()
  }
})

export default router
