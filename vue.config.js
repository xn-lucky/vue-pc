module.exports = {
  //路径配置
  // 改了配置，要重启才能生效
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        // changeOrigin: true, // 允许跨域
      },
    },
  },
  
}
