import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@views/Home';
import Login from '@views/Login';
import Register from '@views/Register';
import Search from '@views/Search';

// 重写VueRouter原型上的push/replace方法
const { push, replace } = VueRouter.prototype;// 将push赋予另外值,为以后调用
// push会接收三个参数，第一个参数是地址，第二个参数是编程式导航成功后触发的回调，第三个参数是编程式导航失败后触发的回调
VueRouter.prototype.push = function (localtion, onComplete, onAbort) {
  // 如果自己传了成功和失败回调则触发对应的
  if (onComplete && onAbort) {
    // 执行原来的push方法(就是重写前的push方法，将this指向VueRouter的实例)
    return push.call(this, localtion, onComplete, onAbort);
  }

  // 否则不处理错误
  // 执行原来的push方法(就是重写前的push方法，将this指向VueRouter的实例,错误回调用一个空函数)
  return push.call(this, localtion, onComplete, () => { });
};
VueRouter.prototype.replace = function (localtion, onComplete, onAbort) {
  // 如果自己传了成功和失败回调则触发对应的
  if (onComplete && onAbort) {
    return replace.call(this, localtion, onComplete, onAbort);
  }

  // 否则不处理错误
  return replace.call(this, localtion, onComplete, () => { });
};

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isFooterHide: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isFooterHide: true
      }
    },
    {
      name: 'search',
      path: '/search/:searchText?',
      component: Search,
    },
  ],
});
