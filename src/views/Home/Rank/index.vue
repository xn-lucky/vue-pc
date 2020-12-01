<template>
  <div class="rank">
    <div class="rank-title">
      <a href="###" class="rank-title-link active">
        <p><i></i></p>
        <span>热卖排行</span>
      </a>
      <a href="###" class="rank-title-link">
        <p><i></i></p>
        <span>特价排行</span>
      </a>
      <a href="###" class="rank-title-link">
        <p><i></i></p>
        <span>新品排行</span>
      </a>
    </div>
    <ul class="rank-content">
      <li>
        <div class="rank-content-single">
          <div class="rank-content-img">
            <img src="./images/1.jpg" alt="" />
          </div>
          <div class="rank-content-info">
            <a href="###">
              【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
              移动联通电信4G手机
            </a>
          </div>
          <p class="rank-content-price">定金：¥100.00</p>
        </div>
        <div class="rank-content-single">
          <div class="rank-content-img">
            <img src="./images/1.jpg" alt="" />
          </div>
          <div class="rank-content-info">
            <a href="###"
              >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
              移动联通电信4G手机</a
            >
          </div>
          <p class="rank-content-price">定金：¥100.00</p>
        </div>
        <div class="rank-content-single">
          <div class="rank-content-img">
            <img src="./images/1.jpg" alt="" />
          </div>
          <div class="rank-content-info">
            <a href="###"
              >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
              移动联通电信4G手机</a
            >
          </div>
          <p class="rank-content-price">定金：¥100.00</p>
        </div>
        <div class="rank-content-single">
          <div class="rank-content-img">
            <img src="./images/1.jpg" alt="" />
          </div>
          <div class="rank-content-info">
            <a href="###"
              >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
              移动联通电信4G手机</a
            >
          </div>
          <p class="rank-content-price">定金：¥100.00</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Rank",
};
</script>

<style lang='less' scoped>
.rank {
  width: 1200px;
  margin: 0 auto;
}
.rank-title {
  width: 312px;
  height: 78px;
  margin: 0 auto;
  display: flex;
}
.rank-title-link {
  // width: 64px;
  height: 78px;
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  color: #999;
  &:hover {
    text-decoration: none;
    color: rgb(79, 76, 212);
  }
}
.rank-title-link p {
  width: 64px;
  height: 35px;
  margin: 5px 0;
}
.rank-title-link p i {
  display: block;
  width: 35px;
  height: 35px;
  margin: 0 auto;
  background: url("./images/bg0.png");
}
.rank-title .rank-title-link:nth-child(1) i {
  background-position: -35px 0;
}
.rank-title-link span {
  width: 64px;
  height: 28px;
  line-height: 28px;
  margin: 5px 0;
  font-size: 16px;
  text-align: center;
}
.active {
  color: #e60012;
}

.rank-content {
  width: 1180px;
  height: 340px;
  padding: 10px;
  margin: 0 auto;
}
.rank-content li {
  width: 100%;
  height: 100%;
  display: flex;
}
.rank-content-single {
  width: 269px;
  height: 328px;
  border: 1px solid #e1251b;
  margin: 0 12px 10px;
}
.rank-content-img {
  width: 230px;
  height: 210px;
  margin: 5px 19.5px 18px;
}
.rank-content-img img {
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
}
.rank-content-info,
.rank-content-price {
  width: 259px;
  padding-left: 10px;
}
.rank-content-info {
  height: 50px;
  line-height: 28px;
}
.rank-content-price {
  height: 35px;
  line-height: 24px;
  margin-top: 10px;
  font-size: 20px;
  color: #e1251b;
}
</style>
