<template>
  <div class="navNews">
    <div class="news-header">
      <h3>第二名是头号输家</h3>
      <i>[</i>
      <span v-for="(ele, i) in data" :key="i">{{ ele }}</span>
      <i>]</i>
    </div>
    <NewsList :data="news" :img="img[0]" :title="title[0]" />
    <NewsList :data="getFont" :img="img[1]" :title="title[1]" />
    <NewsList :data="getVideo" :img="img[2]" :title="title[2]" />
  </div>
</template>

<script>
import NewsList from './NewsList.vue';

export default {
  components: {
    NewsList,
  },
  data() {
    return {
      data: ['科比微博', ' 湖人微博', '湖人总冠军', 'KD:科比历史第二'],
      news: [],
      img: ['http://i2.sinaimg.cn/ty/kobe/0319/kobe_mj_title_03.jpg', 'http://i0.sinaimg.cn/ty/kobe/0319/kobe_mj_title_01.jpg', 'http://i1.sinaimg.cn/ty/kobe/0319/kobe_mj_title_02.jpg'],
      title: ['手机上新浪看望', '手机订阅,博客更新', '视频库'],
    };
  },
  async mounted() {
    const data = await this.$axios.allNews();
    this.news = data.data;
  },
  computed: {
    getFont() {
      return this.news.slice(21, 27);
    },
    getVideo() {
      return this.news.slice(28, 35);
    },
  },
};
</script>

<style lang='less' scoped>
.navNews {
  width: 400px;
  background: #000000;
  position: absolute;
  left: 360px;
  top: 0;
  color: white;
  box-sizing: border-box;
  .news-header {
    width: 100%;
    height: 93px;
    padding: 10px;
    text-align: center;
    font-family: "宋体";
    box-sizing: border-box;
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 200px;
      height: 1px;
      background: #ccc;
      opacity: 0.2;
      position: absolute;
      bottom: 0;
      left: 80px;
    }
    h3 {
      margin-bottom: 15px;
      &:hover {
        cursor: pointer;
        color: yellow;
        text-decoration: underline;
      }
    }
    i {
      font-style: normal;
      font-size: 10px;
    }
    span {
      font-size: 10px;
      padding: 3px;
      color: #ccc;
      &:hover {
        cursor: pointer;
        color: yellow;
        text-decoration: underline;
      }
    }
  }
}
</style>
