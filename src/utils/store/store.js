import Vue from 'vue'
import Vuex from 'vuex'
import BaseStore from './BaseStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // 基础的store模块
    BaseStore: BaseStore
  }
})
