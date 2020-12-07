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
            <ValidationProvider
              rules="phoneLength|phoneRep"
              v-slot="{ errors }"
            >
              <div class="login-tabs-content-info">
                <i></i>
                <input type="text" placeholder="手机号" v-model="phone" />
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="login-tabs-content-info">
              <i class="pwdIcon"></i>
              <input type="text" placeholder="请输入密码" v-model="password" />
            </div>
            <div class="login-tabs-content-other">
              <label><input type="checkbox" v-model="isCheck" />自动登录</label>
              <a>忘记密码？</a>
            </div>
            <button
              class="login-tabs-content-btn"
              type="button"
              @click="rlogin"
            >
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
// 页面中只用到一个login 可以直接通过dispatch触发
import { mapActions, mapState } from "vuex";
import { Message } from "element-ui";
import { ValidationProvider, extend } from "vee-validate";

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

export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
      isCheck: true,
    };
  },
  components: {
    ValidationProvider,
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name: (state) => state.user.name,
    }),
  },
  methods: {
    ...mapActions(["login"]),
    async rlogin() {
      const { phone, password } = this;
      if (phone.trim() && password.trim()) {
        // 发送请求
        await this.login({ phone, password });
        // await this.$store.dispatch("login", { phone, password });
        // 登陆成功后判断页面上的自动登录是否有勾选，有勾选就将token保存在localStorage中
        if (this.isCheck) {
          localStorage.setItem("token", this.token);
          localStorage.setItem("name", this.name);
        }
        // 登录成功后跳转主页
        this.$router.replace("/");
      } else {
        // Message.error("请输入正确的用户名或密码~");
        Message.error({
          duration: 700,
          message: "请输入正确的用户名或密码~",
        });
      }
    },
  },
  created() {
    // 在这边判断是否有token,有就跳转到home,没有就跳过
    // 因为这时候数据代理已经完成，可以获取到数据,页面还没有渲染，判断后跳转会节省时间
    if (this.token) {
      this.$router.replace("/");
    }
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
  flex-wrap: wrap;
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
.login-tabs-content-info span {
  margin-top: 8px;
  color: #e1251b;
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
