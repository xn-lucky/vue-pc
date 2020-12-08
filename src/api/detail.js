/*
  detail请求

*/
/* eslint-disable  */
import instance from '@utils/request';

export const reqGetDetailInfo = (id) => {
	return instance({
		method: 'GET',
		url: `/item/${id}`
	});
};
