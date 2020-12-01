<template>
  <div class="home">
    <!-- 商品列表公有的,搜索时也要实现 -->
    <GoodsType />
    <!-- 轮播图 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <TodayRecommend />
    <!-- 热卖 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!-- floor -->
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import GoodsType from "@comps/GoodsType";
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";

export default {
  name: "Home",
  components: {
    GoodsType,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
  },
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  methods: {
    ...mapActions(["getFloors"]),
  },
  mounted() {
    // 发送请求
    this.getFloors();
  },
};
</script>

<style lang="less" scoped>
</style>
