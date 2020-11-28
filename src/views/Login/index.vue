<template>
  <div>
    Login.....
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { reqLogin } from "../../api/user";

export default {
  name: "Login",
  methods: {
    login() {
      // 发送请求
      reqLogin("13700000000", "111111")
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
