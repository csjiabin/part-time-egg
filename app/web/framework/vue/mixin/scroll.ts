export default {
  methods: {
    // 滚动条在Y轴上的滚动距离
    getScrollTop() {
      let scrollTop = 0;
      let  bodyScrollTop = 0;
      let  documentScrollTop = 0;
      if (document.body) {
        bodyScrollTop = document.body.scrollTop;
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
      }
      scrollTop =
        bodyScrollTop - documentScrollTop > 0
          ? bodyScrollTop
          : documentScrollTop;
      return scrollTop;
    },
    // 文档的总高度
    getScrollHeight() {
      let scrollHeight = 0;
      let  bodyScrollHeight = 0;
      let  documentScrollHeight = 0;
      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
      }
      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
      }
      scrollHeight =
        bodyScrollHeight - documentScrollHeight > 0
          ? bodyScrollHeight
          : documentScrollHeight;
      return scrollHeight;
    },
    // 浏览器视口的高度
    getWindowHeight() {
      let windowHeight = 0;
      if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight;
      } else {
        windowHeight = document.body.clientHeight;
      }
      return windowHeight;
    }
  }
};
