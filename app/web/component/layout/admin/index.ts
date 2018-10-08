import Vue from 'vue';
import '../../../asset/css/global.css';
import createLayout from '../layout';
import './index.css';
import MainLayout from './main.vue';
const tpl = '<div class="admin" id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';
export default createLayout('Layout', { MainLayout }, tpl);
