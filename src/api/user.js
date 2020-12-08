/*
  实现请求
*/
/* eslint-disable */
import instance from '@utils/request';

// 登录请求功能

export const reqLogin = (phone, password) => {
  // 为什么要return ,因为axios请求返回一个promise对象,这样组件调用请求方法时也是返回方法的返回值即promise,可以判断成功还是失败
  return instance({
    method: 'POST',
    url: '/user/passport/login',
    data: { // data传递的是请求体参数,一般常用于post请求
      phone,
      password
    },
    // params: {}// 传递的是查询字符串参数,一般用于get请求
  });
};
// 退出登录
export const reqLogout = () => {
  return instance({
    method: 'GET',
    url: '/user/passport/logout'
  })
}

// 发送注册请求
export const reqGetRegister = (data) => {
  return instance({
    method: 'POST',
    url: '/user/passport/register',
    data
  })
}
