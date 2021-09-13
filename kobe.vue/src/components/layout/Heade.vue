<template>
  <div class="headers">
    <div class="header">
      <div class="logo">
        <img v-for="(ele, i) in img" :key="i" :src="ele" alt="" />
      </div>
      <div class="login" v-if="!$store.state.User.isLogin">
        <router-link to="/login" class="loging">登录</router-link>
        <i>/</i>
        <router-link class="regiser" to="/regiser">注册</router-link>
      </div>
      <div class="user" v-else>
        <div>{{ "hi!兄弟欢迎归来" }}</div>
        <i>/</i>
        <div @click="loginOut">退出</div>
      </div>
      <div class="title">
        <template v-for="(ele, i) in title">
          <span :key="i">{{ ele }}</span>
          <i :key="Math.random() * 100 + i" v-if="i < title.length - 1">|</i>
        </template>
      </div>
    </div>
    <div class="nav"
    >
      <template
        v-for="(ele, i) in nav">
          <router-link
        class="nav-item"
        :key="ele.id"
        :to="{ name: navRoute[i] }"
        tag="div"
        >{{ ele.title }}
      </router-link>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: [
        'http://i3.sinaimg.cn/ty/kobe/kebologo.gif',
        'http://i2.sinaimg.cn/ty/kobe/kobe_mj_002_02.gif',
        'http://i3.sinaimg.cn/ty/kobe/kobe_mj_002_03.gif',
      ],
      title: ['竞技风暴', 'NBA', '新浪首页', 'English Version'],
      nav: [],
      navRoute: [
        'First',
        'Master',
        'TrueShop',
        'Video',
        'Image',
        'Masters',
        'Tx',
        'Fans',
        'Believer',
      ],
    };
  },
  async mounted() {
    // 发送请求
    const data = await this.$axios.getNav();
    this.nav = data.data;
  },

  methods: {
    loginOut() {
      this.$store.dispatch('User/loginOut');
    },
  },
  watch: {
    $route() {
      if (this.$route.meta.id) {
        this.$store.dispatch('News/changeNewIds', this.$route.meta.id);
      }
    },
  },
};
</script>
<style lang='less'>
.headers {
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: #958e8e;
  .header {
    position: relative;
    .logo {
      width: 240px;
      line-height: 45px;
      height: 33px;
      margin: 0 10px;
    }
    .login {
      position: absolute;
      top: 10px;
      left: 245px;
      display: flex;
      a {
        color: white;
        &:hover {
          color: #f45f45;
          cursor: pointer;
        }
        &.active {
          color: #f45f45;
        }
      }
      i {
        margin: 0 5px;
      }
    }
    .user {
      position: absolute;
      top: 10px;
      left: 245px;
      display: flex;
      color: white;
      div {
        margin: 0 5px;
        &:hover {
          color: #f45f45;
        }
      }
      div:hover {
        cursor: pointer;
      }
    }
    .title {
      position: absolute;
      right: 10px;
      top: 10px;
      span {
        margin: 0 10px;
      }
      span:nth-of-type(2) {
        color: #c7a402;
      }
      span:hover {
        color: rgb(128, 000, 128);
        cursor: pointer;
      }
      span:nth-of-type(4) {
        background: url(http://kobeimg.sinaimg.cn/big5/U338P770T1D13F134DT20091208135733.gif)
          no-repeat 100% 50%;
        padding-right: 30px;
      }
      i {
        font-style: normal;
      }
    }
  }
  .nav {
    height: 30px;
    bottom: 20px;
    position: absolute;
    display: flex;
    width: 100%;
    .nav-item {
      flex: 1;
      text-align: center;
      font-size: 18px;
      border: 1px solid #ccc;
      border-radius: 5px;
      position: relative;
    }
    .nav-item:hover {
      cursor: pointer;
    }
    .active::after {
      content: "";
      display: block;
      position: absolute;
      background: rgb(135, 206, 235);
      bottom: -3px;
      width: 100%;
      height: 2px;
    }
    div.active {
      background: slateblue;
      color: yellow;
    }
  }
}
</style>
