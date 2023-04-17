<template>
  <div class="mainLeft">
    <h2>歌单</h2>
    <div class="ListBox">
      <ul class="mainLeftPlaylist">
        <li v-for="(item,index) in SongList" :key="index" @click="SendId(item.id,index)"><span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 用Props接收数据，然后v-for渲染到歌单里面
import axios from "axios";

export default {
  name: "MainLeft",
  props: ['SongList'],
  data() {
    return {
      msg: "丢了幸福的猪",
      Src: '',
      picSrc: '',
      x: true,
      // 获取评论列表
      commentList: [],
    };
  },
  methods: {
    SendId(id) {
      this.$bus.$emit('gp', this.x)
      axios.get(`https://autumnfish.cn/song/url?id=${id}`).then(res => {
        this.Src = res.data.data[0].url;
        // console.log(this.Src)
        this.$bus.$emit('Url', this.Src)
      })
      axios.get(`https://autumnfish.cn/song/detail?ids=${id}`).then(res => {
        // console.log(res.data.songs[0].al.picUrl)
        this.picSrc = res.data.songs[0].al.picUrl;
        this.$bus.$emit('picSrc', this.picSrc)
      })
      axios.get(`https://autumnfish.cn/comment/hot`, {
        params: {type: 0, id: id}
      }).then(res => {
        // 获取评论
        // console.log(res.data.hotComments[index].content)
        this.commentList = res.data.hotComments;
        // console.log(this.commentList)
        this.$bus.$emit('Com', this.commentList)
      })
    },
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

.mainLeft {
  width: 210px;
  height: 435px;
  overflow: hidden;

  h2 {
    font-size: 25px;
    color: white;
    font-weight: 500;
    margin: 20px;
    margin-bottom: 10px;
  }

  .ListBox {
    position: relative;
    width: 210px;
    height: 435px;
    overflow-y: scroll;
    padding-right: 16px;

    .mainLeftPlaylist {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      //height: 100%;

      li {
        list-style: none;
        font-size: 16px;
        color: #000000;
        margin: 10px 20px;
        cursor: pointer;
      }
    }
  }

}
</style>
