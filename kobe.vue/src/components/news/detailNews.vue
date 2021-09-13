<template>
  <div class="currency">
    <div class="detail-main"
    >
      <template v-if="data">
        <div class="title" v-if="data.title">{{ data.title }}</div>
        <p>{{ data.time }}</p>
        <div class="img">
          <img
            :src="
              data.image
                ? data.image
                : 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1064270120,3053478403&fm=26&gp=0.jpg'
            "
            alt=""
          />
        </div>
        <div class="data-container" v-html="htmlDate"></div>
      </template>
    </div>
    <div class="curRight">
      <RightNav />
    </div>
  </div>
</template>

<script>
import RightNav from '../Right/index.vue';

export default {
  components: {
    RightNav,
  },
  data() {
    return {
      data: null,
      htmlDate: '',
    };
  },
  async created() {
    // 根据id发送请求
    const data = await this.$axios.getNewsDate(this.$route.params.id);
    this.data = data.data;
    const dataArr = this.data.content.split('\n\n');
    dataArr.shift();
    this.htmlDate = dataArr.join('');
  },
};
</script>

<style lang='less'>
.detail-main {
  width: 580px;
  padding: 20px 0;
  background: #ccc;
  .title {
    width: 80%;
    text-align: center;
    font-size: 20px;
    position: relative;
    margin: 0 auto;
    padding: 4px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  p {
    text-align: center;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.3);
  }
  .img {
    margin: 0 auto;
    width: 520px;
    img {
      width: 100%;
    }
  }
  .data-container {
    width:520px;
    margin:0 auto;
    p {
      line-height: 24px;
      font-size: 14px;
      margin: 12px 0;
      color: #333;
    }
  }
}
.curRight {
  position: absolute;
  right: 0;
  top: 0;
  width: 360px;
  height: 620px;
}
</style>
