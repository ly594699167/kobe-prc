import Vue from 'vue';
import Vuex from 'vuex';
import User from './userStor';
import News from './news';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    News,
  },
  state: {
    loading: false,
  },
  mutations: {
    // 改变加载状态
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    changeLoading({ commit }, payload) {
      commit('setLoading', payload);
    },
  },
});
