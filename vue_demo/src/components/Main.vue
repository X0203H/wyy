<template>
  <div class="main">
    <MyMainLeft :SongList="SongList"></MyMainLeft>
    <MyMainCenter :picId="picId"></MyMainCenter>
    <MyMainRight :ComList="ComList"></MyMainRight>
  </div>
</template>

<script>
export default {
  name: "MaiN",
  props: ['SongList', 'picId', 'ComList'],
  mounted() {
    this.$bus.$on('com',)
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 435px;
  background: linear-gradient(-45deg, #d49486, #5d75a8);
  display: flex;
  justify-content: space-between;
}
</style>
