import Vue from 'vue';
import App from './App';

import router from './router';

//引入公共组件
import './styles/reset.css'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
