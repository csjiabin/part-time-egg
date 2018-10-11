module.exports = function serverLoader() {
  this.cacheable();
  return `
    import render from 'server';
    import Page from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    export default render({ ...Page });
  `;
};