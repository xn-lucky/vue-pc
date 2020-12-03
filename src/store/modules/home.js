/*
   home页面的state...
*/
import { reqGetCategoryList } from '@api/getCategoryList';
import { mockGetBanners, mockGetFloors, mockGetLikes } from '@api/getMockData';

export default {
	state: {
		categoryLists: [],
		banners: [],
		floors: [],
		likes: []
	},
	getters: {},
	actions: {
		async getCategoryList({ commit }) {
			// 发送请求
			const categoryLists = await reqGetCategoryList();
			// 成功后触发mutations函数
			commit('GET_CATEGORY_LIST', categoryLists);
		},

		async getBanners({ commit }) {
			const banners = await mockGetBanners();
			commit('GET_BANNERS', banners);
		},
		async getFloors({ commit }) {
			const floors = await mockGetFloors();
			commit('GET_FLOORS', floors);
		},
		async getLikes({ commit }) {
			debugger;
			const likes = await mockGetLikes();
			commit('GET_LIKES', likes);
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
			state.categoryLists = categoryLists.slice(0, 15);
		},
		GET_BANNERS(state, banners) {
			state.banners = banners;
		},
		GET_FLOORS(state, floors) {
			state.floors = floors;
		},
		GET_LIKES(state, likes) {
			state.likes = likes;
		}
	}
};
