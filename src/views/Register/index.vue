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
          name="phone"
          placeholder="请输入你的手机号"
        />
        <span class="err-msg">错误信息1</span>
      </div>
      <div class="content-layout">
        <label>验证码: </label>
        <input
          class="content-input"
          type="text"
          name="phone"
          placeholder="请输入验证码"
        />
        <img src="" alt="" />
        <span class="err-msg">错误信息2</span>
      </div>
      <div class="content-layout">
        <label>登录密码: </label>
        <input
          class="content-input"
          type="text"
          name="phone"
          placeholder="请输入你的登录密码"
        />
        <span class="err-msg">错误信息3</span>
      </div>
      <div class="content-layout">
        <label>确认密码: </label>
        <input
          class="content-input"
          type="text"
          name="phone"
          placeholder="请输入确认密码"
        />
        <span class="err-msg">错误信息4</span>
      </div>
      <div class="content-agreement">
        <input type="checkbox" />同意协议并注册《尚品汇用户协议》
      </div>
      <div class="content-button">
        <span class="err-msg">错误信息1</span>
        <button>完成注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  align-content: center;
}
.content-layout label {
  width: 96px;
  font-size: 14px;
  text-align: right;
  display: inline-block;
}
.content-input {
  width: 260px;
  height: 38px;
  line-height: 36px;
  padding-left: 8px;
  margin-left: 5px;
  border: 1px solid #999;
  box-sizing: border-box;
  outline: none;
}
.content-agreement,
.content-button {
  margin: 0 auto;
}
.first {
  margin-top: 40px;
}
.err-msg {
  display: none;
}
</style>
