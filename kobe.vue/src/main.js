import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/index.less';
import axios from './axios/api';
import loading from './directive/directive';

// 判定是否登录过了

store.dispatch('User/whoami');

Vue.prototype.$axios = axios;
Vue.directive('loading', loading);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};
