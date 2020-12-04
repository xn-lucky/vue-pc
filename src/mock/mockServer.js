import banners from './rbanners.json';
import floors from './rfloors.json';
import likes from './likes.json';

const Mock = require('mockjs');

// 相当于服务器,根据路径获取请求并返回相应数据
// get请求，小写
// 一旦运行就会拦截get请求,请求地址/mock/banners
// 并会返回响应结果(最后一个参数)
Mock.mock('/mock/banners', 'get', {
	code: 200,
	// 当随机数据为一条的时候,data不是数组
	// "data|1": banners
	// 若想编程式数组，用[]包裹
	// "data|1": [banners]
	// 当随机数据为多条的时候,data才是数组
	'data|4': banners
});

Mock.mock('/mock/floors', 'get', {
	code: 200,
	'data|4': floors
});

Mock.mock('/mock/likes', 'get', {
	code: 200,
	'data|6': likes
});
