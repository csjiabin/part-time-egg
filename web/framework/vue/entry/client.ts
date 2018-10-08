import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { InfiniteScroll } from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vue from 'vue';
import '../component';
import '../directive';
import '../filter';

export default function(options) {
  Vue.prototype.$http = require('axios');
  Vue.use(InfiniteScroll);
  if (options.store) {
    options.store.replaceState((window as any).__INITIAL_STATE__ || {});
  } else if ((window as any).__INITIAL_STATE__) {
    options.data = Object.assign((window as any).__INITIAL_STATE__, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
}
