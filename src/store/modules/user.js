/*
  注册页面
*/
import { reqGetRegister, reqLogin } from '@api/user';

export default {
  state: {
    codeImg: '',
    name: localStorage.getItem('name') || '',
    // token首先是要在localStorage中获取,有的话就为获取的值，没有就为空
    token: localStorage.getItem('token') || ''
  },
  getters: {},
  actions: {
    async getRegister(store, data) {
      await reqGetRegister(data);
    },
    async login({ commit }, { phone, password }) {
      console.log(phone, password)
      const user = await reqLogin(phone, password)
      // 登录成功后要获取返回来的值，将name和token保存
      commit('LOGIN', user)
    }
  },
  mutations: {
    LOGIN(state, user) {
      state.name = user.name;
      state.token = user.token;
    }
  }
}
