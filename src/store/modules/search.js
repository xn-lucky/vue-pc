/* eslint-disable no-tabs */
import { reqGetProductList } from '@api/search';

export default {
  state: {
    productList: {
      trademarkList: [],
      attrsList: [],
      goodsList: []
    }
  },
  getters: {
    trademarkList(state) {
      return state.productList.trademarkList;
    },
    attrsList(state) {
      return state.productList.attrsList;
    },
    goodsList(state) {
      return state.productList.goodsList;
    }
  },
  actions: {
    // data是一个对象,传过来的是搜索商品时需要传的参数,默认传空对象,否则会报错
    async getProductList({ commit }, data = {}) {
      // 要等到数据获取到在去调用mutation函数修改数据
      const productList = await reqGetProductList(data);
      commit('GET_PRODUCT_LIST', productList);
    }
  },
  mutations: {
    GET_PRODUCT_LIST(state, productList) {
      state.productList = productList;
    }
  }
};
