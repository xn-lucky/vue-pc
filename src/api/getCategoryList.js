/*
  实现请求获取首页三级分类
*/
/* eslint-disable  */
import instance from '@utils/request';

export const reqGetCategoryList = () => {
	return instance({
		method: 'GET',
		url: '/product/getBaseCategoryList'
	});
};
