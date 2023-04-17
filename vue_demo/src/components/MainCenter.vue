<template>
  <div class="mainCenter">
    <img src="../assets/gp.png" alt="" class="gp" style="animation: none" v-if="!x">
    <img src="../assets/gp.png" alt="" class="gp" ref="pic" v-if="x">
    <img src="../assets/gz.png" alt="" class="gz">
    <div class="pic_pos">
      <img :src="picId" alt="" class="pic" v-if="x">
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCenter",
  props: ['picId'],
  data() {
    return {
      x: false
    }
  },
  mounted() {
    this.$bus.$on('gp', x => {
      this.x = x
    })
  },
};
</script>

<style scoped lang="less">

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.mainCenter {
  position: relative;
  width: 380px;
  height: 100%;
  border-left: 0.1px solid #666666;
  border-right: 0.1px solid #666666;

  .gp {
    display: block;
    margin: 0 auto;
    margin-top: 90px;
    //transform: rotate(90deg);
    animation: rot 30s infinite;
  }

  .gz {
    position: absolute;
    top: -3%;
    left: 50%;
    transform: rotate(-20deg);
    transform-origin: top left;
  }

  .pic_pos {
    position: absolute;
    top: 32%;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    //background-color: skyblue;
    border-radius: 50%;
    z-index: 999;

    .pic {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      animation: rot 30s infinite;
    }
  }
}
</style>
