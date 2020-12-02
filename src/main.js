import Vue from 'vue';
import App from './App';

import router from './router';
import store from './store';

// 引入公共组件
import './styles/reset.css';
import './styles/iconfont.css'

import './plugins/element.js';

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
