import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import '../component';
import '../directive';
import '../filter';
import plugin from '../plugin';
Vue.use(plugin);
export default function(options) {
  const state = (window as any).__INITIAL_STATE__ || {};
  if (options.store) {
    options.store.replaceState(state);
  } else {
    options.data = { ...state, ...options.data };
  }
  const hookRender = options.hookRender || (Vue as any).hookRender;
  if (hookRender) {
    const context = { state };
    hookRender(context, options);
    Vue.use(VueSocketio, document.location.origin);
  }
  const app = new Vue(options);
  app.$mount('#app');
}
