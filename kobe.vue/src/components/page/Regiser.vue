<template>
  <div class="login">
    <div class="loginBox">
      <form action="">
        <div>
          <label for="userName"> 账号: </label>
          <input
            type="text"
            id="userName"
            autocomplete="off"
            placeholder="请输入账号"
            v-model="objInfo.loginId"
          />
        </div>
        <div>
          <label for="password"> 密码: </label>
          <input
            type="password"
            id="password"
            autocomplete="off"
            placeholder="请输入密码"
            v-model="objInfo.loginPwd"
          />
        </div>
      </form>
      <button @click="handRegiser">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objInfo: {
        loginId: '',
        loginPwd: '',
      },
    };
  },
  methods: {
    async handRegiser() {
      // 账号和密码不能为空
      if (!this.objInfo.loginId || !this.objInfo.loginPwd) {
        alert('账号或者密码不能为空');
      } else {
        // 账号有值发送注册请求
        const data = await this.$axios.regiser(this.objInfo);
        if (data.data) {
          // 跳转到登录页面
          this.$router.push('/login');
        }
      }
    },
  },
};
</script>

<style lang='less'>
@import url("../../css/public.less");
</style>
