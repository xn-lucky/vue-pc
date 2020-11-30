//  home页面的state...
import { reqGetCategoryList } from "@api/getCategoryList";
const state = {
  categoryLists: [],
};
const getters = {

};
const actions = {
  async getCategoryList({ commit }) {
    //发送请求
    const categoryLists = await reqGetCategoryList();
    //成功后触发mutations函数
    commit('GET_CATEGORY_LIST', categoryLists);
  }

  // .then((res) => {
  //   // 返回数据成功,使数据变成响应式
  //   this.categoryLists = res.slice(0, 15);
  // })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
const mutations = {
  GET_CATEGORY_LIST(state, categoryLists) {
    state.categoryLists = categoryLists;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
}
