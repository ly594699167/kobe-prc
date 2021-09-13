<template>
  <div class="carousel">
    <div class="img">
      <router-link
        v-for="(ele, i) in data"
        ref="carousel"
        :key="i"
        :to="{ path: '/news/' + ele.id }"
        :class="{ active: i == index }"
      >
        <img :src="ele.image" alt="" width="340px" height="340px" />
      </router-link>
    </div>
    <div class="index">
      <div class="title" v-if="data.length != 0">{{ data[index].title }}</div>
      <div class="indexes">
        <span
          v-for="(ele, i) in data.length"
          :key="i"
          :class="{ active: i === index }"
          @mouseenter="handClick(i)"
          @mouseleave="handLeave(i)"
          >{{ ele }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      index: 0,
      timer: null,
      title: '',
    };
  },
  mounted() {
    this.play();
  },
  methods: {
    handClick(i) {
      // 清理定时器
      clearInterval(this.timer);
      this.index = i;
    },
    handLeave(i) {
      this.play(i);
    },
    play() {
      const that = this;
      this.timer = setInterval(() => {
        that.index = (that.index + 1) % that.data.length;
      }, 1500);
    },
  },
};
</script>

<style lang='less'>
.carousel {
  width: 350px;
  height: 350px;
  background: #ccc;
  // margin-top: 10px;
  margin-left: 5px;
  box-sizing: border-box;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  // overflow: hidden;
  .img {
    width: 340px;
    height: 340px;
    position: relative;
    a {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: all 1s;
      &:nth-of-type(1) {
        z-index: 100;
      }
      &:nth-of-type(2) {
        z-index: 50;
      }
    }
    .active {
      opacity: 1;
    }
  }
  .index {
    position: absolute;
    left: 5px;
    bottom: 3px;
    background: black;
    opacity: 0.5;
    width: 340px;
    height: 96px;
    z-index: 100;
    color: white;
    .title {
      text-align: center;
      margin-top: 20px;
      opacity: 1;
    }
    .indexes {
      position: absolute;
      left: 0;
      bottom: 8px;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 15px;
        height: 15px;
        line-height: 15px;
        margin: 0 5px;
        font-size: 10px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          background: red;
        }
      }
    }
  }
}
</style>
