// module.exports = {
//   baseUrl: '/'
// }
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/socket.io': {
        target: 'http://127.0.0.1:5000',
        ws: true,
        changeOrigin: true
      },
      'sockjs-node': {
        target: 'http://127.0.0.1:5000',
        ws: false,
        changeOrigin: true
      },
    }

  }
}
