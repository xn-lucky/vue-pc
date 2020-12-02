<template>
  <div class="like">
    <div class="like-title">
      <h3>猜你喜欢</h3>
      <a href="###">换一换</a>
    </div>
    <ul class="like-content">
      <li>
        <img src="../images/home/like_01.png" alt="" />
        <div class="like-info">
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>￥116.00</h3>
        </div>
      </li>
      <li>
        <img src="../images/home/like_02.png" alt="" />
        <div class="like-info">
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>￥116.00</h3>
        </div>
      </li>
      <li>
        <img src="../images/home/like_03.png" alt="" />
        <div class="like-info">
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>￥116.00</h3>
        </div>
      </li>
      <li>
        <img src="../images/home/like_02.png" alt="" />
        <div class="like-info">
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>￥116.00</h3>
        </div>
      </li>
      <li>
        <img src="../images/home/like_03.png" alt="" />
        <div class="like-info">
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>￥116.00</h3>
        </div>
      </li>
      <li>
        <img src="../images/home/like_01.png" alt="" />
        <div class="like-info">
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>￥116.00</h3>
        </div>
      </li>
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

.like-content {
  width: 1178px;
  height: 250px;
  padding: 0 10px;
  border: 1px solid #e4e4e4;
  display: flex;
}
.like-content li {
  width: 196px;
  height: 250px;
  margin: 0 -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.like-content img {
  width: 142px;
  height: 142px;
  transition: all 400ms;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
}
.like-content p,
.like-content h3 {
  width: 142px;
  height: 30px;
}
.like-content p {
  margin: 5px 0;
}
.like-content h3 {
  margin: 9px 0;
}
.like-info {
  border-right: 1px solid #e4e4e4;
}
</style>
