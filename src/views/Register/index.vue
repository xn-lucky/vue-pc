<template>
  <div class="register">
    <div class="register-top">
      <h3>注册新用户</h3>
      <span>我有账号,去<router-link to="/login">登录</router-link></span>
    </div>
    <div class="register-content">
      <div class="content-layout first">
        <label>手机号: </label>
        <ValidationProvider
          rules="required|phoneLength|phoneRep"
          v-slot="{ errors }"
        >
          <input
            class="content-input"
            type="text"
            placeholder="请输入你的手机号"
            name="phone"
            v-model="phone"
          />
          <span class="err-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="content-layout">
        <label>验证码: </label>
        <ValidationProvider rules="codeCheck" v-slot="{ errors }">
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
          <span class="err-msg">{{ errors[0] }}</span>
        </ValidationProvider>
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
        <!-- <span class="err-msg">登录密码是必须的</span> -->
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
        <!-- <span class="err-msg">确认密码是必须的</span> -->
      </div>
      <div class="content-agreement">
        <input
          type="checkbox"
          v-model="checkAgree"
        />同意协议并注册《尚品汇用户协议》
        <!-- <span class="err-agreement">协议是必勾的</span> -->
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
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "手机号是必填的~",
});
extend("phoneLength", {
  validate(value) {
    return value.length === 11;
  },
  message: "手机号长度应为11位",
});
extend("phoneRep", {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号格式不对",
});
extend("codeCheck", {
  validate(value) {
    return /^\d{4}$/.test(value);
  },
  message: "验证码应为四位数字~",
});

export default {
  name: "Register",
  data() {
    return {
      phone: "", // 手机号
      code: "", // 验证码
      password: "", // 登录密码
      checkpassword: "", // 确认密码
      checkAgree: false, // 是否勾选协议
    };
  },
  components: {
    ValidationProvider,
  },
  methods: {
    ...mapActions(["getRegister"]),
    // 点击注册按钮
    async register() {
      // 首先判断是否都有输入值
      const { phone, code, password, checkpassword, checkAgree } = this;
      // 有一个成立都会进来(没有输入信息)
      // if (!phone || !code || !password || !checkpassword || !checkAgree) {
      //   this.$message({
      //     message: `请输入完整注册信息~~`,
      //     type: "error",
      //     duration: 800,
      //   });
      //   return;
      // }
      // 判断登录密码与确认密码是否一致
      if (!password || password !== checkpassword) {
        this.$message({
          message: "登录密码与确认密码不一致~~",
          type: "error",
          duration: 800,
        });
        return;
      }
      if (!checkAgree) {
        this.$message({
          message: `请先勾选协议~~`,
          type: "error",
          duration: 800,
        });
        return;
      }

      // 注册成功就显示 提示注册成功3秒后跳转登录页面,也可手动跳转
      // 发送注册请求
      await this.getRegister({ phone, code, password });
      // 成功后跳转到登陆页面
      this.$router.replace("/login");
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
