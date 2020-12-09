<template>
  <div class="search">
    <GoodsType />
    <div class="search-content">
      <div class="search-bread">
        <div class="bread-show">全部结果</div>
        <ul class="bread-list">
          <!-- 搜索框的param参数 -->
          <li v-show="options.keyword">
            <span>搜索内容: {{ options.keyword }}</span
            ><i @click="delKeyword">x</i>
          </li>
          <!-- 显示分类名称 -->
          <li v-show="options.categoryName">
            <span>分类名称: {{ options.categoryName }}</span
            ><i @click="delCategoryName">x</i>
          </li>
          <!-- 显示品牌 -->
          <li v-show="options.trademark">
            <span>品牌: {{ options.trademark.split(":")[1] }}</span
            ><i @click="delTrademark">x</i>
          </li>
          <!-- 显示品牌属性 因为遍历的是数组，有数据就遍历显示没有数据就不会遍历所以用不到v-show-->
          <li v-for="(prop, index) in options.props" :key="prop">
            <span
              >品牌属性: {{ prop.split(":")[1] }}:{{ prop.split(":")[2] }}</span
            ><i @click="delProp(index)">x</i>
          </li>
        </ul>
      </div>
      <!-- 有品牌数据 -->
      <SelectType :addTrademark="addTrademark" @add-prop="addProp" />
      <div class="search-navbar">
        <ul class="navbar-list">
          <li
            :class="{ active: options.order.indexOf('1') > -1 }"
            @click="updOrder('1')"
          >
            <a>综合</a>
            <i
              :class="`iconfont ${
                isAllDown ? 'icon-arrowdown' : 'icon-arrowup1'
              }`"
            ></i>
          </li>
          <li><a>销量</a></li>
          <li><a>新品</a></li>
          <li><a>评价</a></li>
          <li
            :class="{ active: options.order.indexOf('2') > -1 }"
            @click="updOrder('2')"
          >
            <a>价格</a>
            <span>
              <i
                :class="{
                  iconfont: true,
                  'icon-arrowup': true,
                  deactive: options.order.indexOf('2') > -1 && !isPriceGrey,
                }"
              ></i>
              <i
                :class="{
                  iconfont: true,
                  'icon-arrowdown-copy': true,
                  deactive: options.order.indexOf('2') > -1 && isPriceGrey,
                }"
              ></i>
            </span>
          </li>
        </ul>
      </div>
      <GoodsList />

      <div class="search-pager">
        <!-- elementUI 分页器 -->
        <!-- <el-pagination
          @size-change="pageSizeChange"
          @current-change="currentPageChange"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="options.pageSize"
          :current-page="options.pageNo"
          background
          layout="sizes,prev, pager,next,total"
          :total="total"
        >
        </el-pagination> -->
        <!-- 手写一个分页器,定义成一个组件
                1- 分页需要用到的数据
                 1-1 currentPage 当前页
                 1-2 pageSize 每页多少条数据
                 1-3 total 数据总条数
                 1-4 通过total和pageSize可以获取到总页数 totalPage
          -->
        <Pager
          @current-change="updGetProductList"
          :currentPage="options.pageNo"
          :pageSize="options.pageSize"
          :total="total"
          :pagerCount="7"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import GoodsType from "@comps/GoodsType";
import Pager from "@comps/Pager";
import SelectType from "./SelectType";
import GoodsList from "./GoodsList";

export default {
  name: "Search",
  data() {
    return {
      options: {
        category1id: "", // 一级分类
        category2id: "", // 二级分类
        category3id: "", // 三级分类
        categoryName: "", // 分类的名称
        keyword: "", // 关键字 (指搜索框中输入的文字即地址栏中的params参数)
        order: "1:desc", // 排序方式 order:'1:desc' 默认综合降序
        pageNo: 1, // 当前显示的页数
        pageSize: 5, // 每页的数据条数
        props: [], // 选择分类商品属性
        trademark: "", // 品牌 trademark: "4:小米",
      },
      isAllDown: true, // 控制综合按钮的箭头图标
      isPriceGrey: true, // 控制价格按钮的向上或向上的高亮效果
    };
  },
  // 监视地址栏的变化(即传递的参数改变触发)
  watch: {
    // 第一种写法：配合mounted一起写
    $route() {
      this.updGetProductList();
    },
    // 第二种写法: 只需要写watch就可以
    // $route: {
    //   handler() {
    //     this.updGetProductList();
    //   },
    //   // 添加immediate属性,一上来就会执行watch中的$route
    //   immediate: true,
    // },
  },
  components: {
    GoodsType,
    SelectType,
    GoodsList,
    Pager,
  },
  computed: {
    // 这种获取数据太麻烦了,如果想要获取到productList下的数据，很麻烦，想要将productList下的数据也可以通过this获取,利用getters获取
    ...mapState({
      productList: (state) => state.search.productList,
    }),
    ...mapGetters(["total"]),
  },
  methods: {
    ...mapActions(["getProductList"]),
    updGetProductList(pageNo = 1) {
      /**
       *  发送请求
       *    1- 有可能一上来就会有参数，在data中定义一下初始化的参数数据
       *    2- 因为不知道哪些数据有变化，所以将所有的数据都传一下
       */
      // 将params参数解构出来并重新赋值
      // debugger;
      const { searchText: keyword } = this.$route.params;
      const {
        category1id,
        category2id,
        category3id,
        categoryName,
      } = this.$route.query;
      const options = {
        ...this.options,
        keyword,
        category1id,
        category2id,
        category3id,
        categoryName,
        pageNo,
      };
      // 同步更新data中的数据
      this.options = options;

      this.getProductList(options);
    },
    delKeyword() {
      // 点击x删除标签属性
      this.options.keyword = "";
      // 要触发地址栏改变，进而重新发送请求
      // 也要清空搜索框中写的params参数
      this.$bus.$emit("clearSearchText");
      // 将params参数值为空，
      this.$router.replace({
        name: "search",
        query: this.$route.query,
      });
    },
    delCategoryName() {
      // 点击x删除三级分类名称
      this.options.categoryName = "";
      // 要触发地址栏改变，进而重新发送请求
      // 将query参数值为空，
      this.$router.replace({
        name: "search",
        params: this.$route.params,
      });
    },
    // 添加品牌
    addTrademark(trademark) {
      this.options.trademark = trademark;
      // 重新发送请求
      this.updGetProductList();
    },
    // 删除品牌
    delTrademark() {
      this.options.trademark = "";
      // 重新发送请求
      this.updGetProductList();
    },
    // 添加品牌属性
    addProp(prop) {
      this.options.props.push(prop);
      // 重新发送请求
      this.updGetProductList();
    },
    // 删除品牌属性可以通过下标进行删除
    delProp(index) {
      // 从数组的index开始删除一个元素(即删除当前下标元素)
      this.options.props.splice(index, 1);
      // 重新发送请求
      this.updGetProductList();
    },
    updOrder(order) {
      let [orderNum, orderType] = this.options.order.split(":");

      if (orderNum === order) {
        // 如果在同一个按钮下点击大于一次
        // 如果是1综合 箭头图标改变
        if (order === "1") {
          this.isAllDown = !this.isAllDown;
        }
        if (order === "2") {
          this.isPriceGrey = !this.isPriceGrey;
        }
        orderType = orderType === "desc" ? "asc" : "desc";
      } else {
        if (order === "1") {
          orderType = this.isAllDown ? "desc" : "asc";
        }
        if (order === "2") {
          this.isPriceGrey = true;
          orderType = "asc";
        }
      }
      // 修改参数数据
      this.options.order = `${order}:${orderType}`;
      // 发送请求
      this.updGetProductList();
    },
    pageSizeChange(pageSize) {
      // 当前页面展示的条数改变触发的事件
      // console.log("pageSize", pageSize);
      // 修改options中的数据
      this.options.pageSize = pageSize;
      // 发送请求
      this.updGetProductList();
    },
    currentPageChange(pageNo) {
      // 当前页面是第几页,点击下面的页码时候触发的事件
      // console.log("pageNo", pageNo);
      // 修改options中的数据
      this.options.pageNo = pageNo;
      // 发送请求
      this.updGetProductList(pageNo);
    },
  },
  mounted() {
    // 页面加载完成后调用一次，还有就是在地址栏发生变化再调请求
    this.updGetProductList();
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
  justify-content: flex-start;
  // align-items: center;
}
.bread-show {
  // width: 48px;
  // height: 22px;
  // line-height: 22px;
  padding: 3px 15px;
}
.bread-list {
  margin: 0 0 18px;
  display: flex;
  // line-height: 22px;
}
.bread-list li {
  // width: 102px;
  height: 20px;
  line-height: 20px;
  padding-left: 7px;
  border: 1px solid #dedede;
  margin: 0 5px 5px 0;
  background: #f7f7f7;
  display: flex;
  justify-content: space-around;
  &:hover {
    color: #28a3ef;
  }
}
.bread-list i {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
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
  display: flex;
  align-items: center;
  cursor: pointer;
}
.navbar-list a:hover {
  color: rgb(79, 76, 212);
}
.navbar-list i {
  font-size: 12px;
}
.navbar-list span {
  display: flex;
  flex-direction: column;
  line-height: 4px;
  transform: scale(1.6);
}
.navbar-list li.active {
  background: #e1251b;
  color: #fff;
  a {
    color: #fff;
  }
}
.navbar-list .deactive {
  color: rgba(247, 243, 243, 0.7);
}
.search-pager {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
}
</style>
