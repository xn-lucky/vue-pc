<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="cart in cartList" :key="cart.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="+cart.isChecked"
              @click="handleCheck(cart.skuId, $event)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">
              {{ cart.skuName }}
            </div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <button
              href="javascript:void(0)"
              class="mins"
              @click="updShopCart(cart.skuId, -1, cart.skuNum)"
              :disabled="cart.skuNum === 1"
            >
              <!-- <button
              href="javascript:void(0)"
              class="mins"
              @click="updShopCart(cart.skuId, -1)"
              :disabled="cart.skuNum === 1"
            > -->
              -
            </button>
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
              @blur="updateBlur(cart.skuId, cart.skuNum, $event)"
              @input="updateInput"
            />
            <!-- <button
              href="javascript:void(0)"
              class="plus"
              @click="updShopCart(cart.skuId, 1)"
              :disabled="cart.skuNum === 10"
            > -->
            <button
              href="javascript:void(0)"
              class="plus"
              @click="updShopCart(cart.skuId, 1, cart.skuNum)"
              :disabled="cart.skuNum >= 10"
            >
              +
            </button>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click.prevent="deleteShop(cart.skuId)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="allIsCheck === cartList.length"
          @click="updChecked(cartList, $event)"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ allNum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ allPrice }}</i>
        </div>
        <div class="sumbtn">
          <button class="sum-btn" target="_blank" @click="trade">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ShopCart",
  computed: {
    ...mapState({
      cartList: (state) => state.shopcart.cartList,
    }),
    allPrice() {
      return this.cartList
        .filter((cart) => +cart.isChecked)
        .reduce((p, c) => p + c.skuPrice * c.skuNum, 0);
    },
    allNum() {
      return this.cartList
        .filter((cart) => +cart.isChecked)
        .reduce((p, c) => p + c.skuNum, 0);
    },
    allIsCheck() {
      return this.cartList.filter((cart) => +cart.isChecked).length;
    },
  },
  methods: {
    ...mapActions(["addShopCart", "cartChecked", "allCartChecked", "delShop"]),
    changeInput(e) {
      console.log(e.target.value);
    },
    updShopCart(skuId, skuNum, count) {
      // 大于1说明是增加
      if (skuNum > 1) {
        if (count >= 10) {
          // 说明已经到了最大库存了，不发请求
          alert("超出库存了");
          return;
        }
      }
      // 说明是减少
      if (skuNum < 1) {
        if (count <= 1) {
          // 说明已经是最少了，不能在减少了
          alert("确认shanchu?");
          return;
        }
      }
      // 点击商品的加减按钮
      this.addShopCart({ skuId, skuNum });
    },
    updateBlur(skuId, skuNum, e) {
      console.log(skuId, skuNum, e.target.value);
      // 直接对输入框中的值进行改变
      if (+e.target.value === skuNum) return; // 说明没有改变
      // 发送请求
      this.addShopCart({ skuId, skuNum: e.target.value - skuNum });
    },
    updateInput(e) {
      // 检验输入时的格式
      let skuNum = +e.target.value.replace(/\D+/g, "");

      if (skuNum < 1) {
        skuNum = 1;
      }
      // 假设库存就10个
      if (skuNum > 10) {
        skuNum = 10;
      }
      // 给表单赋值，显示在页面上
      e.target.value = skuNum;
    },
    async handleCheck(skuId, e) {
      // 获取勾选框是否勾选e.target.checked
      // console.log(e.target.checked);
      await this.cartChecked({
        skuId,
        isChecked: e.target.checked ? "1" : "0",
      });
    },
    // 点击全选按钮 页面上数据的勾选情况与之一致
    updChecked(cartList, e) {
      // 获取当前的点击的checked
      console.log(e.target.checked);
      // 发送请求 改变每个数据的
      this.allCartChecked({
        cartList,
        isChecked: e.target.checked ? "1" : "0",
      });
    },
    // 点击结算
    trade() {
      // 结算跳转到trade页面(订单交易页面)
      // 这时候应该要将你在购物车勾选的数据当做参数传过去，但是有接口可以获取，所以不用传
      // 1- 过滤数据 看是否有勾选的数据
      // 还需要考虑的点是结算需要登录,还需要判断是否有登陆(判断是否有token),若有很多个组件都需要判断是否有登陆就比较麻烦，代码冗余,所以这边通过路由守卫来做，组件中只需要直接跳转即可
      const checkedCart = this.cartList.filter((cart) => +cart.isChecked);
      if (checkedCart.length > 0) {
        // 说明有勾选数据
        this.$router.push("/trade");
      } else {
        // 一个弹框,提示需要勾选结算的数据
        this.$message("请勾选需要结算的数据~");
      }
    },
    // 点击删除
    deleteShop(skuId) {
      // 发送删除购物车请求
      this.delShop(skuId)
    }
  },
  mounted() {
    // 发送请求，请求购物车数据
    this.$store.dispatch("getCartList");
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 20%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2,
      .cart-th6 {
        width: 15%;
      }

      .cart-th3,
      .cart-th4 {
        width: 17%;
      }
      .cart-th5 {
        width: 16%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 5%;
        }

        .cart-list-con2 {
          width: 30%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        // .cart-list-con3 {
        //   width: 20.8333%;

        //   .item-txt {
        //     text-align: center;
        //   }
        // }

        .cart-list-con4 {
          width: 15%;
        }

        .cart-list-con5 {
          width: 20%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 15%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 15%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        button {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
          border: none;
          outline: none;
        }
      }
    }
  }
}
</style>
