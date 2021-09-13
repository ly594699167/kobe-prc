<template>
  <div class='box'>
      <router-view></router-view>
  </div>
</template>

<style lang ='less' scoped>
    .main{
        width:950px;
        background:#ccc;
        border-radius: 5px;
        position: absolute;
        top:275px;
        background:black;
        padding: 10px 0px;
        box-sizing: border-box;
    }
    .box{
        width:100%;
        height:100%;
        position: relative;
    }
</style>
