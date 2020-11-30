<template>
  <div class="goodstype">
    <div class="goodstype-container">
      <div class="goodstype-type">
        <h2>全部商品分类</h2>
        <nav class="goodstype-nav">
          <a href="##">服装城</a>
          <a href="##">美妆馆</a>
          <a href="##">尚品汇超市</a>
          <a href="##">全球购</a>
          <a href="##">闪购</a>
          <a href="##">团购</a>
          <a href="##">有趣</a>
          <a href="##">秒杀</a>
        </nav>
        <div class="goodstype-list">
          <div
            class="goodstype-list-detail"
            v-for="categoryList in categoryLists"
            :key="categoryList.id"
          >
            <h3>
              <!-- 一级分类 -->
              <a href="####">{{ categoryList.categoryName }}</a>
            </h3>
            <div class="goodstype-specific">
              <div class="goodstype-specific-list">
                <dl
                  v-for="twoCategory in categoryList.categoryChild"
                  :key="twoCategory.id"
                >
                  <dt>
                    <a>{{ twoCategory.categoryName }}</a>
                  </dt>
                  <dd
                    v-for="threeCategory in twoCategory.categoryChild"
                    :key="threeCategory.id"
                  >
                    <a>{{ threeCategory.categoryName }}</a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "GoodsType",
  // data() {
  //   return {
  //     categoryLists: [],
  //   };
  // },
  computed: {
    // 因为数据在home中，所以获取数据的时候不能像之前那样获取了
    // ...mapState(["categoryLists"])
    ...mapState({
      categoryLists: (state) => {
        return state.home.categoryLists;
      },
    }),
  },
  methods: {
    // 函数不需要
    ...mapActions(["getCategoryList"]),
  },
  mounted() {
    // console.log(this);
    // 发送数据请求
    this.getCategoryList();
    //   reqGetCategoryList()
    //     .then((res) => {
    //       // 返回数据成功,使数据变成响应式
    //       this.categoryLists = res.slice(0, 15);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>

<style lang="less" scoped>
.goodstype {
  position: relative;
}
.goodstype-container {
  border-bottom: 2px solid #e1251b;
}
.goodstype-type,
.goodstype-list {
  width: 1200px;
  margin: 0 auto;
}
.goodstype-type {
  display: flex;
}
.goodstype-type h2,
.goodstype-nav {
  height: 45px;
  line-height: 45px;
}
.goodstype-type h2 {
  width: 210px;
  text-align: center;
  background-color: #e1251b;
  color: #fff;
}
.goodstype-nav a {
  font-size: 16px;
  color: #000;
  margin: 0 20px;
}

.goodstype-list {
  width: 210px;
  height: 460px;
  background-color: #fafafa;
  position: absolute;
  top: 45px;
}
.goodstype-list-detail:hover .goodstype-specific {
  display: block;
}
.goodstype-list-detail h3 {
  width: 170px;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  font-weight: 400;
  &:hover {
    background-color: #ccc;
  }
}
.goodstype-list-detail h3 a {
  text-decoration: none;
}
.goodstype-specific {
  width: 734px;
  height: 460px;
  background-color: #f7f7f7;
  position: absolute;
  top: 0;
  left: 210px;
  border: 1px solid #ddd;
  display: none;
  z-index: 0;
}
.goodstype-specific-list {
  width: 650px;
  padding-left: 8px;
  padding-right: 4px;
}
.goodstype-specific-list dl {
  height: 24px;
  padding: 6px 0;
  display: flex;
  font-size: 12px;
  flex-wrap: wrap;
}
.goodstype-specific-list dt {
  width: 54px;
  height: 21px;
  font-weight: 700;
  text-align: right;
  padding-top: 3px;
  padding-right: 6px;
}
.goodstype-specific-list dd {
  height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ddd;
}
</style>
