<template>
  <div class="todayrecommend-container">
      <div class="todayrecommend-timer">
          <img src="../images/home/clock.png" alt="">
          <h3>今日推荐</h3>
      </div>
       <ul class="todayrecommend-list">
           <li><img src="../images/home/today01.png" alt=""></li>
           <li><img src="../images/home/today02.png" alt=""></li>
           <li><img src="../images/home/today03.png" alt=""></li>
           <li><img src="../images/home/today04.png" alt=""></li>
       </ul>
  </div>
</template>

<script>
export default {
  name: "TodayRecommend",
}
</script>

<style lang='less' scoped>
.todayrecommend-container{
    width: 1200px;
    margin: 10px auto;
    display: flex;
}
.todayrecommend-timer{
    width: 200px;
    height: 109px;
    padding: 30px 0;
    background-color: #5c5251;
    color:#fff;
    text-align: center;
}
.todayrecommend-timer img{
    width: 57px;
    height: 57px;
}
.todayrecommend-timer h3{
    margin: 9px 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
}
.todayrecommend-list{
    display: flex;
}
.todayrecommend-list li{
    width: 250px;
    height: 169px;
}
.todayrecommend-list img{
    width: 100%;
    height: 100%;
    transition: all 400ms;
    &:hover{
        opacity: 0.8
    }
}
</style>
