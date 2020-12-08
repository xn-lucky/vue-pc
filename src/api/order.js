import instance from '@utils/request'

// 获取订单交易信息

export const reqOrderTradeInfo = () => {
  return instance({
    method: 'GET',
    url: '/order/auth/trade'
  })
}

// 提交订单请求 /order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList }) => {
  return instance({
    method: 'POST',
    url: '/order/auth/submitOrder',
    params: {
      tradeNo
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    }
  })
}
