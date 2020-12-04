<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="skuImage in skuImageList"
        :key="skuImage.id"
      >
        <img :src="skuImage.imgUrl" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  name: "ImageList",
  props: {
    skuImageList: {
      type: Array,
    },
  },
  // 不能再mounted中进行new Swiper 因为一上来skuImageList不一定会有数据
  watch: {
    skuImageList() {
      // 此时初始化的时候不会触发,当skuImageList改变触发，并且this.$nextTick是只触发一次的
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

        slidesPerView: 4,
        spaceBetween: 90,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;
}
.swiper-slide {
  width: 56px;
  height: 56px;

  img {
    border: 1px solid #ccc;
    padding: 2px;
    width: 50px;
    height: 50px;
    display: block;

    &.active {
      border: 2px solid #f60;
      padding: 1px;
    }

    &:hover {
      border: 2px solid #f60;
      padding: 1px;
    }
  }
}

.swiper-button-next {
  left: auto;
  right: 0;
}

.swiper-button-prev {
  left: 0;
  right: auto;
}

.swiper-button-next,
.swiper-button-prev {
  box-sizing: border-box;
  width: 12px;
  height: 56px;
  background: rgb(235, 235, 235);
  border: 1px solid rgb(204, 204, 204);
  top: 0;
  margin-top: 0;
  &::after {
    font-size: 12px;
  }
}
</style>
