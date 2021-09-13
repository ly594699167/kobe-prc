<template>
  <div class="login">
    <div class="loginBox">
      <form>
        <div>
          <label for="userName"> 账号: </label>
          <input
            type="text"
            id="userName"
            autocomplete="off"
            placeholder="请输入账号"
            v-model="userInfo.loginId"
          />
        </div>
        <div>
          <label for="password"> 密码: </label>
          <input
            type="password"
            id="password"
            autocomplete="off"
            placeholder="请输入密码"
            v-model="userInfo.loginPwd"
          />
        </div>
      </form>
      <button @click='handLogin'>登录</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      userInfo: {
        loginId: '',
        loginPwd: '',
      },
    };
  },
  methods: {
    ...mapActions('User', ['loginAction']),
    ...mapActions(['changeLoading']),
    async handLogin() {
      // 将loading设置为true
      // this.changeLoading(true);
      const qs = this.$route.query;
      if (!this.userInfo.loginId || !this.userInfo.loginPwd) {
        alert('账号或密码错误');
      } else {
        const result = await this.loginAction(this.userInfo);
        // this.changeLoading(false)
        if (result) {
          if (qs.name) {
            this.$router.push({ name: qs.name });
          } else {
            this.$router.push('/index');
          }
        } else {
          alert('账号或密码错误');
        }
      }
    },
  },
};
</script>

<style lang='less'>
@import url("../../css/public.less");
</style>
