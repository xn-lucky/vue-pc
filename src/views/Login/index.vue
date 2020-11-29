<template>
  <div class="login-warp">
    <div class="login">
      <div class="login-container">
        <ul class="login-tabs">
          <li><a>扫码登录</a></li>
          <li><a class="login-tabs-active">账号登录</a></li>
        </ul>
        <div class="login-tabs-content">
          <form class="login-tabs-content-form">
            <div class="login-tabs-content-info">
              <i></i>
              <input type="text" placeholder="手机号" v-model="phone" />
            </div>
            <div class="login-tabs-content-info">
              <i class="pwdIcon"></i>
              <input type="text" placeholder="请输入密码" v-model="password" />
            </div>
            <div class="login-tabs-content-other">
              <label><input type="checkbox" checked />自动登录</label>
              <a>忘记密码？</a>
            </div>
            <button class="login-tabs-content-btn" type="button" @click="login">
              登 录
            </button>
          </form>
          <div class="login-tabs-content-register">
            <router-link to="/register">立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { reqLogin } from "../../api/user";

export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    login() {
      const { phone, password } = this;
      if (phone.trim() && password.trim()) {
        // 发送请求
        reqLogin(phone, password)
          .then((res) => {
            console.log("res", res);
            this.$router.push("/");
          })
          .catch((err) => {
            console.log("err", err);
            Message.error({
              duration: 700,
              message: err,
            });
          });
      } else {
        // Message.error("请输入正确的用户名或密码~");
        Message.error({
          duration: 700,
          message: "请输入正确的用户名或密码~",
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-warp {
  height: 487px;
  background-color: #e93854;
}
.login {
  width: 1200px;
  margin: 0 auto;
  height: 487px;
  // line-height: 487px;
  background: url("./images/loginbg.png") no-repeat;
  position: relative;
}
.login-container {
  width: 380px;
  height: 366px;
  padding: 20px;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 45px;
}
.login-tabs {
  display: flex;
}
.login-tabs li a {
  width: 190px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #ddd;
  display: block;
  font-weight: 700;
  font-size: 20px;
  color: #333;
  box-sizing: border-box;
}
.login-tabs .login-tabs-active {
  color: #e93854;
  border-bottom: none;
}

.login-tabs-content {
  width: 342px;
  height: 279px;
  padding: 18px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.login-tabs-content-form {
  width: 100%;
  height: 186px;
  margin-top: 15px;
  margin-bottom: 18px;
}
.login-tabs-content-info {
  display: flex;
  margin-bottom: 22px;
}
.login-tabs-content-info i {
  width: 37px;
  height: 32px;
  line-height: 32px;
  display: block;
  text-align: center;
  border: 1px solid #ddd;
  box-sizing: border-box;
  background: url("../../assets/images/icons.png") no-repeat -10px -201px;
}
.login-tabs-content-info .pwdIcon {
  background-position: -72px -201px;
}
.login-tabs-content-info input {
  width: 285px;
  height: 18px;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-left: none;
  font-size: 14px;
  outline: none;
}

.login-tabs-content-other {
  display: flex;
  justify-content: space-between;
}
.login-tabs-content-btn {
  width: 100%;
  padding: 6px;
  margin-top: 25px;
  line-height: 22px;
  border: 1px solid #e1251b;
  background-color: #e1251b;
  color: #fff;
  display: block;
  font-size: 16px;
  outline: none;
}
.login-tabs-content-register {
  font-size: 15px;
  line-height: 38px;
  display: flex;
  justify-content: flex-end;
}
.login-tabs-content-register a {
  cursor: pointer;
  &:hover {
    color: rgb(79, 76, 212);
    text-decoration: underline;
  }
}
</style>
