<template>
  <div class="search">
    <GoodsType />
    <div class="search-content">
      <div class="search-bread">
        <div class="bread-show">全部结果</div>
        <ul class="bread-list"></ul>
      </div>
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
      <GoodList />
    </div>
  </div>
</template>

<script>
import GoodsType from "@comps/GoodsType";
import SelectType from './SelectType'
import GoodList from './GoodList'

export default {
  name: "Search",
  components: {
    GoodsType,
    SelectType,
    GoodList,
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
  height: 42px;
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
