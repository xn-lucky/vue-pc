/* eslint-disable no-tabs */
/*
  工具函数模块,公共部分
*/
import axios from 'axios';
import { Message } from 'element-ui'
import getUserTempId from '@utils/getUserTempId';
import NProgress from 'nprogress';
// store就是vuex的store，也是this.$store

/* eslint-disable import/no-cycle */
import store from "../store";

import 'nprogress/nprogress.css';

// 内存中定义，即写在外边，不需要每次请求都去函数中调用返回
const userTempId = getUserTempId()
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
instance.interceptors.request.use(
  (config) => {
    // 在请求之前做一些配置，比如说设置公共的请求头
    // console.log(config);
    // 开始设置进度条
    NProgress.start();
    // 判断是否有token,如果每次都在localStorage中获取,是读取硬盘的，性能较差，之前有在登录成功后保存在vuex中，可以直接在vuex中获取(vuex的数据是保存在内存中的)

    const { headers } = config
    // let token = ''
    let { token } = store.state.user;
    if (token) {
      // 设置请求头
      headers.token = token;
    }

    // 设置请求头
    headers.userTempId = userTempId;
    return config;
  }
  // 第二个参数是返回失败的请求响应，若是只有一个请求拦截器,则不会触发失败的，底层是返回的成功
  // ,()=>{}
);
// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // debugger
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

    // 在拦截器中处理错误,就不需要在页面发送请求后用catch和then获成功和失败了
    // 请求时捕获失败使用try...catch捕获失败
    let { message, data } = res.data
    const err = data ? message + data : message
    Message.error(err)
    return Promise.reject(err);
  },
  (error) => {
    debugger
    NProgress.done();
    // 处理错误信息
    const message = error.message || '网络错误';
    Message.error(message)
    return Promise.reject(error);
  }
);

export default instance;
