<template>
  <div class="home">
    <!-- 商品列表公有的,搜索时也要实现 -->
    <GoodsType />
    <ListContainer />
    <!-- 今日推荐 -->
    <TodayRecommend />
    <!-- 热卖 -->
    <Rank />
  </div>
</template>

<script>
import GoodsType from "@comps/GoodsType";
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";

export default {
  name: "Home",
  components: {
    GoodsType,
    ListContainer,
    TodayRecommend,
    Rank,
  },
};
</script>

<style lang="less" scoped>
</style>
