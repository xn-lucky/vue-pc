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
      <div class="listcontainer-right-middle"></div>
      <div class="listcontainer-right-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContainer",
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
</style>
