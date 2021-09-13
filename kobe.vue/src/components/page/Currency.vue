<template>
  <div class="currency">
    <Lock
      :getDate="dataNew"
      :data='data'
      @handClick="handleClick"
      @changePage = 'changePage'
      v-if="$route.name == 'Master'"
    />
    <Lock
      :getDate="dataNew"
      :data='data'
       @changePage = 'changePage'
      @handClick="handleClick"
      v-else-if="$route.name == 'TrueShop'"
    />
    <Lock
      :getDate="dataNew"
      :data='data'
       @changePage = 'changePage'
      @handClick="handleClick"
      v-else-if="$route.name == 'Video'"
    />
    <Images
      :data='data'
    v-else-if="$route.name == 'Image'" />
    <Lock :getDate='dataNew'
    :data='data'
     @changePage = 'changePage'
     @handClick="handleClick"
     v-else-if="$route.name == 'Tx'" />
    <Lock
      :getDate="dataNew"
      :data='data'
      @handClick="handleClick"
        @changePage = 'changePage'
      v-else-if="$route.name == 'Fans'"
    />
    <Believer v-else-if="$route.name == 'Believer'" />
    <div class="curRight">
      <RightNav />
    </div>
  </div>
</template>

<script>
import Lock from '../nav/lockroom.vue';
import Images from '../nav/Image.vue';
import Believer from '../nav/Believer.vue';
import RightNav from '../Right/index.vue';
import Mixin from '../../untils/Mixin';

export default {
  components: {
    Lock,
    Images,
    Believer,
    RightNav,
  },
  mixins: [Mixin()],
  data() {
    return {
      length: '',
    };
  },
  methods: {
    handleClick(i) {
      this.$router.push({ name: 'news', params: { id: i } });
    },
    async getAllNews() {
      await this.$store.dispatch('News/changeall');
      return this.$store.state.News.allNews;
    },
    async getnewPage(page = 1, limit = 13) {
      await this.$store.dispatch('News/changeNewsByPage', { page, limit });
      return this.$store.state.News.newIds;
    },
    changePage(newPage) {
      this.dataNew = newPage;
    },
  },
};
</script>

<style lang='less' >
.currency {
  width: 580px;
  height: 620px;
  background: #ccc;
  .curRight {
    position: absolute;
    right: 0;
    top: 0;
    width: 360px;
    height: 620px;
  }
}
</style>
