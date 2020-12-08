/*
  detail管理数据的地方
*/
/* eslint-disable */
import { reqGetDetailInfo } from '@api/detail';

export default {
	state: {
		detailInfo: {
			categoryView: {},
			spuSaleAttrList: [],
			skuInfo: {
				skuImageList: []
			}
		}
	},
	getters: {
		categoryView(state) {
			return state.detailInfo.categoryView;
		},
		spuSaleAttrList(state) {
			return state.detailInfo.spuSaleAttrList;
		},
		skuInfo(state) {
			return state.detailInfo.skuInfo;
		}
	},
	actions: {
		async getDetailInfo({ commit }, id) {
			const detailInfo = await reqGetDetailInfo(id);
			commit('GET_DETAIL_INFO', detailInfo);
		}
	},
	mutations: {
		GET_DETAIL_INFO(state, detailInfo) {
			state.detailInfo = detailInfo;
		}
	}
};
