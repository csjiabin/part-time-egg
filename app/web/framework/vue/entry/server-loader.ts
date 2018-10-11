module.exports = function serverLoader() {
  this.cacheable();
  return `
    import Vue from 'vue';
    import Layout from 'component/layout/index';
    import render from 'server';
    import Page from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    Vue.component(Layout.name, Layout);
    export default render({ ...Page });
  `;
};