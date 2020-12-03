/*
  注册请求

*/
import instance from '@utils/request'
// 发送注册请求
export const reqGetRegister = (data) => {
  return instance({
    method: 'POST',
    url: '/user/passport/register',
    data
  })
}
