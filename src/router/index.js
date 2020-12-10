import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'

const Home = () => import(/* webpackChunkName: "Home" */'@views/Home')
const Login = () => import(/* webpackChunkName: "Login" */'@views/Login')
const Register = () => import(/* webpackChunkName: "Register" */'@views/Register')
const Search = () => import(/* webpackChunkName: "Search" */'@views/Search')
const Detail = () => import(/* webpackChunkName: "Detail" */'@views/Detail')
const AddCartSuccess = () => import(/* webpackChunkName: "AddCartSuccess" */'@views/AddCartSuccess')
const ShopCart = () => import(/* webpackChunkName: "ShopCart" */'@views/ShopCart')
const Trade = () => import(/* webpackChunkName: "Trade" */'@views/Trade')
const PaySuccess = () => import(/* webpackChunkName: "PaySuccess" */'@views/PaySuccess')
const Pay = () => import(/* webpackChunkName: "Pay" */'@views/Pay')
const Center = () => import(/* webpackChunkName: "Center" */'@views/Center')
const MyOrder = () => import(/* webpackChunkName: "MyOrder" */'@views/Center/MyOrder')
const GroupBuy = () => import(/* webpackChunkName: "GroupBuy" */'@views/Center/GroupBuy')
// import Home from '@views/Home';
// import Login from '@views/Login';
// import Register from '@views/Register';
// import Search from '@views/Search';
// import Detail from '@views/Detail';
// import AddCartSuccess from '@views/AddCartSuccess';
// import ShopCart from '@views/ShopCart';
// import Trade from '@views/Trade';
// import PaySuccess from '@views/PaySuccess';
// import Pay from '@views/Pay';
// import Center from '@views/Center';

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

const router = new VueRouter({
  // 模式
  // mode: 'hash', // 默认模式
  // mode: 'history',
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
    {
      name: 'detail',
      path: '/detail/:id',
      component: Detail,
    },
    {
      name: 'addcartsuccess',
      path: '/addcartsuccess',
      component: AddCartSuccess,
    },
    {
      name: 'shopcart',
      path: '/shopcart',
      component: ShopCart,
    },
    {
      name: 'trade',
      path: '/trade',
      component: Trade,
    },
    {
      name: 'pay',
      path: '/pay',
      component: Pay,
    },
    {
      name: 'center',
      path: '/center',
      component: Center,
      children: [
        {
          path: 'myorder',
          component: MyOrder
        },
        {
          path: 'groupbuy',
          component: GroupBuy
        },
        // 自动跳转的路由
        {
          path: '',
          redirect: '/center/myorder'
        }
      ]
    },
    {
      name: 'paysuccess',
      path: '/paysuccess',
      component: PaySuccess,
    },
  ],
  // 每次切换路由页面滚动条位置
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

});
// 做个权限的路径'/center/myorder' 我的订单页面

const permissionPaths = ['/trade', 'pay', 'center', '/center/myorder']
// 路由守卫
router.beforeEach((to, from, next) => {
  /*
    to:要去哪里
    from: 从哪个链接过来
    next: 执行下一步（不执行就不会跳转）
  */
  // 先判断页面是否满足条件,如果满足在判断是否登录,没有就跳转到登录页面
  if (permissionPaths.indexOf(to.path) > -1 && !store.state.user.token) {
    return next('/login')
  }
  next()
})

export default router
