/* eslint-disable no-tabs */
/**
   实现搜索商品的需求
*/
/* eslint-disable  */
import request from '@utils/request';

export const reqGetProductList = (data) => {
	return request({
		method: 'POST',
		url: '/list',
		data
	});
};
