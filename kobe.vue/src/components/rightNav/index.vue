<template>
  <div class="rightNav">
    <div class="navImg">
      <img :src="imgData[0]" alt="" />
    </div>
    <div class="Navtitle">
      <h5>信科比</h5>
      <div class="imgTitle">
        <img :src="imgData[1]" alt="" />
        <p>比赛总有输赢的,为什么不能是我赢呢？</p>
      </div>
    </div>
    <div class="navmaster">
      <h5>宗师谱</h5>
      <div class="imgbox">
        <div class="box-img">
          <img src="http://i0.sinaimg.cn/ty/kobe/kobe_mj_024.jpg" alt="" />
        </div>
        <p>
          科比·比恩·布莱恩特（Kobe Bean
          Bryant，1978年8月23日—2020年1月26日),绰号黑曼巴。司职得分后卫/小前锋（锋卫摇摆人）
        </p>
      </div>
      <table border="0" cellpadding="1" cellspacing="1" bgcolor="#dodod">
        <thead>
          <tr >
            <td colspan="2" allign='center'>
              <span v-for="(ele, i) in title" :key="i">{{ ele }}</span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ele, i) in data" :key="i">
            <td align="center">{{ ele.title }}</td>
            <td align="center">{{ ele.data }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="navImg">
      <img :src="imgData[1]" alt="" />
    </div>
    <div class="navImg imgBottm">
      <img :src="imgData[0]" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgData: [
        'http://i2.sinaimg.cn/ty/z/kb.jpg',
        'http://i1.sinaimg.cn/ty/2010/0104/201014172953.jpg',
      ],
      title: ['14日', '主', '101-96', '爵士', '60分'],
      data: [
        { title: '得分', data: '17.6' },
        { title: '篮板', data: '3.7' },
        { title: '助攻', data: '2.8' },
        { title: '抢断', data: 0.9 },
        { title: '投篮(命中率)', data: '35.8' },
        { title: '罚球(命中率)', data: '90.5' },
      ],
    };
  },
};
</script>

<style lang='less' scoped>
.rightNav {
  width: 190px;
  height: 820px;
  background: #ccc;
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 5px;
  .navImg {
    height: 130px;
    border: 1px dashed #ccc;
    border-radius: 5px;
    padding: 1px;
    padding-top: 10px;
    margin: 6px;
    box-sizing: border-box;
    img {
      width: 174px;
      height: 110px;
    }
    &:nth-of-type(1) {
      margin-top: 10px;
    }
  }
  .imgBottm{
        position: absolute;
        bottom:0;
        left:0;
  }
  .Navtitle {
    width: 180px;
    color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    right: 8px;
    h5 {
      padding: 5px;
      height: 30px;
      background: linear-gradient(to bottom, #fff, #000000);
      line-height: 30px;
    }
    .imgTitle {
      background: #ccc;
      padding: 5px;
      p {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .navmaster {
    width: 180px;
    height: 400px;
    position: absolute;
    top: 300px;
    right: 8px;
    h5 {
      padding: 5px;
      height: 30px;
      background: linear-gradient(to bottom, #fff, #000000);
      line-height: 30px;
    }
    .imgbox {
      padding: 5px;
      .box-img {
        width: 110px;
        height: 100px;
        float: left;
        border: 1px solid black;
        box-sizing: border-box;
        margin-right: 2px;
        padding: 3px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: 12px;
      }
    }
    table {
      width: 100%;
      text-align: center;
      thead {
        td {
          width: 178px;
          span {
            font-size: 10px;
            margin: 2px;
            &:nth-of-type(3) {
              color: black;
              opacity: 0.5;
            }
          }
        }
      }

      tbody {
        td {
          font-weight: normal;
          color: #2c2c2c;
          font-family: Tahoma;
          height: 24px;
          background-color: #dadada;
          background-image: url(http://i3.sinaimg.cn/ty/kobe/0319/kobe_mj_bg_01.jpg);
          background-repeat: repeat-x;
          background-position: 100% 100%;
          padding-left: 1px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
