<template>
  <AdminLayout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </AdminLayout>
</template>
<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { sync } from 'vuex-router-sync';
import 'element-ui/lib/theme-chalk/index.css';
import createI18n from 'framework/i18n/admin';
import store from './store/app';
import router from './router';
import AdminLayout from 'component/layout/admin';

Vue.use(VueI18n);
Vue.use(ElementUI);
sync(store, router);

export default {
  store,
  router,
  components: {
    AdminLayout,
  },
  hookRender(context, options) {
    const i18n = createI18n(context.state.locale);
    options.i18n = i18n;
  }
};
</script>
