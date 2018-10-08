import Vue from 'vue';

import DetailView from 'component/app/detail.vue';
import ListView from 'component/app/list.vue';
import VueRouter from 'vue-router';
import BottomNavLayout from '../../page/app/component/BottomNavLayout.vue';
import jobListView from './view/jobs/list.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/app',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BottomNavLayout,
      children: [
        {
          path: '/job',
          component: jobListView
        }
      ]
    },
    {
      path: '/list',
      component: ListView
    },
    {
      path: '/detail/:id',
      component: DetailView
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

export default router;
