/* eslint-disable */
import { reqGetCartList, reqAddShopCart, reqCartChecked, reqDelShop } from '@api/shopcart';

export default {
  state: {
    cartList: []
  },
  getters: {},
  actions: {
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      commit('GET_CART_LIST', cartList);
    },
    async addShopCart({ commit }, { skuId, skuNum }) {
      await reqAddShopCart(skuId, skuNum);

      // 对点击购物车数量的加减按钮,发送请求数据后，要想页面更新有两种方法，
      // 1- 等加减按钮发送请求成功后再发次请求刷新页面(缺点就是会多发一个请求)
      // 2- 或者是直接更新vuex的数据,从更更新页面(vuex是响应式数据,会比1少发一个请求)
      // console.log(commit);
      commit('UPD_SHOPCART', { skuId, skuNum });
    },
    async delShop({ commit }, skuId) {
      // 发送删除购物车数据请求
      await reqDelShop(skuId)
      // 也是有两种方法更新数据 要么重新发请求，要么就直接修改vuex数据
      commit('DEL_SHOP', skuId)
    },
    async cartChecked({ commit }, { skuId, isChecked }) {
      await reqCartChecked(skuId, isChecked);
      // console.log(commit);
      // 跟addShopCart一样有两种写法,要么重新发请求，要么就直接修改vuex数据
      commit('CART_CHECKED', { skuId, isChecked });
    },
    // 处理全选的情况
    async allCartChecked({ commit }, { cartList, isChecked }) {
      await cartList.forEach(async cart => {
        await reqCartChecked(cart.skuId, isChecked);
      })
      commit('ALL_CART_CHECKED', isChecked)

    }
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    UPD_SHOPCART(state, { skuId, skuNum }) {
      // 使用find效率是比较高,但是若没有数据的话会报错,可在find前面判断一下，有数据在查找
      // state.cartList.find((cart) => cart.skuId === skuId).skuNum += skuNum;
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },
    CART_CHECKED(state, { skuId, isChecked }) {
      state.cartList.find((cart) => cart.skuId === skuId).isChecked = isChecked;
    },
    ALL_CART_CHECKED(state, isChecked) {
      state.cartList = state.cartList.map((cart) => {
        cart.isChecked = isChecked;
        return cart;
      });
    },
    DEL_SHOP(state, skuId) {
      state.cartList = state.cartList.filter(cart => cart.skuId !== skuId)
    }
  }
};
