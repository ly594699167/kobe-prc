<template>
<div class="container">
  <ul class="ulbox">
    <template>
      <li v-for="ele in getDate" :key="ele.id"
      @click="handClick(ele.id)"
      >
        <template v-if='ele.title'>
          <span>{{ ele.title }}</span>
          <span>{{ ele.time }}</span>
        </template>
      </li>
    </template>
  </ul>
  <TurnPage v-if='data' :length='pageDate' :current='getPage' @pageChange='pageChange'/>
</div>

</template>

<script>
import TurnPage from '../turnPage/index.vue';

export default {
  data() {
    return {
      current: 1,
    };
  },
  components: {
    TurnPage,
  },
  props: ['getDate', 'data'],
  methods: {
    handClick(ele) {
      this.$emit('handClick', ele);
    },
    async pageChange(i) {
      this.$store.dispatch('changeLoading', true);
      this.current = i;
      const page = i;
      const limit = 13;
      this.$router.push({ name: this.$route.name, query: { page: this.current, limit: 13 } });
      // 分页获取数据
      const date = await this.$axios.getNewsByPage({ page, limit });
      this.$store.dispatch('changeLoading', false);
      this.$emit('changePage', date.data.data);
    },
  },
  computed: {
    pageDate() {
      if (!this.data) return null;
      const datas = this.data.filter((data) => data.title);

      return datas.length;
    },
    getPage() { // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.current = this.$route.query.page || 1;
      this.pageChange(this.current);
      return +this.current;
    },
  },

};
</script>

<style lang='less' scoped>
.container{
  width:100%;
  height:100%;
  position:relative;
  ul {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  li {
    font-size: 14px;
    overflow: hidden;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-left:20px;
    position: relative;
    &::before{
      content: '';
      display: inline-flex;
      width:5px;
      height:5px;
      position: absolute;
      background: #000000;
      transform: rotate(45deg);
      left:10px;
       top:14px
    }
    &:hover{
      cursor: pointer;
      color:#f45f45;
    }
  }
}
}

</style>
