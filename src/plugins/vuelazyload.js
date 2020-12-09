import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import load from '@assets/images/timg.gif'

// 使用vue-lozyload
// Vue.use(VueLazyload) //可以直接使用，也可以后面添加一个配置对象
Vue.use(VueLazyload, {
  // 图片不能直接这么写路径,使用框架vue不能解析js文件的图片路径,

  // loading: '@assets/images/timg.gif'
  // http://localhost:8081/@assets/images/timg.gif
  // loading: '../assets/images/timg.gif'
  // http://localhost:8081/assets/images/timg.gif

  // 只能先将图片引入，然后在给loading
  loading: load// 图片未加载出来时显示的图片
})
