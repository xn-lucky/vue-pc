<template>
  <div class="like">
    <div class="like-title">
      <h3>猜你喜欢</h3>
      <a href="###">换一换</a>
    </div>
    <ul class="like-content">
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Like",
};
</script>

<style lang="less" scoped>
.like {
  width: 1200px;
  margin: 0 auto;
}
.like-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}
.like-title h3 {
  font-size: 20px;
}
.like-title a {
  width: 66px;
  height: 25px;
  font-size: 12px;
  background: url("../images/home/icons.png");
  background-position: 182px -104px;
  color: #666;
  &:hover {
    color: rgb(79, 76, 212);
    text-decoration: none;
  }
}
</style>
