import { reqGetCartList, reqAddShopCart } from '@api/shopcart';

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
		}
	},
	mutations: {
		GET_CART_LIST(state, cartList) {
			state.cartList = cartList;
		},
		UPD_SHOPCART(state, { skuId, skuNum }) {
			state.cartList.find((cart) => cart.skuId === skuId).skuNum += skuNum;
		}
	}
};
