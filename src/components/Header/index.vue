<template>
  <header class="header">
    <div class="header-top">
      <div class="header-container">
        <div class="header-container-left">
          <p>尚品汇欢迎您!</p>
          <p v-if="userName">
            {{ userName }} 用户
            <button @click="cancelLogin">退出</button>
          </p>
          <p v-else>
            <span>请</span><router-link to="/login">登录</router-link>
            <router-link to="/register" class="header-container-left-register"
              >免费注册</router-link
            >
          </p>
        </div>
        <div class="header-container-right">
          <router-link to="/center">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-left">
        <router-link to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </div>

      <div class="header-bottom-right">
        <form action="##">
          <input type="text" v-model="searchText" /><button
            @click.prevent="search"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "", // 搜索框内容
    };
  },
  computed: {
    userName() {
      return this.$store.state.user.name;
    },
  },
  methods: {
    /**
      搜索功能
     */
    search() {
      // 传参方式1
      const { searchText } = this;
      /*
      const params = searchText ? `/${searchText}` : "";
      const localtion = `/search${params}`;
      this.$router.push(localtion); */

      // 传参方式2 this.$router.push({})push中也可以是一个对象
      const localtion = {
        name: "search",
        // 第一种写法，如果有值就解构没值就为空
        query: {
          ...this.$route.query,
        },
      };

      // 这时候要判断params是否有值，有的话才要添加上，没有就不需要
      if (searchText) {
        localtion.params = {
          searchText,
        };
      }
      // 第二种写法，进行判断query是否有值
      // const { categoryName } = this.$route.query;
      // if (categoryName) {
      //   localtion.query = this.$route.query;
      // }
      // 希望是回退时都是回退到home页,在第一次点击搜索按钮时要进行判断,当前页面的地址是不是search/home,如果是home页就用push否则使用replace
      // if (this.$route.path.indexOf("/search") > -1) {
      // if (/^\/search/.test(this.$route.path)) {
      if (/^\/search/.test(this.$route.path)) {
        this.$router.replace(localtion);
      } else {
        this.$router.push(localtion);
      }
      /*
        判断路径是否存在/search有很多种方式
         1- this.$route.path.indexOf("/search") > -1 是否包含/search
         2- /^\/search/.test(this.$route.path) 正则 是否包含/search
         3- this.$route.path.includes("/search") 是否包含/search
         4- this.$route.path.startsWith("/search") 是否以/search开头

         1和2的兼容性较好

       */
    },
    // 退出登录
    async cancelLogin() {
      // 发送请求退出
      await this.$store.dispatch("logout");
      // 2-跳转到登录页面
      this.$router.push("/");
    },
  },
  mounted() {
    // 绑定事件，用于回调对搜索框的数据进行清空
    this.$bus.$on("clearSearchText", () => {
      this.searchText = "";
    });
    // 获取判断是否存在用户名(即是否登录),也可以从vuex获取(因为vuex的数据是从localStorage中获取的,所以即使刷新页面也一直存在)
    // this.name = localStorage.getItem("name");
  },
};
</script>

<style lang="less" scoped>
.header-top {
  background-color: #eaeaea;
}
.header-container,
.header-bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-container {
  width: 1200px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
}
.header-container-left {
  display: flex;
}
.header-container-left p:nth-child(1) {
  width: 84px;
  margin-right: 10px;
}
.header-container-left-register {
  padding: 0 5px;
  margin-left: 5px;
  border-left: 1px solid #b3aeae;
}
.header-container-left button {
  color: rgb(79, 76, 212);
  border: none;
}
.header-container-right a {
  padding: 0 5px;
  border-right: 1px solid #ccc;
  &:hover {
    color: rgb(79, 76, 212);
  }
}
.header-container-right a:last-child {
  border: none;
}

.header-bottom {
  height: 110px;
  // line-height: 110px;
}
.header-bottom-left {
  width: 265px;
  display: flex;
  justify-content: center;
}
.header-bottom-left a {
  align-self: center;
}
.header-bottom-right input {
  width: 478px;
  height: 28px;
  padding: 0 4px;
  border: 2px solid #ea4a36;
  outline: none;
}
.header-bottom-right {
  line-height: 110px;
}
.header-bottom-right button {
  width: 68px;
  height: 32px;
  background-color: #ea4a36;
  outline: none;
  border: none;
  color: #fff;
}
</style>
