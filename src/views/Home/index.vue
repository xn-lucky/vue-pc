<template>
  <div class="home">
    <!-- 商品列表公公有的搜索时也要现实 -->
    <GoodsType />
    <ListContainer />
  </div>
</template>

<script>
import GoodsType from "@comps/GoodsType";
import ListContainer from "./ListContainer";

export default {
  name: "Home",
  components: {
    GoodsType,
    ListContainer,
  },
};
</script>

<style lang="less" scoped>
</style>
