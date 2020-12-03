/*
  注册页面
*/
import { reqGetRegister } from '@api/register';

export default {
  state: {
    codeImg: ''
  },
  getters: {},
  actions: {
    async getRegister(store, data) {
      await reqGetRegister(data);
    }
  },
  mutations: {
  }
}
