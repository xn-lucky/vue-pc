<template>
  <div class="swiper-container" ref="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- 图片 -->
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <!-- <img :src="carousel.imgUrl" /> -->
        <img v-lazy="carousel.imgUrl" />
      </div>
    </div>
    <!-- 小点点 -->
    <div class="swiper-pagination"></div>

    <!-- 分页器 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
/*
  因为轮播图有其他地方用到,所以封装成组件，进行复用
*/
// 使用swiper实现轮播图,swiper6中的swiper只包含了核心模块，需要其他的要引入
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Carousel",
  // 自己写的组件props尽量严格一些
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    carouselList() {
      // 此时初始化的时候不会触发,当carouselList改变触发，并且this.$nextTick是只触发一次的
      // this.$nextTick是在元素DOM更新后调用其回调函数
      this.$nextTick(() => {
        this.newSwiper();
      });
    },
  },
  methods: {
    newSwiper() {
      // new Swiper(".swiper-container", {
      new Swiper(this.$refs.swiper, {
        loop: true,
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // 自动轮播
        autoplay: {
          delay: 2000, // 间隔时间
          disableOnInteraction: false, // 当用户点击下一页之后，轮播继续
        },
      });
    },
  },
  mounted() {
    // new swiper的代码不能写在mounted中,因为Carousel组件是嵌入到其他组件的内部的,并且轮播图是要有数据才可以。
    // Carousel中 的mounted执行完只是确定了DOM元素渲染完成，并不代表有数据，所以要监听遍历轮播数据的字段是否有值,所以在watch中完成
    // 有多个地方使用轮播图，有些是一上来就有数据的，所以在mounted中就创建swiper
    if (!this.carouselList.length) return;
    this.newSwiper();
  },
};
</script>

<style lang="less" scoped>
</style>
