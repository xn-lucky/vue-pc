1: 希望登录和注册不显示footer
  方式1:
    $route.path!=='/login'&&  $route.path!=='/register'  //复用不好，若再有个组件也不显示footer,就需要在后面一直加
  方式2:
    使用meta:{}需要在路由文件不显示footer的组件路由中配置,其他组件都没有
    meta会在组件加载后将属性添加到$route的meta中
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
    组件上使用 v-if = '!$route.meta.isFooterHide'

2: vue-router $router.push()中传参方式
    $router.push('/search')  
    $router.push('/search/234?')// params路由参数
    //push中也可以是一个对象,若想传params参数，要用到命名路由，
    $router.push('{
        name:'search',
        params:{
            searchText:searchText
        }
    }')

    如果判断是否要传，需要判断一下

    $router.push('/search/234?key=value')// query
     //push中也可以是一个对象
    $router.push('{
        path:'/search',可以直接写path路由路径
        params:{
            searchText:searchText
        }
    }')

3:编程式重复跳转同一个路径会出现问题(会报错 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/search".    
)

解决方式: 我们可以重写$router.push方法,$router是使用了路由后，将VueRouter的实例router代理到了组件实例上this为$router，所以重写若在组件实例上改的话需要每个用到的组件实例都需要修改，所以考虑到复用我们在VueRouter的原型上进行重写
