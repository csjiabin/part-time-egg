'use strict';
// import axios from 'axios';
import VueI18n from 'vue-i18n';
import createI18n from '../../i18n/site';
import request from '../../network/request';

export default {
  install(Vue) {
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