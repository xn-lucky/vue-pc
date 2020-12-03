<template>
  <div class="register">
    <div class="register-top">
      <h3>注册新用户</h3>
      <span>我有账号,去<router-link to="/login">登录</router-link></span>
    </div>
    <div class="register-content">
      <div class="content-layout first">
        <label>手机号: </label>
        <input
          class="content-input"
          type="text"
          placeholder="请输入你的手机号"
          name="phone"
          v-model="phone"
        />
        <span class="err-msg" v-show="isShow && phone === ''">{{
          phoneCheck ? "手机号是必须的" : "手机号格式不对"
        }}</span>
      </div>
      <div class="content-layout">
        <label>验证码: </label>
        <input
          class="content-input"
          type="text"
          name="code"
          placeholder="请输入验证码"
          v-model="code"
        />
        <img
          ref="code"
          src="/api/user/passport/code"
          alt=""
          @click="$refs.code.src = '/api/user/passport/code'"
        />
        <span class="err-msg" v-show="isShow && code === ''"
          >验证码时必须的</span
        >
      </div>
      <div class="content-layout">
        <label>登录密码: </label>
        <input
          class="content-input"
          type="text"
          name="password"
          placeholder="请输入你的登录密码"
          v-model="password"
        />
        <span class="err-msg" v-show="isShow && password === ''"
          >登录密码是必须的</span
        >
      </div>
      <div class="content-layout">
        <label>确认密码: </label>
        <input
          class="content-input"
          type="text"
          name="checkpassword"
          placeholder="请输入确认密码"
          v-model="checkpassword"
        />
        <span class="err-msg" v-show="isShow && checkpassword === ''">{{
          passwordCheck ? "确认密码是必须的" : "确认密码要与登录密码一致"
        }}</span>
      </div>
      <div class="content-agreement">
        <input
          type="checkbox"
          v-model="check"
        />同意协议并注册《尚品汇用户协议》
        <span class="err-agreement" v-show="isShow && check === ''"
          >协议是必勾的</span
        >
      </div>
      <div class="content-button">
        <!-- <span class="err-msg"></span> -->
        <button class="registerBtn" type="button" @click="register">
          完成注册
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      phone: "", // 手机号
      code: "", // 验证码
      password: "", // 登录密码
      checkpassword: "", // 确认密码
      check: "", // 是否勾选协议
      isShow: false, // 是否显示错误信息

      phoneCheck: true,
      passwordCheck: true,
    };
  },
  watch: {
    phone(newValue) {
      debugger;
      // 校验手机号格式是否正确
      if (newValue && /^[1][0-9]{10}/.test(newValue)) {
        this.phoneCheck = false;
        return;
      }
      this.phoneCheck = true;
    },
    checkpassword(newValue) {
      // 判断登录密码和确认密码是否一致
      if (newValue && this.password !== newValue) {
        this.passwordCheck = false;
        return;
      }
      this.passwordCheck = true;
    },
  },
  methods: {
    ...mapActions(["getRegister"]),
    // 点击注册按钮
    register() {
      debugger;
      // 首先判断是否都有输入值
      const { phone, code, password, checkpassword, check } = this;
      this.isShow = true;
      // 有一个成立都会进来(没有输入信息)
      if (!phone || !code || !password || !checkpassword || !check) {
        return;
      }
      // 注册成功就显示 提示注册成功3秒后跳转登录页面,也可手动跳转
      // 发送注册请求
      this.getRegister()
        .then(() => {})
        .catch(() => {});
      // 回归初始化
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
}
.register-top {
  height: 30px;
  line-height: 30px;
  padding: 6px 15px;
  background-color: #ececec;
  border-bottom: #dfdfdf;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
}
.register-top h3 {
  font-size: 20px;
}
.register-top a {
  color: #e1251b;
  cursor: pointer;
  &:hover {
    color: rgb(79, 76, 212);
  }
}
.content-layout {
  width: 810px;
  // height: 38px;
  padding-left: 390px;
  margin: 0 0 18px 0;
  // display: flex;
  // align-content: center;
  position: relative;
}
.content-layout label {
  width: 96px;
  font-size: 14px;
  text-align: right;
  display: inline-block;
}
.content-layout img {
  width: 60px;
  height: 25px;
  padding-top: 2px;
}
.content-input {
  width: 260px;
  height: 38px;
  line-height: 36px;
  padding-left: 8px;
  margin-left: 5px;
  border: 1px solid #999;
  // box-sizing: border-box;
  outline: none;
}
.content-agreement {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  position: relative;
}
.content-button {
  width: 1145px;
  height: 38px;
  margin: 17px 0 0 55px;
  text-align: center;
}
.registerBtn {
  width: 266px;
  height: 32px;
  border: 2px solid #e1251b;
  background: #e1251b;
  color: #fff;
  font-size: 16px;
  outline: none;
  // margin-left: 50px;
}
.first {
  margin-top: 40px;
}

.err-msg,
.err-agreement {
  position: absolute;
  left: 493px;
  color: #e1251b;
}
.err-msg {
  top: 40px;
}
.err-agreement {
  top: 15px;
}
</style>
