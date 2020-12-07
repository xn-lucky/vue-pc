import { reqGetCartList, reqAddShopCart } from '@api/shopcart'

export default {
  state: {
    cartList: []
  },
  getters: {},
  actions: {
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      commit('GET_CART_LIST', cartList)
    },
    async addShopCart({ commit }, { skuId, skuNum }) {
      await reqAddShopCart(skuId, skuNum);
      console.log(commit)
    }
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList
    }
  }
}
