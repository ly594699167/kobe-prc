/* eslint-disable no-param-reassign */
<template>
  <div class="turnpage">
    <span @click="handleClick(1)">首页</span>
    <span @click="handleClick(current - 1)">上一页</span>
    <span
      v-for="(ele, i) in getArr"
      @click="handleClick(ele)"
      :class="{ active: current == ele }"
      :key="i"
      >{{ ele }}</span
    >

    <span @click="handleClick(current + 1)">下一页</span>
    <span @click="handleClick(getMaxNum)">尾页</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      limit: 13,
      index: 1,
      pageNum: 5,
    };
  },

  props: ['length', 'current'],
  computed: {
    // 得到最小值
    getMin() {
      let min = this.current - Math.floor(this.pageNum / 2);
      if (min <= 1) {
        min = 1;
      }
      return min;
    },
    // 得到最大页码
    getMaxNum() {
      const maxAge = Math.ceil(this.length / this.limit);
      return maxAge;
    },
    // 得到最大值
    getMax() {
      let max = this.getMin + this.pageNum - 1;
      if (max >= this.getMaxNum) {
        max = this.getMaxNum;
      }
      return max;
    },
    getArr() {
      const arr = [];
      for (let i = this.getMin; i <= this.getMax; i += 1) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        // eslint-disable-next-line no-param-reassign
        newPage = 1;
      }
      if (newPage > this.getMaxNum) {
        // eslint-disable-next-line no-param-reassign
        newPage = this.getMaxNum;
      }
      if (newPage === this.current) {
        return;
      }
      // 抛出一个事件
      this.$emit('pageChange', newPage);
    },
  },
};
</script>

<style lang='less' scoped>
.turnpage {
  position: absolute;
  height: 20px;
  bottom: 100px;
  left: 50%;
  margin-left: -230px;
  width: 600px;
  span {
    display: inline-block;
    height: 20px;
    padding: 5px;
    border: 1px solid rgb(255, 0, 255);
    margin: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  .active {
    background: skyblue;
  }
}
</style>
