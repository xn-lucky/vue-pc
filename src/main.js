import Vue from 'vue';
import App from './App';

import router from './router';
import store from './store';

// 引入公共组件
import './styles/reset.css';
import './styles/iconfont.css'

// 插件在Vue中应用后,要在main.js中引用,使启动项目的时候可以加载对应插件(执行对应的文件)
import './plugins/element.js';
import './plugins/vuelazyload.js'

// 需要引入mockServer，为了加载里面的代码
// 里面的代码一旦加载,就会去启动mock服务器,从而拦截相应的请求
import './mock/mockServer';

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: (h) => h(App),
  router,
  store
}).$mount('#app');
