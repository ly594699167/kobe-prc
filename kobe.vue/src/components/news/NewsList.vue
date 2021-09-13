<template>
  <div class="newsList">
      <div class="news-header">
         <img v-if='img' :src="img" alt="">
         <span class='title'>{{title}}</span>
         <span v-if='img' class='more'>更多&gt;&gt;</span>
      </div>
      <div class="news-List">
          <ul>
              <li v-for='(ele,i) in getDate'
              :key ='i'
              >{{ele.title}}></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'img', 'title'],
  computed: {
    getDate() {
      return this.data.slice(0, 15);
    },
  },
};
</script>

<style lang='less' scoped>
    .newsList{
        width:400px;
        padding: 10px;
        box-sizing: border-box;
        .news-header{
            height: 35px;
            position: relative;
            .title{
                position: absolute;
                right: 70px;
                top:5px;
                font-size:13px;
                font-weight: bold;
                color:#ccd;
                &:hover{
                    color:yellow;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            .more{
                position: absolute;
                right:0;
                line-height: 35px;
                font-size:6px;
                color:#ccc;
                &:hover{
                     color:yellow;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
        .news-List{
            color:#ccc;
            opacity: 0.8;
            li{
                font-size: 14px;
                position: relative;
                padding-left:14px;
                line-height: 20px;
                &:hover{
                     color:yellow;
                    text-decoration: underline;
                    cursor: pointer;
                }
            &::before{
                content: '';
                display: inline-block;
                width:5px;
                height:5px;
                background:#ccc;
                position: absolute;
                top:10px;
                left:5px;
            }
            }
        }
    }
</style>
