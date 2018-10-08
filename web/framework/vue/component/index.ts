import Vue from 'vue';

import Layout from 'component/layout/standard/index.ts';
import Vuetify from 'vuetify';
// // import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

Vue.component(Layout.name, Layout);
