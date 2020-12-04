/*
  detail请求

*/
import instance from '@utils/request'

export const reqGetDetailInfo = (id) => {
  return instance({
    method: 'GET',
    url: `/item/${id}`
  })
}
