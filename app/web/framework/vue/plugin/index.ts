'use strict';
import VueI18n from 'vue-i18n';
import Vuetify from 'vuetify';
import createI18n from '../../i18n/site';
import request from '../../network/request';

export default {
  install(Vue) {
    Vue.use(Vuetify);
    if (!Vue.prototype.hasOwnProperty('$request')) {
      Vue.prototype.$request = request;
    }
    if (!Vue.hookRender) {
      Vue.use(VueI18n);
      Vue.hookRender = (context, options) => {
        const i18n = createI18n(context.state.locale);
        options.i18n = i18n;
      };
    }
  }
};