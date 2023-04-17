<template>
  <div id="app">
    <MyHeader></MyHeader>
    <Main :SongList="SongList" :picId="picId" :ComList="ComList"></Main>
    <MyFooter :SrcId="SrcId"></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import Main from "./components/Main";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  data() {
    return {
      // 歌曲列表
      SongList: [],
      // 播放地址
      SrcId: '',
      //   图片专辑
      picId: '',
      // 评论列表
      ComList: [],
    }
  },
  components: {
    MyHeader,
    Main,
    MyFooter,
  },
  created() {
    this.$bus.$on('List', (data) => {
      // console.log('App收到了数据', data)
      this.SongList = data;
      console.log('App收到了头部传过来的列表', this.SongList)
    })
    this.$bus.$on('Url', src => {
      console.log('App收到了传过来的url地址', src)
      this.SrcId = src;
    })
    this.$bus.$on('picSrc', pic => {
      console.log('App收到了传过来图片专辑', pic)
      this.picId = pic
    })
    this.$bus.$on('Com', value => {
      // console.log('App接受到了传过来评论列表', value)
      this.ComList = value
      // console.log(this.ComList)
    })
  }
};
</script>

<style lang="less" scoped>
#app {
  width: 800px;
  margin: 0 auto;
}
</style>
