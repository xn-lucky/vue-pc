<template>
  <div class="listcontainer">
    <div class="listcontainer-middle">
      <img src="../images/home/banner2.jpg" alt="" />
      <!-- <img src="./images/home/banner1.jpg" alt="" />
        <img src="./images/home/banner1.jpg" alt="" />
        <img src="./images/home/banner1.jpg" alt="" /> -->
    </div>
    <div class="listcontainer-right">
      <div class="listcontainer-right-top">
        <h4 class="listcontainer-right-title">
          <em>尚品汇快报</em><span>更多 ></span>
        </h4>
        <ul class="listcontainer-right-list">
          <li><em>[特惠]</em>备战开学季 全民半价购数码</li>
          <li><em>[公告]</em>备战开学季 全民半价购数码</li>
          <li><em>[特惠]</em>备战开学季 全民半价购数码</li>
          <li><em>[公告]</em>备战开学季 全民半价购数码</li>
          <li><em>[特惠]</em>备战开学季 全民半价购数码</li>
        </ul>
      </div>
      <ul class="listcontainer-right-middle">
        <li class="listcontainer-right-middle-item"><i></i><span>话费</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>机票</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>电影票</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>游戏</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>彩票</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>加油站</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>酒店</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>火车票</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>众筹</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>理财</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>礼品卡</span></li>
        <li class="listcontainer-right-middle-item"><i></i><span>白条</span></li>
      </ul>
      <div class="listcontainer-right-bottom">
        <img src="../images/home/ad1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ListContainer",
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    }),
  },
  methods: {
    ...mapActions(["getBanners"]),
  },
  mounted() {
    // 发送请求banners
    this.getBanners();
  },
};
</script>

<style lang="less" scoped>
.listcontainer {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.listcontainer-middle {
  width: 730px;
  height: 454px;
  padding: 5px;
  float: left;
  margin-left: 210px;
}
.listcontainer-right {
  width: 250px;
  height: 460px;
  float: right;
}
.listcontainer-right-top {
  width: 248px;
  height: 175px;
  border: 1px solid #ddd;
  margin-top: 5px;
}
.listcontainer-right-title {
  width: 218px;
  height: 21px;
  line-height: 22px;
  padding: 5px 10px;
  margin: 5px 5px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.listcontainerm-right-title em {
  width: 70px;
  font-size: 14px;
}
.listcontainer-right-title span {
  font-size: 12px;
  font-weight: 400;
}
.listcontainer-right-list {
  width: 218px;
  height: 128px;
  padding: 5px 15px;
}
.listcontainer-right-list li {
  width: 100%;
  height: 26px;
  line-height: 26px;
}
.listcontainer-right-list em {
  font-weight: 700;
}

.listcontainer-right-middle{
  width: 250px;
  height: 195px;
  border-right: 1px solid #e4e4e4;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.listcontainer-right-middle-item{
  width: 61px;
  height: 64px;
  border-left: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
}
.listcontainer-right-middle-item i{
  width: 61px;
  height: 40px;
  background: url('../images/home/icons.png');
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(2) i{
  background-position: -64px 0px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(3) i{
  background-position: -126px 0px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(4) i{
  background-position: -190px 0px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(5) i{
  background-position: -2px -71px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(6) i{
  background-position: -63px -71px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(7) i{
  background-position: -126px -71px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(8) i{
 background-position: -193px -71px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(9) i{
     background-position: 0px -141px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(10) i{
  background-position: -65px -144px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(11) i{
 background-position: -126px -141px;
}
.listcontainer-right-middle .listcontainer-right-middle-item:nth-child(12) i{
 background-position: -193px -141px;
}
.listcontainer-right-middle-item span{
  width: 61px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.listcontainer-right-bottom{
  width: 250px;
  height: 75px;
  margin-top: 5px;
}
</style>
