<template>
<div class='img_box'>
   <ul class='imgbox'>
    <li v-for='(ele) in datas'
    :key = ele.id
    class='img_li'
    @click = handleClick(ele.id)
    >
    <div><img :src="ele.image?ele.image:'../../css/1.jpg'" alt=""></div>
    <p>{{ele.title}}</p>
    </li>
  </ul>
   <TurnPage :length='pageDate' :current='getPage' @pageChange='pageChange'/>
</div>

</template>

<script>
import TurnPage from '../turnPage/index.vue';

export default {
  components: {
    TurnPage,
  },
  props: ['data'],
  data() {
    return {
      current: 1,
      datas: [],
    };
  },
  mounted() {
    this.getDate();
  },
  computed: {
    pageDate() {
      if (this.data) {
        const datas = this.data.filter((item) => !item.title);
        return datas.length;
      }
      return null;
    },
    getPage() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.current = this.$route.query.page || 1;

      return this.current;
    },
  },
  methods: {
    pageChange(i) {
      this.current = i;
      this.$router.push({ name: this.$route.name, query: { page: this.current, limit: 12 } });
      // 发送请求
      this.getDate();
    },
    async getDate() {
      const page = this.$route.query.page || 1;
      const limit = this.$route.query.limit || 12;
      const data = await this.$axios.getNewsByPage({ page, limit });
      this.datas = data.data.data;
    },
    // 跳转到详情页
    handleClick(id) {
      this.$router.push({
        name: 'news',
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style lang='less' scoped>
  .img_box{
    width:100%;
    height:100%;
    position: relative;
     .imgbox{
    width:100%;
    height:80%;
    display: flex;
    flex-wrap: wrap;
    .img_li{
      width:120px;
      height:120px;
      margin:10px 10px;
      &:hover{
        cursor: pointer;
      }
      div{
        width:100%;
        height:100%;
        padding:3px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        img{
          width:100%;
          height:100%;
        }
      }
      p{
        width: 100%;
        height:100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      ;
      }
    }
  }
  }

</style>
