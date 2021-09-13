<template>
  <div>
    <Carousel :data="getCarousel" />
    <div class="histroy">
      <h5>回顾青涩科比vs巅峰乔丹</h5>
      <p>
        <span>新浪体育</span>
        <span>时间</span>
        <span>2016-4-21</span>
      </p>
    </div>
    <div class="equipment">
      <div class="eqtop">
        <span>御用装备</span>
        <span>更多&gt;&gt;</span>
      </div>
      <div class="shoes">
        <div v-for="(ele, i) in imgdata" :key="i" class="item">
          <div class="shoesItem">
            <img :src="ele.url" alt="" />
          </div>
          <p class='title'>{{ ele.title }}</p>
        </div>
      </div>
    </div>
    <template>
      <News />
    </template>
    <template>
        <NavRight />
    </template>
  </div>
</template>

<script>
import Carousel from '../Carousel/index.vue';
import News from '../news/index.vue';
import NavRight from '../rightNav/index.vue';

export default {
  components: {
    Carousel,
    News,
    NavRight,
  },
  data() {
    return {
      data: [],
      imgdata: [
        {
          url:
            'http://i2.sinaimg.cn/ty/up/2009-03-30/U1657P6T64D60029F1323DT20090330152704.jpg',
          title: '制胜一击',
        },
        {
          url:
            'http://i0.sinaimg.cn/ty/up/2009-03-30/U1657P6T64D60030F1091DT20090330153428.jpg',
          title: '蒙拉丽莎的微笑',
        },
        {
          url:
            'http://i0.sinaimg.cn/ty/up/2009-03-30/U1657P6T64D60029F1091DT20090330152704.jpg',
          title: '全明星配色',
        },
      ],
    };
  },
  async mounted() {
    // 得到新闻信息
    const data = await this.$axios.allNews();
    this.data = data.data;
  },
  computed: {
    getCarousel() {
      return this.data.slice(0, 3);
    },
  },
};
</script>

<style lang='less' scoped>
.histroy {
  width: 350px;
  margin: 5px;
  background-image:linear-gradient(to bottom,#ccc,#000000);
  padding: 10px 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: white;
  text-align: center;
  h5:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  span {
    font-size: 8px;
    color: #ccc;
    opacity: 0.5;
  }
}
.equipment {
  width: 350px;
  height: 400px;
  margin: 0 5px;
  opacity: 0.8;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-sizing: border-box;
  border:1px solid #ccc;
  box-sizing: border-box;
  overflow: hidden;
  color: white;
  .eqtop {
    box-sizing: border-box;
    height: 45px;
    border: 1px solid#ccc;
    opacity: 0.8;
    overflow: hidden;
    line-height: 45px;
    position: relative;
    background-image: linear-gradient(to bottom, #ccc, #000000);
    span:nth-of-type(1) {
      font-size: 14px;
      color: white;
      font-weight: bold;
      margin-left: 10px;
      &:hover {
        cursor: default;
      }
    }
    span:nth-of-type(2) {
      font-size: 8px;
      position: absolute;
      right: 10px;
      &:hover {
        color: #f45f45;
        cursor: pointer;
      }
    }
  }
  .shoes {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    box-sizing: border-box;
    .item:hover {
      cursor: pointer;
    }
     .shoesItem {
        width: 94px;
        height: 94px;
        border: 1px solid #ccc;
        text-align: center;
        padding-top: 2px;
        box-sizing: border-box;
      }
      .title{
        font-size: 8px;
        text-align: center;
        color:#ccc;
        &:hover{
          color:yellow;
        }
      }
  }
}
</style>
