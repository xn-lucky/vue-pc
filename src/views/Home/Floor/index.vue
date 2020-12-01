<template>
  <div class="floor">
    <div class="floor-title">
      <h3>{{ floor.name }}</h3>
      <ul class="floor-title-list">
        <li v-for="(nav, index) in floor.navList" :key="index">
          <a class="link" :href="nav.url">{{ nav.text }}</a>
        </li>
      </ul>
    </div>
    <div class="floor-content">
      <div class="floor-content-left">
        <ul class="floor-content-list">
          <li v-for="(keyword, index) in floor.keywords" :key="index">
            {{ keyword }}
          </li>
        </ul>
        <img :src="floor.imgUrl" alt="" />
      </div>
      <!-- 轮播图 -->
      <div class="floor-content-carousel">
        <Carousel :carouselList="floor.carouselList" />
      </div>
      <div class="floor-content-img">
        <img :src="floor.recommendList[0]" alt="" />
        <img :src="floor.recommendList[1]" alt="" />
      </div>
      <img :src="floor.bigImg" alt="" />
      <div class="floor-content-img">
        <img :src="floor.recommendList[2]" alt="" />
        <img :src="floor.recommendList[3]" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@comps/Carousel";

export default {
  name: "Floor",
  props: {
    floor: {
      type: Object,
    },
  },
  components: {
    Carousel,
  },
};
</script>

<style lang="less" scoped>
.floor {
  width: 1200px;
  margin: 0 auto;
}
.floor-title {
  // height: 50px;
  // line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.floor-title h3 {
  font-size: 20px;
  margin: 9px 0;
}
.floor-title-list {
  display: flex;
  margin-top: 10px;
}

.link {
  color: #e1251b;
  &::after {
    content: "|";
    padding: 0 10px;
  }
}

.floor-content {
  height: 360px;
  border-top: 2px solid #c81623;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
}
.floor-content-left {
  width: 209px;
}
.floor-content-list {
  height: 79px;
  padding: 15px 0;
  display: flex;
  flex-wrap: wrap;
}
.floor-content-list li {
  width: 84px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
}
.floor-content-img {
  display: flex;
  flex-wrap: wrap;
}
.floor-content-carousel {
  width: 329px;
  height: 360px;
}
</style>
