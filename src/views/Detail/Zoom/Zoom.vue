<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" @mousemove="move" ref="smallImg"></div>
    <div class="big">
      <img :src="bigImgUrl" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["imgUrl", "bigImgUrl"],
  methods: {
    move(e) {
      /**
         1- 获取鼠标的位置 e.clientX e.clientY（这是鼠标到窗口的距离），
         2- 获取小图的left和top的位置
       */
      const { mask, bigImg, smallImg } = this.$refs;
      const mouseToSImg = {
        x: e.clientX - smallImg.getBoundingClientRect().left,
        y: e.clientY - smallImg.getBoundingClientRect().top,
      };

      const maskTo = {
        x: mouseToSImg.x - mask.offsetWidth / 2,
        y: mouseToSImg.y - mask.offsetHeight / 2,
      };

      if (maskTo.x >= smallImg.clientWidth - mask.offsetWidth) {
        maskTo.x = smallImg.clientWidth - mask.offsetWidth;
      } else if (maskTo.x <= 0) {
        maskTo.x = 0;
      }

      if (maskTo.y >= smallImg.clientHeight - mask.offsetHeight) {
        maskTo.y = smallImg.clientHeight - mask.offsetHeight;
      } else if (maskTo.y <= 0) {
        maskTo.y = 0;
      }

      mask.style.left = maskTo.x + "px";
      mask.style.top = maskTo.y + "px";
      // 乘以2是因为小图与大图的比例是2
      bigImg.style.left = -2 * maskTo.x + "px";
      bigImg.style.top = -2 * maskTo.y + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
