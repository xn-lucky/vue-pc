import mockRequest from '@utils/mockRequest';

/*
  实现mock模拟数据,请求方法banners
*/

export const mockGetBanners = () => {
  return mockRequest({
    method: "GET",
    url: '/banners'
  });
};

/*
  实现mock模拟数据,请求方法floors
*/

export const mockGetFloors = () => {
  return mockRequest({
    method: "GET",
    url: '/floors'
  });
};
