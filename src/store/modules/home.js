/*
   home页面的state...
*/
import { reqGetCategoryList } from "@api/getCategoryList";
import { mockGetBanners } from "@api/getMockData";

export default {
  state: {
    categoryLists: [],
    banners: []
  },
  getters: {

  },
  actions: {
    async getCategoryList({ commit }) {
      // 发送请求
      const categoryLists = await reqGetCategoryList();
      // 成功后触发mutations函数
      commit('GET_CATEGORY_LIST', categoryLists);
    },

    async getBanners({ commit }) {
      debugger;
      const banners = await mockGetBanners();
      commit('GET_BANNERS', banners);
    }

    // .then((res) => {
    //   // 返回数据成功,使数据变成响应式
    //   this.categoryLists = res.slice(0, 15);
    // })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  mutations: {
    GET_CATEGORY_LIST(state, categoryLists) {
      state.categoryLists = categoryLists;
    },
    GET_BANNERS(state, banners) {
      state.banners = banners;
    }

  }
};
