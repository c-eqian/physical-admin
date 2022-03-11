/*
封装常用的post、get请求
 */

// 引入封装好的axios
import http from './http'

/*
url:请求地址
params：请求参数
Promise 对象：
可以将异步操作以同步操作的流程表达出来，
避免了层层嵌套的回调函数。
此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。
Promise 构造函数包含一个参数和一个带有 resolve（解析）和 reject（拒绝）两个参数的回调。
在回调中执行一些操作（例如异步），如果一切都正常，则调用 resolve，否则调用 reject。
 */

// 封装get请求
export function get (url, params) {
  return new Promise((resolve, reject) => {
    http.get(url, {
      // 如果是get请求，参数需要加params
      params: params
    }).then(response => { // 响应成功
      resolve(response)
    })
      .catch(error => {
        reject(error)
      })
  })
}

// 封装post请求
export function post (url, params) {
  return new Promise((resolve, reject) => {
    http.post(url, params).then(response => {
      resolve(response)
    })
      .catch(error => {
        reject(error)
      })
  })
}

// 封装all请求
export function all (option) {

}
