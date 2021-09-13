import axios from '../axios/api';

export default {
  namespaced: true,
  state: {
    newIds: [],
    allNews: [],
  },
  mutations: {
    setNewIds(state, payload) {
      state.newIds = payload;
    },
    setAllNews(state, payload) {
      state.allNews = payload;
    },
  },
  actions: {
    async changeNewIds({ commit }, payload) {
      // 获取数
      const data = await axios.getNewsById(payload);
      commit('setNewIds', data.data);
    },
    // 分页获取数据
    async changeNewsByPage({ commit }, payload) {
      const data = await axios.getNewsByPage(payload);
      commit('setNewIds', data.data);
    },
    // 获取所有数据
    async changeall({ commit }) {
      const data = await axios.allNews();
      if (data.data) {
        commit('setAllNews', data.data);
      }
    },
  },

};
