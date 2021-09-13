<template>
  <div class="home"  v-loading='loading'>
    <div class="top">
         <slot name='top'></slot>
  </div>
    <div class="main">
      <slot name='main'></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['loading']),
  },
};
</script>

<style  lang='less' >
  .home {
    position: relative;
     .loading{
        position: absolute;
        left:0;
        top:0;
        bottom:0;
        right: 0;
        background:#ccc;
        opacity: 0.5;
        color:#000000;
        z-index:1000;
        font-size: 58px;
        .center{
          position: absolute;
          width:250px;
          height:100px;
          left:50%;
          top:50%;
          transform: translate(-50%,-50%);
        }
      }
    .top {
      height:270px;
      position: relative;
    }
  }
</style>
