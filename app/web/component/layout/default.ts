import Vue from 'vue';
import '../../asset/css/global.css';
import createLayout from './layout';
import MainLayout from './main.vue';
const tpl = '<div id="app"><slot></slot></div>';
export default createLayout('Layout', { }, tpl);