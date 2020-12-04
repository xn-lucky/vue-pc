<template>
  <div class="goodslist">
    <ul class="goodslist-list">
      <li v-for="goods in goodsList" :key="goods.id">
        <div class="goodslist-img">
          <router-link :to="`/detail/${goods.id}`"
            ><img :src="goods.defaultImg"
          /></router-link>
        </div>
        <div class="goodslist-price">￥{{ goods.price }}</div>
        <router-link :to="`/detail/${goods.id}`" class="goodslist-type">{{
          goods.title
        }}</router-link>
        <div class="evaluate-count">已有<span>2000</span>人评价</div>
        <div class="goodslist-add">
          <a class="cart" href="###">加入购物车</a>
          <a class="coll" href="###">收藏</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "GoodsList",
  computed: {
    ...mapGetters(["goodsList"]),
  },
};
</script>

<style lang='less' scoped>
.goodslist {
  width: 1200px;
  margin: 20px 0;
}
.goodslist-list {
  display: flex;
  flex-wrap: wrap;
}
.goodslist-list li {
  margin-top: 10px;
  width: 240px;
  height: 402px;
}
.goodslist-img {
  width: 215px;
  height: 255px;
  padding-left: 15px;
  img {
    width: 100%;
    height: 215px;
  }
}
.goodslist-price {
  padding-left: 15px;
  height: 28px;
  line-height: 28px;
  font-size: 18px;
  color: #c81623;
  font-weight: 700;
}
.goodslist-type {
  width: 204px;
  height: 38px;
  padding-left: 15px;
  margin-bottom: 8px;
  cursor: pointer;
}
.evaluate-count {
  width: 225px;
  height: 22px;
  line-height: 22px;
  padding-left: 15px;
  font-size: 13px;
  color: #a7a7a7;
  span {
    font-weight: 700;
    color: #646fb0;
  }
}
.goodslist-add {
  width: 210px;
  height: 27px;
  padding: 12px 15px;
}
.goodslist-add .cart {
  width: 60px;
  padding: 2px 14px;
  border: 1px solid #e1251b;
  color: #e1251b;
  margin-right: 15px;
}
.goodslist-add .coll {
  width: 55px;
  padding: 2px 14px;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
  margin-right: 15px;
}
</style>
