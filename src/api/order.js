import instance from '@utils/request';

// 获取订单交易信息

export const reqOrderTradeInfo = () => {
  return instance({
    method: 'GET',
    url: '/order/auth/trade'
  });
};

// 提交订单请求 /order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList
}) => {
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
      orderDetailList
    }
  });
};

// 获取订单支付信息
export const reqCreateNative = (orderId) => {
  return instance({
    method: 'GET',
    url: `/payment/weixin/createNative/${orderId}`
  });
};
// 获取我的订单列表 /order/auth/{page}/{limit}
// page页码  limit每页显示的数量
export const reqOrderList = ({ page = 1, limit = 5 }) => {
  return instance({
    method: 'GET',
    url: `/order/auth/${page}/${limit}`
  })
}
