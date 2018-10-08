import Vue from 'vue';

import VueRouter from 'vue-router';
import Dashboard from '../view/dashboard/index.vue';
import ArticleDetail from '../view/detail.vue';
import ArticleList from '../view/list.vue';
import Notfound from '../view/notfound.vue';
import ArticleAdd from '../view/write/index.vue';
Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/admin/',
    routes: [
      {
        path: '/',
        component: Dashboard
      },
      {
        path: '/article/list',
        component: ArticleList
      },
      {
        path: '/article/add',
        component: ArticleAdd
      },
      {
        path: '/article/detail/:id',
        component: ArticleDetail
      },
      {
        path: '*',
        component: Notfound
      }
    ]
  });
}
