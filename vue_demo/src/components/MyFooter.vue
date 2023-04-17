<template>
  <div class="play">
    <audio :src="SrcId" controls autoplay @playing="Play" @pause="Pau"></audio>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {
      PicAin: '',
    }
  },
  // app传过来的id
  props: ['SrcId'],

  methods: {
    Pau() {
      this.$bus.$emit('gp', false)
    },
    Play() {
      this.$bus.$emit('gp', true)
    }
  }
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

.play {
  height: 54px;
  width: 100%;
  background: #f1f3f4;

  audio {
    width: 100%;
    height: 100%;
    border-radius: 0 !important;
  }
}
</style>
