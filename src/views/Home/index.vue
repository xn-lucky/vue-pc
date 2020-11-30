<template>
  <div class="home">
    <!-- 商品列表公有的,搜索时也要实现 -->
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
