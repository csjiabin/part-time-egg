// import Vue from 'vue';
import '../../../asset/css/blog.css';
import '../../../asset/css/bootstrap.css';
import createLayout from '../layout';
import MainLayout from './main.vue';
const content =
  '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';
export default createLayout(
  'Layout',
  {
    MainLayout
  },
  content
);
