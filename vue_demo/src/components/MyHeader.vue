<template>
  <div class="header">
    <img src="../assets/musicLogo.png" alt="logo"/>

    <div class="search">
      <input type="text" @keyup.enter="Send" v-model="songs"/>
      <span class="iconfont icon-sousuo" @click="Send"></span>
    </div>
  </div>
</template>

<script>
import '../iconfont/iconfont.css'
import axios from "axios";
import "../json/MainLeft.json";

export default {
  name: "MyHeader",
  data() {
    return {
      msg: "爱如火",
      songs: "",
      list: [],
    };
  },
  methods: {
    Send() {
      axios.get(`https://autumnfish.cn/search?keywords=${this.songs}`).then(res => {
        // console.log(res.data.result.songs)
        this.list = res.data.result.songs;
        this.$bus.$emit('List', this.list)
      })
    }
  }
};
</script>

<style scoped lang="less">
.header {
  height: 60px;
  width: 100%;
  background: #7252a1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 214px;
    height: 33px;
    margin-left: 45px;
  }

  .search {
    margin-right: 30px;
    height: 36px;
    width: 300px;
    background: white;
    border-radius: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input[type="text"] {
      width: 250px;
      height: 30px;
      border: 0;
      padding-left: 10px;
      border-radius: 15px 0 0 15px;
      box-sizing: border-box;
    }

    .icon-sousuo {
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
