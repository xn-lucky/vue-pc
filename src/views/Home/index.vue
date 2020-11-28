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
      <div class="home-bottom-left"></div>
      <div class="home-bottom-middle"></div>
      <div class="home-bottom-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.home {
  border-bottom: 2px solid #e1251b;
}
.home-top {
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
</style>
