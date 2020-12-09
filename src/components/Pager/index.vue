<template>
  <div class="pager">
    <button
      :disabled="myCurrentPage <= 1"
      :class="{ deactive: myCurrentPage === 1 }"
      @click="updBtnLayout(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button :class="{ active: myCurrentPage === 1 }" @click="updBtnLayout(1)">
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <!--
       1- 中间的按钮数量是通过计算在通过遍历生成的
       2- 下面是计算中间按钮的数量方式
        - 分start和end,也与pageCount(默认7,是不固定的)和mycurrentPage有关
         2-1 start与end的计算
                 const count = pageCount -2
                 const  halfCount = Math.floor(pageCount/2)
             靠前面
              正常版：1 2 3 [4] 5 6 ... 10
                    start = myCurrentPage - halfCount
               异常:  1 [2] 3 4 5 6 ... 10
                      1 [2] 3
                     [1]
                   if(start < 2){
                       start = 2
                    }
            靠后面
               正常版: 1 ... 5 6 [7] 8 9 10
                 end = start+count-1
               异常版: 1 ... 5 6 7 8 [9] 10
                 if(myCurrentPage >= totalPage-halfCount){
                   start = totalPage-count
                 }
                 if(end>=totalPage){
                   end = totalPage-1
                 }
    -->
    <button
      v-for="item in mapBtnCount"
      :key="item"
      @click="updBtnLayout(startEnd.start + item - 1)"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPage - 1">...</button>
    <button
      :class="{ active: myCurrentPage === totalPage }"
      @click="updBtnLayout(totalPage)"
      v-show="totalPage > 1"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="myCurrentPage >= totalPage"
      :class="{ deactive: myCurrentPage === totalPage }"
      @click="updBtnLayout(myCurrentPage + 1)"
    >
      下一页
    </button>
    <button>总共: {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pager",
  data() {
    return {
      // 为什么要重新定义值，因为props传过来的数据是只读的,不能修改,这个变量后期要可以设置修改的,所以在data中重新定义了
      myCurrentPage: this.currentPage,
    };
  },
  // 接收传过来的数据，若不接受可以在this.$attrs中获取到
  props: {
    currentPage: {
      type: Number,
      default: 1, // 默认值为1
    },
    pageSize: {
      type: Number,
      default: 5, // 默认5条数据
    },
    total: {
      type: Number,
      default: 0,
    },
    pagerCount: {
      type: Number, // 一共要显示多少个按钮， 默认7个
      validator(val) {
        // 验证，通过之后才能用
        // 大于等于 5 且小于等于 21 的奇数
        // 返回true验证成功，
        // 返回false验证失败
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7
    },
  },
  computed: {
    totalPage() {
      // 计算总页数，向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      const { pagerCount, totalPage, myCurrentPage } = this;
      let start;
      let end;
      const count = pagerCount - 2;
      const halfCount = Math.floor(count / 2);

      if (myCurrentPage >= totalPage - halfCount) {
        start = totalPage - count;
      } else {
        start = myCurrentPage - halfCount;
      }
      if (start < 2) {
        start = 2;
      }

      end = start + count - 1;
      if (end >= totalPage) {
        end = totalPage - 1;
      }
      return {
        start,
        end,
      };
    },
    // 需要遍历按钮的数量
    mapBtnCount() {
      const { end, start } = this.startEnd;
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  watch: {
    // 监听当前页面的改变,改变就发送请求
    myCurrentPage(currentPage) {
      // 触发请求 自定义事件 通过@定义的 可以通过this.$listeners，this.$emit触发
      this.$emit("current-change", currentPage);
    },
    // 但外面的页面发生变化时，里面的页面也要变化
    currentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
  methods: {
    updBtnLayout(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pager {
  display: flex;
  margin: 0 auto;
  button {
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    outline: none;
    border: none;
    background-color: #f4f4f4;
    color: rgb(97, 93, 93);
    font-size: 14px;
    font-weight: 700px;
    margin: 0 5px;
  }
}
button.active {
  color: #fff;
  background-color: rgb(61, 121, 211);
}
button.deactive {
  color: rgb(219, 219, 219);
}
</style>
