import axios from '../axios/api';
import { setUrlTitel } from '../untils/setTitle';

export default {
  namespaced: true,
  state: {
    isLogin: false,
    info: null,
    index: 0,
    name: '科比',
  },
  getters: {
    islogin(state) {
      if (state.info) {
        return true;
      }
      return false;
    },
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload;
    },
    setInfo(state, payload) {
      state.info = payload;
    },
  },
  actions: {
    // 用户登录所触发的action
    async loginAction({ commit }, payload) {
      // 发送登录请求
      const data = await axios.login(payload);
      if (typeof data.data === 'object') {
        // 改变登录状态
        commit('setLogin', true);
        commit('setInfo', data.data);
        // 将用户信息存储在本地
        localStorage.setItem('user', JSON.stringify({ id: data.data.id, loginId: data.data.loginId }));
        localStorage.setItem('login', true);
        return true;
      }
      return false;
    },
    // 用户退出时的action
    loginOut({ commit }) {
      commit('setLogin', false);
      commit('setInfo', null);
      localStorage.removeItem('user');
      localStorage.removeItem('login');
    },
    // 我是谁
    async whoami({ commit, state }) {
      // 从本地获取id值
      const { id } = JSON.parse(localStorage.getItem('user')) || {};
      const result = localStorage.getItem('login') || false;
      const data = await axios.whoami(id);
      commit('setLogin', result);
      if (data.data) {
        commit('setInfo', data.data);
        // 添加link标签
        const link = document.querySelector("link[rel='shortcut icon']");
        if (link) {
          return null;
        }
        const links = document.createElement('link');
        links.href = 'https://tx3.netease.com/favicon.ico';
        links.type = 'images/x-icon';
        links.rel = 'shortcut icon';
        document.querySelector('head').appendChild(links);
        setUrlTitel(state.name);
      }
      return null;
    },
  },
};
