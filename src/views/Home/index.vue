<template>
  <div class="home">
    <div class="home-top">
      <div class="home-container">
        <h2>全部商品分类</h2>
        <nav>
          <a href="##">服装城</a>
          <a href="##">美妆馆</a>
          <a href="##">尚品汇超市</a>
          <a href="##">全球购</a>
          <a href="##">闪购</a>
          <a href="##">团购</a>
          <a href="##">有趣</a>
          <a href="##">秒杀</a>
        </nav>
      </div>
    </div>
    <div class="home-bottom">
      <div class="home-bottom-left">
        <h3><a href="####">图书、音像,电子书刊</a></h3>
        <h3><a href="####">手机</a></h3>
        <h3><a href="####">家用电器</a></h3>
        <h3><a href="####">数码</a></h3>
      </div>
      <div class="home-bottom-middle">
        <img src="./images/home/banner2.jpg" alt="" />
        <!-- <img src="./images/home/banner1.jpg" alt="" />
        <img src="./images/home/banner1.jpg" alt="" />
        <img src="./images/home/banner1.jpg" alt="" /> -->
      </div>
      <div class="home-bottom-right">
        <div class="home-bottom-right-top">
          <h4><em>尚品汇快报</em><span>更多 ></span></h4>
          <ul>
            <li>[特惠]备战开学季 全民半价购数码</li>
            <li>[公告]备战开学季 全民半价购数码</li>
            <li>[特惠]备战开学季 全民半价购数码</li>
            <li>[公告]备战开学季 全民半价购数码</li>
            <li>[特惠]备战开学季 全民半价购数码</li>
          </ul>
        </div>
        <div class="home-bottom-right-middle"></div>
        <div class="home-bottom-right-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.home-top {
  border-bottom: 2px solid #e1251b;
}
.home-container,
.home-bottom {
  width: 1200px;
  margin: 0 auto;
}
.home-container {
  height: 45px;
  line-height: 45px;
  display: flex;
}
.home-container h2 {
  width: 210px;
  text-align: center;
  background-color: #e1251b;
  color: #fff;
}
.home-container a {
  font-size: 16px;
  color: #000;
  margin: 0 20px;
}

.home-bottom {
  display: flex;
}
.home-bottom-left {
  width: 210px;
  height: 460px;
  background-color: #fafafa;
  // position: absolute;
  // top: 45px;
}
.home-bottom-left h3 {
  width: 170px;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  font-weight: 400;
}
.home-bottom-left h3 a {
  text-decoration: none;
}

.home-bottom-middle {
  width: 730px;
  height: 454px;
  padding: 5px;
}
.home-bottom-right {
  width: 250px;
  height: 460px;
}
.home-bottom-right-top {
  width: 248px;
  height: 175px;
  border: 1px solid #ddd;
  margin-top: 5px;
}
</style>
