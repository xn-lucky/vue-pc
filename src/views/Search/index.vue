<template>
  <div class="search">
    <GoodsType />
    <div class="search-content">
      <div class="search-bread">
        <div class="bread-show">全部结果</div>
        <ul class="bread-list"></ul>
      </div>
      <!-- 有品牌数据 -->
      <SelectType />
      <div class="search-navbar">
        <ul class="navbar-list">
          <li class="active"><a href="###">综合⬇</a></li>
          <li><a href="###">销量⬇</a></li>
          <li><a href="###">新品⬇</a></li>
          <li><a href="###">评价⬇</a></li>
          <li><a href="###">价格⬇</a></li>
        </ul>
      </div>
      <GoodsList />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import GoodsType from "@comps/GoodsType";
import SelectType from "./SelectType";
import GoodsList from "./GoodsList";

export default {
  name: "Search",
  components: {
    GoodsType,
    SelectType,
    GoodsList,
  },
  computed: {
    // 这种获取数据太麻烦了,如果想要获取到productList下的数据，很麻烦，想要将productList下的数据也可以通过this获取,利用getters获取
    ...mapState({
      productList: (state) => state.search.productList,
    }),
  },
  methods: {
    ...mapActions(["getProductList"]),
  },
  mounted() {
    // 发送请求
    this.getProductList();
  },
};
</script>

<style lang="less" scoped>
.search-content {
  width: 1200px;
  margin: 10px auto 0;
}
.search-bread {
  // height: 45px;
  margin: 0 0 5px;
  display: flex;
}
.bread-show {
  width: 48px;
  height: 17px;
  padding: 3px 15px;
}
.bread-list {
  margin: 5px 0 18px;
}

.search-navbar {
  // height: 42px;
  border: 1px solid #e4e4e4;
}
.navbar-list {
  display: flex;
}
.navbar-list li {
  padding: 11px 15px;
}
.navbar-list li.active {
  background: #e1251b;
}
</style>
