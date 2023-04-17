<template>
  <div class="right">
    <ul class="mainRight">
      <li v-for="(i,index) in ComList" :key="index">
        <div class="img"><img :src="i.user.avatarUrl" alt=""></div>
        <div class="text">{{ i.content }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainRight",
  props: ['ComList'],
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

.right {
  width: 210px;
  height: 435px;

  overflow: hidden;
}

.mainRight {
  overflow: hidden;
  overflow-y: scroll;
  width: 210px;
  height: 100%;
  padding-right: 16px;

  li {
    list-style: none;
    width: 100%;

    img {
      margin: 20px 20px 0 20px;
      width: 36px;
      height: 36px;
    }

    .text {
      margin: 10px 20px 20px;
      height: auto;
      width: 100%;
      font-size: 14px;
    }
  }
}
</style>
