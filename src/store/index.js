import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable  */
import modules from './modules';

Vue.use(Vuex);
// 总的state,getters,actions,mutations
const state = {};
const getters = {};
const actions = {};
const mutations = {};

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules // 引入各个模块的数据
});
