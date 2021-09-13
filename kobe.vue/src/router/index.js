import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import First from '../components/page/First.vue';

import { setRouteTitle } from '../untils/setTitle';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'First',
    component: First,
    meta: {
      name: '首页',
    },
  },
  {
    path: '/lockroom',
    name: 'Master',
    meta: {
      id: 2,
      name: '访宗师',
    },
    component: () => import('../components/page/Currency.vue'),
  },
  {
    path: '/nbakobebryant',
    name: 'TrueShop',
    component: () => import('../components/page/Currency.vue'),
    meta: {
      id: 2,
      name: '博真迹',
    },
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../components/page/Currency.vue'),
    meta: {
      id: 2,
      name: '视频库',
    },
  },
  {
    path: '/photo',
    name: 'Image',
    meta: {
      login: true,
      id: 5,
      name: '图片库',
    },
    component: () => import('../components/page/Currency.vue'),
  },
  {
    path: '/master',
    name: 'Masters',
    meta: {
      login: true,
      name: '宗师谱',
    },
    component: () => import('../components/page/Master.vue'),
  },
  {
    path: '/news',
    name: 'Tx',
    meta: {
      login: true,
      id: 7,
      name: '晓天下',
    },
    component: () => import('../components/page/Currency.vue'),
  },
  {
    path: '/news/:id',
    name: 'news',
    meata: {
      login: true,
      name: '晓天下',
    },
    component: () => import('../components/news/detailNews.vue'),
  },
  {
    path: '/fans',
    name: 'Fans',
    meta: {
      name: '粉丝阔论',
    },
    component: () => import('../components/page/Currency.vue'),
  },
  {
    path: '/believer',
    name: 'Believer',
    meta: {
      name: '信徒殿堂',
    },
    component: () => import('../components/page/Currency.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登录',
    },
    component: () => import('../components/page/Login.vue'),
  },
  {
    path: '/regiser',
    name: 'Regiser',
    meta: {
      name: '注册',
    },
    component: () => import('../components/page/Regiser.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
});
router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    const obj = JSON.parse(localStorage.getItem('user')) || {};
    const result = localStorage.getItem('login') || false;
    if (obj && result) {
      // 自动登录
      next();
    } else {
      next({ path: '/login', query: { name: to.name } });
    }
  } else {
    next();
  }
});
router.afterEach((to) => {
  if (to.meta.name) {
    setRouteTitle(to.meta.name);
  }
});
export default router;
