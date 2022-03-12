import Vue from 'vue'
import App from './App.vue'
import router from './utils/router/router'
import store from './utils/store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Utils from './common/utils'
import 'element-ui/lib/theme-chalk/reset.css'
import './mock.js'
// eslint-disable-next-line no-unused-vars
import { post, get, all } from './utils/request/request'
// eslint-disable-next-line no-unused-vars
import { SM4DeCrypto, SM4EnCrypto } from './utils/sm4/crypto'
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(ElementUI)
// 接收消息
const getsocketData = e => {  // 创建接收消息函数
  const data = e && e.detail.data
  console.log(data)
}
// 注册监听事件
window.addEventListener('onmessageWS', getsocketData)
// Vue.prototype.$http = axios
Vue.prototype.Utils = Utils
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$SM4DeCrypto = SM4DeCrypto
Vue.prototype.$SM4EnCrypto = SM4EnCrypto
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
