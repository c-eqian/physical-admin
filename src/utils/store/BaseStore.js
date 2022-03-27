// //引入vuex
// import Vuex from  'vuex'
// //引入Vue
// import Vue from "vue";
// Vue.use(Vuex)
/*
暴露一个Vuex实例
 */
const BaseStore = {
  // 命名空间
  /*
  **通过添加 `namespaced: true` 的方式使其成为带命名空间的模块。
  * **当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
   */
  namespaced: true,
  isCollapse: false,
  /*
  State 提供唯一的公共数据源，所有共享的数据都要统一放到
  Store 的 State 中进行存储。
   */
  state: {
    // 菜单列表
    menus: [],
    // 用户
    user: {},
    //  当前路由
    CurrentPath: '',
    netConnect: false, // 网络连接状态
    mqttClient:'',
    mqttData: {},
    isShowUserInfoDialog: false, // 是否显示用户信息弹窗
    userInfoForm: {}
  },
  /*
  Mutation 用于变更 Store中的数据。
  方法中的第一个参数为一个state，在每个方法需要该state，
  第二个参数为组件或调用该方法传过来的值，
  注意：在mutations中的方法，只能接受一个参数，所有当需要多个参数时，通过对象传入即可
  组件中使用 this.$store.commit(‘xxx’) 提交 mutation，
  或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit
  调用（需要在根节点注入 store）。
   */
  mutations: {
    updateIsShowUserInfoDialog (state) {
      state.isShowUserInfoDialog = !state.isShowUserInfoDialog
    },
    updateUserInfoForm (state, payload) {
      state.userInfoForm = payload
    },
    updateMqttClient (state,payload) {
      state.mqttClient = payload
    },
    updateNetConnect (state) {
      state.netConnect = !state.netConnect
    },
    switchCollapse (state) {
      state.isCollapse = !state.isCollapse
    },
    UpdateMqttData (state, payload) {
      // 在组件中不能直接修改属性值，通过此方法更新state中的meus
      state.mqttData = payload
    },
    UpdateMenus (state, payload) {
      // 在组件中不能直接修改属性值，通过此方法更新state中的meus
      state.menus = payload
    },
    //  修改登录当前用户信息
    UpdateUser (state, payload) {
      state.user = payload
    },
    //  更新当前路由
    UpdateCurrentPath (state, CurrentPath) {
      state.CurrentPath = CurrentPath
    }
  },
  /*
  Action 通过 store.dispatch 方法触发：
   */
  actions: {
    /*
    1. 异步修改meus
    2. actions 的第一个参数是 context，
    它向外暴露一组与 store 实例相同的方法/属性，
    所以可以直接调用 context.commit
    或者访问 context.state 或者 context.getters 。
    我们通常使用 es6 的参数解构来简化我们的代码，
    直接写成{ commit }
     */
    SetUpdateMenus ({ commit }, payload) {
      commit('UpdateMenus', payload)
    },
    // 更新用户
    SetUpdateUser ({ commit }, payload) {
      commit('UpdateUser', payload)
    }
  },
  getters: {
    getUser: state => {
      return state.user
    }
  }
}
/*
暴露出去
 */
export default BaseStore
