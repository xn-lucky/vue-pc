<template>
  <div class="goodstype">
    <div class="goodstype-container">
      <div
        class="goodstype-type"
        @mouseenter="isSearchShow = true"
        @mouseleave="isSearchShow = false"
      >
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
        <!-- 最优解: 通过事件委托的方式给每一级分类绑定事件
            方式一: 利用router-link 给每一级分类进行链接导航(会出现有多少个数据就有多少个router-link组件,性能不好)
            方式二: 给每一级分类绑定点击事件进行编程式导航,(绑定的事件太多)
            方式三(最优解): 通过事件委托给需要绑定事件的公共的父级，利用冒泡原理
         -->
        <transition name="search">
          <div
            class="goodstype-list"
            @click="toSearch"
            v-show="isHomeShow || isSearchShow"
          >
            <div
              class="goodstype-list-detail"
              v-for="categoryList in categoryLists"
              :key="categoryList.id"
            >
              <h3>
                <!-- 一级分类 -->
                <a
                  :data-categoryName="categoryList.categoryName"
                  :data-categoryId="categoryList.categoryId"
                  :data-categorytype="1"
                  >{{ categoryList.categoryName }}</a
                >
              </h3>
              <div class="goodstype-specific">
                <div class="goodstype-specific-list">
                  <dl
                    v-for="twoCategory in categoryList.categoryChild"
                    :key="twoCategory.id"
                  >
                    <dt>
                      <!-- 二级分类 -->
                      <a
                        :data-categoryName="twoCategory.categoryName"
                        :data-categoryId="twoCategory.categoryId"
                        :data-categorytype="2"
                        >{{ twoCategory.categoryName }}</a
                      >
                    </dt>
                    <dd
                      v-for="threeCategory in twoCategory.categoryChild"
                      :key="threeCategory.id"
                    >
                      <!-- 三级分类 -->
                      <a
                        :data-categoryName="threeCategory.categoryName"
                        :data-categoryId="threeCategory.categoryId"
                        :data-categorytype="3"
                        >{{ threeCategory.categoryName }}</a
                      >
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "GoodsType",
  data() {
    return {
      isHomeShow: this.$route.path === "/",
      isSearchShow: false,
    };
  },
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
    toSearch(e) {
      // 可以获取到目标元素,给目标元素绑定自定义属性，获取属性
      // data-属性名 = 属性值  设置自定义属性
      // e.target.dataset可以获取目标元素中自定义属性
      // console.log(e.target.dataset);
      const { categoryname, categoryid, categorytype } = e.target.dataset;

      const localtion = {
        name: "search",
        query: {
          categoryName: categoryname,
          [`category${categorytype}id`]: categoryid,
        },
      };

      // 判断是否有params参数，有就添加,因为在路由配置那边定义的路由参数(params)为searchText，所以在这边解构出来
      const { searchText } = this.$route.params;
      if (searchText) {
        localtion.params = {
          searchText,
        };
      }

      // 进行编程式导航,需要传递两个query参数
      this.$router.push(localtion);
    },
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
  // height: 24px;
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
  float: left;
}
.goodstype-specific-list dd {
  height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ddd;
  float: left;
}
.search-enter {
  height: 0;
}
.search-enter-active {
  transition: height 0.5s;
  overflow: hidden;
}
</style>
