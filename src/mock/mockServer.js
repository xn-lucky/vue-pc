import banners from './rbanners.json'
import floors from './rfloors.json'

const Mock = require('mockjs')

// 相当于服务器,根据路径获取请求并返回相应数据
// get请求，小写
// 一旦运行就会拦截get请求,请求地址/mock/banners
// 并会返回响应结果(最后一个参数)
Mock.mock('/mock/banners', 'get', {
  code: 200,
  "data|4": banners
})

Mock.mock('/mock/floors', 'get', {
  code: 200,
  "data|4": floors
})
