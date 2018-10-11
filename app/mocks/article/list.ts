'use strict';
const data = {
  list: [
    {
      id: 1,
      title: 'vue-渐进式JavaScript 框架',
      summary: '简单小巧的核心，渐进式技术栈，足以应付任何规模的应用',
      hits: 200,
      url: 'https://cn.vuejs.org',
      status: 1,
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348289
    },
    {
      id: 2,
      title: 'webpack配置官方文档',
      summary:
        'webpack is a module bundler for modern JavaScript applications.',
      hits: 550,
      url: 'https://webpack.js.org/configuration/',
      status: 1,
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348290
    },
    {
      id: 3,
      title: 'egg-为企业级框架和应用而生',
      summary:
        'Born to buildbetter enterprise frameworks and apps with Node.js & Koa',
      hits: 278,
      url: 'https://eggjs.org/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348290
    },
    {
      id: 4,
      title: 'axios-基于 Promise 的 HTTP 请求客户端',
      summary:
        '基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用',
      hits: 998,
      url: 'https://www.awesomes.cn/repo/mzabriskie/axios',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348293
    },
    {
      id: 5,
      title: 'Centralized State Management for Vue.js',
      summary: 'Vuex 是一个专为Vue.js 应用程序开发的状态管理模式',
      hits: 232,
      url: 'https://github.com/vuejs/vuex',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348293
    },
    {
      id: 6,
      title: 'vue服务器渲染',
      summary: '服务器渲染可以加快首屏速度,利于SEO',
      hits: 565,
      url: 'http://csbun.github.io/blog/2016/08/vue-2-0-server-side-rendering/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348293
    },
    {
      id: 7,
      title: 'webpack服务器构建',
      summary: 'Webpack is an amazing tool.',
      hits: 988,
      url: 'http://jlongster.com/Backend-Apps-with-Webpack--Part-I',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348294
    },
    {
      id: 8,
      title: 'vue component loader for Webpack',
      summary: 'Webpack loader for Vue.js components',
      hits: 322,
      url: 'https://github.com/vuejs/vue-loader',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348295
    },
    {
      id: 9,
      title: 'vue-router--The official router for Vue.js',
      summary:
        'It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze',
      hits: 566,
      url: 'https://github.com/vuejs/vue-router',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348295
    },
    {
      id: 10,
      title: 'vue生命周期',
      summary: 'Vue.js 生命周期和route的生命周期讲解',
      hits: 434,
      url: 'http://www.jianshu.com/p/e9f884b6ba6c',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348296
    },
    {
      id: 11,
      title: 'babel到底将代码转换成什么鸟样',
      summary:
        '将babel捧作前端一个划时代的工具一定也不为过，它的出现让许多程序员幸福地用上了es6新语法',
      hits: 432,
      url: 'https://github.com/lcxfs1991/blog/issues/9',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348296
    },
    {
      id: 12,
      title: 'HTTP2 的真正性能到底如何',
      summary: 'HTTP2 的真正性能到底如何',
      hits: 565,
      url:
        'https://segmentfault.com/a/1190000007219256?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348296
    },
    {
      id: 13,
      title: 'HTTP,HTTP2.0,SPDY,HTTPS讲解',
      summary: '使用SPDY加快你的网站速度',
      hits: 787,
      url:
        'http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348297
    },
    {
      id: 14,
      title: 'git - 简明指南',
      summary: '助你入门 git 的简明指南',
      hits: 121,
      url: 'http://rogerdudler.github.io/git-guide/index.zh.html',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348297
    },
    {
      id: 15,
      title: 'vue从1升级到2',
      summary: 'Migrating from v1 to v2',
      hits: 555,
      url: 'https://webpack.js.org/guides/migrating/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348298
    },
    {
      id: 16,
      title: 'vue-渐进式JavaScript 框架',
      summary: '简单小巧的核心，渐进式技术栈，足以应付任何规模的应用',
      hits: 200,
      url: 'https://cn.vuejs.org',
      status: 1,
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348299
    },
    {
      id: 17,
      title: 'webpack配置官方文档',
      summary:
        'webpack is a module bundler for modern JavaScript applications.',
      hits: 550,
      url: 'https://webpack.js.org/configuration/',
      status: 1,
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348321
    },
    {
      id: 18,
      title: 'egg-为企业级框架和应用而生',
      summary:
        'Born to buildbetter enterprise frameworks and apps with Node.js & Koa',
      hits: 278,
      url: 'https://eggjs.org/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348322
    },
    {
      id: 19,
      title: 'axios-基于 Promise 的 HTTP 请求客户端',
      summary:
        '基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用',
      hits: 998,
      url: 'https://www.awesomes.cn/repo/mzabriskie/axios',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348324
    },
    {
      id: 20,
      title: 'Centralized State Management for Vue.js',
      summary: 'Vuex 是一个专为Vue.js 应用程序开发的状态管理模式',
      hits: 232,
      url: 'https://github.com/vuejs/vuex',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348326
    },
    {
      id: 21,
      title: 'vue服务器渲染',
      summary: '服务器渲染可以加快首屏速度,利于SEO',
      hits: 565,
      url: 'http://csbun.github.io/blog/2016/08/vue-2-0-server-side-rendering/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348327
    },
    {
      id: 22,
      title: 'webpack服务器构建',
      summary: 'Webpack is an amazing tool.',
      hits: 988,
      url: 'http://jlongster.com/Backend-Apps-with-Webpack--Part-I',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348329
    },
    {
      id: 23,
      title: 'vue component loader for Webpack',
      summary: 'Webpack loader for Vue.js components',
      hits: 322,
      url: 'https://github.com/vuejs/vue-loader',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348330
    },
    {
      id: 24,
      title: 'vue-router--The official router for Vue.js',
      summary:
        'It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze',
      hits: 566,
      url: 'https://github.com/vuejs/vue-router',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348330
    },
    {
      id: 25,
      title: 'vue生命周期',
      summary: 'Vue.js 生命周期和route的生命周期讲解',
      hits: 434,
      url: 'http://www.jianshu.com/p/e9f884b6ba6c',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348331
    },
    {
      id: 26,
      title: 'babel到底将代码转换成什么鸟样',
      summary:
        '将babel捧作前端一个划时代的工具一定也不为过，它的出现让许多程序员幸福地用上了es6新语法',
      hits: 432,
      url: 'https://github.com/lcxfs1991/blog/issues/9',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348333
    },
    {
      id: 27,
      title: 'HTTP2 的真正性能到底如何',
      summary: 'HTTP2 的真正性能到底如何',
      hits: 565,
      url:
        'https://segmentfault.com/a/1190000007219256?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348333
    },
    {
      id: 28,
      title: 'HTTP,HTTP2.0,SPDY,HTTPS讲解',
      summary: '使用SPDY加快你的网站速度',
      hits: 787,
      url:
        'http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348334
    },
    {
      id: 29,
      title: 'git - 简明指南',
      summary: '助你入门 git 的简明指南',
      hits: 121,
      url: 'http://rogerdudler.github.io/git-guide/index.zh.html',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348335
    },
    {
      id: 30,
      title: 'vue从1升级到2',
      summary: 'Migrating from v1 to v2',
      hits: 555,
      url: 'https://webpack.js.org/guides/migrating/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348335
    },
    {
      id: 31,
      title: 'vue-渐进式JavaScript 框架',
      summary: '简单小巧的核心，渐进式技术栈，足以应付任何规模的应用',
      hits: 200,
      url: 'https://cn.vuejs.org',
      status: 1,
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348336
    },
    {
      id: 32,
      title: 'webpack配置官方文档',
      summary:
        'webpack is a module bundler for modern JavaScript applications.',
      hits: 550,
      url: 'https://webpack.js.org/configuration/',
      status: 1,
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348336
    },
    {
      id: 33,
      title: 'egg-为企业级框架和应用而生',
      summary:
        'Born to buildbetter enterprise frameworks and apps with Node.js & Koa',
      hits: 278,
      url: 'https://eggjs.org/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348338
    },
    {
      id: 34,
      title: 'axios-基于 Promise 的 HTTP 请求客户端',
      summary:
        '基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用',
      hits: 998,
      url: 'https://www.awesomes.cn/repo/mzabriskie/axios',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348339
    },
    {
      id: 35,
      title: 'Centralized State Management for Vue.js',
      summary: 'Vuex 是一个专为Vue.js 应用程序开发的状态管理模式',
      hits: 232,
      url: 'https://github.com/vuejs/vuex',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348339
    },
    {
      id: 36,
      title: 'vue服务器渲染',
      summary: '服务器渲染可以加快首屏速度,利于SEO',
      hits: 565,
      url: 'http://csbun.github.io/blog/2016/08/vue-2-0-server-side-rendering/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348340
    },
    {
      id: 37,
      title: 'webpack服务器构建',
      summary: 'Webpack is an amazing tool.',
      hits: 988,
      url: 'http://jlongster.com/Backend-Apps-with-Webpack--Part-I',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348340
    },
    {
      id: 38,
      title: 'vue component loader for Webpack',
      summary: 'Webpack loader for Vue.js components',
      hits: 322,
      url: 'https://github.com/vuejs/vue-loader',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348341
    },
    {
      id: 39,
      title: 'vue-router--The official router for Vue.js',
      summary:
        'It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze',
      hits: 566,
      url: 'https://github.com/vuejs/vue-router',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348341
    },
    {
      id: 40,
      title: 'vue生命周期',
      summary: 'Vue.js 生命周期和route的生命周期讲解',
      hits: 434,
      url: 'http://www.jianshu.com/p/e9f884b6ba6c',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348342
    },
    {
      id: 41,
      title: 'babel到底将代码转换成什么鸟样',
      summary:
        '将babel捧作前端一个划时代的工具一定也不为过，它的出现让许多程序员幸福地用上了es6新语法',
      hits: 432,
      url: 'https://github.com/lcxfs1991/blog/issues/9',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348342
    },
    {
      id: 42,
      title: 'HTTP2 的真正性能到底如何',
      summary: 'HTTP2 的真正性能到底如何',
      hits: 565,
      url:
        'https://segmentfault.com/a/1190000007219256?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348343
    },
    {
      id: 43,
      title: 'HTTP,HTTP2.0,SPDY,HTTPS讲解',
      summary: '使用SPDY加快你的网站速度',
      hits: 787,
      url:
        'http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348343
    },
    {
      id: 44,
      title: 'git - 简明指南',
      summary: '助你入门 git 的简明指南',
      hits: 121,
      url: 'http://rogerdudler.github.io/git-guide/index.zh.html',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348344
    },
    {
      id: 45,
      title: 'vue从1升级到2',
      summary: 'Migrating from v1 to v2',
      hits: 555,
      url: 'https://webpack.js.org/guides/migrating/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348345
    },
    {
      id: 46,
      title: 'vue-渐进式JavaScript 框架',
      summary: '简单小巧的核心，渐进式技术栈，足以应付任何规模的应用',
      hits: 200,
      url: 'https://cn.vuejs.org',
      status: 1,
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348345
    },
    {
      id: 47,
      title: 'webpack配置官方文档',
      summary:
        'webpack is a module bundler for modern JavaScript applications.',
      hits: 550,
      url: 'https://webpack.js.org/configuration/',
      status: 1,
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348346
    },
    {
      id: 48,
      title: 'egg-为企业级框架和应用而生',
      summary:
        'Born to buildbetter enterprise frameworks and apps with Node.js & Koa',
      hits: 278,
      url: 'https://eggjs.org/',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348346
    },
    {
      id: 49,
      title: 'axios-基于 Promise 的 HTTP 请求客户端',
      summary:
        '基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用',
      hits: 998,
      url: 'https://www.awesomes.cn/repo/mzabriskie/axios',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348347
    },
    {
      id: 50,
      title: 'Centralized State Management for Vue.js',
      summary: 'Vuex 是一个专为Vue.js 应用程序开发的状态管理模式',
      hits: 232,
      url: 'https://github.com/vuejs/vuex',
      tag: 'egg,vue,webpack',
      categoryId: 1,
      authorId: 1,
      createTime: 1515671348347
    }
  ]
};

// let id: number = 1;

// data.list = data.list.concat(data.list);
// data.list = data.list.concat(data.list);

// data.list.forEach(item => (item.id = id++));

const total = data.list.length;
export function getPage(pageIndex: number = 1, pageSize: number = 10) {
  const start = (pageIndex - 1) * pageSize;
  const end = start + Number(pageSize);
  return { list: data.list.slice(start, end), total };
}

export function getDetail(key: number) {
  return data.list
    .filter((item) => {
      return item.id === key;
    })
    .slice(0, 1);
}
