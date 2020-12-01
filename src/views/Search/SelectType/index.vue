<template>
  <div class="selecttype">
    <div class="selecttype-content">
      <div class="selecttype-logo">品牌</div>
      <ul class="logo-list">
        <li>123</li>
        <li>345</li>
        <li>567</li>
      </ul>
    </div>
    <div class="type-wrap">
      <div class="type-value">类型1</div>
      <ul class="type-list">
        <li>尘土1</li>
        <li>尘土2</li>
      </ul>
    </div>
    <div class="type-wrap">
      <div class="type-value">类型2</div>
      <ul class="type-list">
        <li>尘土1</li>
        <li>尘土2</li>
      </ul>
    </div>
    <div class="type-wrap">
      <div class="type-value">类型3</div>
      <ul class="type-list">
        <li>尘土1</li>
        <li>尘土2</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectTypes'
}
</script>

<style lang='less' scoped>
.selecttype {
  // height: 490px;
  margin-bottom: 5px;
}
.type-wrap,
.selecttype-content {
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
}
.selecttype-content {
  height: 123px;
  border-top: 1px solid #e4e4e4;
}
.selecttype-logo,
.type-value {
  width: 100px;
  height: 25px;
  line-height: 25px;
  background: #f1f1f1;
  text-align: right;
}
.selecttype-logo {
  padding: 10px 10px 87px 15px;
}
.logo-list,
.type-list {
  display: flex;
  width: 968px;
  height: 25px;
  line-height: 25px;
  padding: 10px 90px 0 15px;
}
.logo-list li {
  width: 105px;
  height: 25px;
  line-height: 25px;
  border: 1px solid #e4e4e4;
  margin: -1px -1px 0 0;
  text-align: center;
  color: #e1251b;
  font-weight: 700;
}
.type-value {
  padding: 10px 10px 0 15px;
}
</style>
