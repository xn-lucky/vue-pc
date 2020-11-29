const path = require('path');

module.exports = {
  // 路径配置
  // 改了配置，要重启才能生效
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        // changeOrigin: true, // 允许跨域
      },
    },
  },
  // 配置路径别名,可以简写路径
  configureWebpack: {
    resolve: {
      alias: {
        "@views": path.resolve(__dirname, 'src/views'),
        "@assets": path.resolve(__dirname, 'src/assets'),
        "@comps": path.resolve(__dirname, 'src/components'),
        "@store": path.resolve(__dirname, 'src/store'),
        "@utils": path.resolve(__dirname, 'src/utils'),
        "@api": path.resolve(__dirname, 'src/api'),
      }
    }
  }
};
