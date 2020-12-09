/*
  购物车的请求
*/
/* eslint-disable  */
import instance from '@utils/request';

// 获取购物车数据 cart/cartList
export const reqGetCartList = () => {
  return instance({
    method: 'GET',
    url: '/cart/cartList'
  });
};

// 添加购物车数据,skuId商品id, skuNum商品数量
export const reqAddShopCart = (skuId, skuNum) => {
  return instance({
    method: 'POST',
    url: `cart/addToCart/${skuId}/${skuNum}`
  });
};
// 删除购物车数据, 点击操作的删除
export const reqDelShop = (skuId) => {
  return instance({
    method: 'DELETE',
    url: `/cart/deleteCart/${skuId}`
  })

}


// 切换商品选中状态 /cart/checkCart/{skuID}/{isChecked}
export const reqCartChecked = (skuId, isChecked) => {
  return instance({
    method: 'GET',
    url: `/cart/checkCart/${skuId}/${isChecked}`
  });
};
