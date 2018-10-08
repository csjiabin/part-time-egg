const tpl = '<div id="app"><slot></slot></div>';
const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{{vTitle}}</title>
    <meta name="keywords" :content="vKeywords">
    <meta name="description" :content="vDescription">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  </head>
  <body :class="baseClass">
    ${tpl}
  </body>
</html>`;
export default {
  computed: {
    vTitle() {
      return this.$root.title || this.title || 'Egg + Vue';
    },
    vKeywords() {
      return (
        this.$root.keywords ||
        this.keywords ||
        'egg, vue, webpack, server side render'
      );
    },
    vDescription() {
      return (
        this.$root.description ||
        this.description ||
        'egg-vue-webpack server side render'
      );
    },
    baseClass() {
      return this.$root.baseClass;
    }
  },
  name: 'AppLayout',
  props: ['title', 'description', 'keywords'],
  template: EASY_ENV_IS_BROWSER ? tpl : template
};
