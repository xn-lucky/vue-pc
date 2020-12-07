/*
  购物车的请求
*/
import instance from '@utils/request'

// 获取购物车数据 cart/cartList
export const reqGetCartList = () => {
  return instance({
    method: 'GET',
    url: '/cart/cartList'
  })
}

// 添加购物车数据,skuId商品id, skuNum商品数量
export const reqAddShopCart = (skuId, skuNum) => {
  return instance({
    method: 'POST',
    url: `cart/addToCart/${skuId}/${skuNum}`
  })
}
