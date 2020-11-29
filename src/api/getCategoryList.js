/*
  实现请求获取首页三级分类
*/
import instance from '@utils/request';

export const reqGetCategoryList = () => {
  return instance({
    method: "GET",
    url: '/product/getBaseCategoryList'
  });
};
