import api from './index';

// 获取导航栏信息
function getNav() {
  return api.get('/nav/info');
}
// 用户注册
function regiser({ loginId, loginPwd }) {
  return api.post('/admin/regiser', {
    loginId,
    loginPwd,
  });
}
// 用户登录api
function login({ loginId, loginPwd }) {
  return api.get('/admin/login', {
    params: {
      loginId,
      loginPwd,
    },
  });
}
// 判断用户是谁
function whoami(id) {
  return api.get(`/admin/whoami/${id}`);
}
// 获取所有的新闻信息
function allNews() {
  return api.get('/news/all');
}
// 获取宗师信息
function getMaseter() {
  return api.get('/master/info');
}
// 根据导航id获取新闻
function getNewsById(id) {
  return api.get(`/news/nav/detail/${id}`);
}
// 分页获取信息
function getNewsByPage({ page = 1, limit = 13 }) {
  return api.get('/news/page', {
    params: {
      page,
      limit,
    },
  });
}
// 通过新闻id获取新闻详细信息
function getNewsDate(id) {
  return api.get(`/news/${id}`);
}
export default {
  getNav,
  getNewsByPage,
  regiser,
  login,
  whoami,
  allNews,
  getMaseter,
  getNewsById,
  getNewsDate,
};
