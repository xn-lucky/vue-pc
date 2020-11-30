/*
  工具函数模块,公共部分
*/
import axios from 'axios';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 创建一个axios为instance,功能与axios类似，但是没有axios本身的静态方法
const instance = axios.create({
  // baseURL: 'http://182.92.128.115/api',
  // 公共的路径,因为运用了代理解决跨域,所以客户端发送请求到代理服务器,代理服务器的地址是与客户端的一致,所以可以省略，
  baseURL: '/api',
  headers: {
    // 这边是配置公共的请求头，但是因为登录没有传token参数，所以这边不会设置
  }
});
// 请求拦截器
instance.interceptors.request.use((config) => {
  // 在请求之前做一些配置，比如说设置公共的请求头
  // console.log(config);
  // 开始设置进度条
  NProgress.start();
  return config;
}
  // 第二个参数是返回失败的请求响应，若是只有一个请求拦截器,则不会触发失败的，底层是返回的成功
  // ,()=>{}
);
// 响应拦截器
instance.interceptors.response.use((res) => {
  // 返回回来再响应拦截器中做数据处理，希望成功就返回成功数据，失败就返回失败信息
  /* 主要一点是:  响应成功不代表功能成功,
        响应成功: 是响应状态码为2XX
        功能成功: 是返回的数据res.data.code为200
  */
  // 不管是不是成功还是失败，都结束进度条
  NProgress.done();
  if (res.data.code === 200) {
    return res.data.data;
  }
  return Promise.reject(res.data.message);
}, (error) => {
  NProgress.done();
  return Promise.reject(error);
});

export default instance;
