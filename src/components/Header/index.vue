<template>
  <header class="header">
    <div class="header-top">
      <div class="header-container">
        <div class="header-container-left">
          <p>尚品汇欢迎您!</p>
          <p>
            <span>请</span><router-link to="/login">登录</router-link>
            <router-link to="/register" class="header-container-left-register"
              >免费注册</router-link
            >
          </p>
        </div>
        <div class="header-container-right">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
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
      };

      // 这时候要判断params是否有值，有的话才要添加上，没有就不需要
      if (searchText) {
        localtion.params = {
          searchText,
        };
      }

      this.$router.push(localtion);
    },
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
