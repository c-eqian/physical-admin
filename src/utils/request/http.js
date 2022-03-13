/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2021-09-05 17:06:22
 * @LastEditors: 十三
 * @LastEditTime: 2022-03-09 21:09:26
 */
// 导入axios
import axios from 'axios'
// 引入element-ui的加载组件
// eslint-disable-next-line no-unused-vars
import { Loading, Message } from 'element-ui'
import qs from 'qs'
// 创建一个axios实例
const http = axios.create({
//  基本URL，当配置该项后，在后面发起请求时，加请求的路径即可
//   baseURL:'http://120.77.44.219:13208',//后台接口url
  //baseURL: 'https://django-82zo-1586671-1308572844.ap-shanghai.run.tcloudbase.com/api/v3', // 后台接口url
  baseURL: 'http://127.0.0.1:13209/api/v3',
  //  设置超时时间
  timeout: 10 * 1000
  // withCredentials: false,
})
// 是否设置cookie跨域时允许携带凭证
/*
注意：这里如果为true,无法向后台请求数据
 */
http.defaults.withCredentials = true
// 设置post请求头：告知服务器请求主体的数据格式
// 'Content-Type':'application/json'
http.defaults.headers['Content-type'] = 'application/x-www-form-urlencoded'
let loadings
// 配置请求拦截器
// 客户发送请求->[请求拦截器]->服务器
// token校验(jwt):接受服务器返回的token,存储到vuex/本地存储中,每一次向服务器发送请求,我们应该把token带上,
http.interceptors.request.use(config => {
// 携带token
//  这里的键token，为自定义的
  let token = sessionStorage.getItem('token')
  if (token) {
    config.headers['token'] = token
  }
  token && (config.headers.Authorization = token)
  //  如果时post请求，进行qs转化
  if (config.method === 'post' || config.method === 'POST') {
    // 这里的data包含在config里面
    config.data = qs.stringify(config.data)
    // config.data = qs.parse(qs.stringify(config.data))
  };
  //  加载动画
  let options = {
    lock: true,
    text: '正在拼命加载中',
    spinner: 'el-icon-loading',
    fullscreen: true,
    background: 'rgba(0, 0, 0, 0.7)'
  }
  loadings = Loading.service(options)
  //  必须要返回config
  return config
//  发送错误处理
}, error => {
  return Promise.reject(error)
}
)
// 响应拦截器
http.interceptors.response.use(response => {
//  服务器响应，关闭加载动画
  loadings.close()
  // 返回响应结果
  return response
//  响应错误处理
}, error => {
  loadings.close()
  return Promise.reject(error)
}
)
export default http
