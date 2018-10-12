'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: ['app/web/page'],
    exclude: ['app/web/page/[a-z]+/(component|store)'],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.ts',
      server: 'app/web/framework/vue/entry/server-loader.ts',
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.ts',
    client: 'app/web/framework/vue/entry/client.ts',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    vue: 'vue/dist/vue.esm.js'
  },
  lib: ['vue', 'vuex', 'axios', 'vuex-router-sync', 'vue-router'],
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync', 'element-ui'],
  loaders: {
    typescript: true,
    scss: true,
    stylus: true,
    less: true,
    vue: {
      options: {
        transformToRequire: {
          img: ['url', 'src']
        }
      }
    }
  },
  plugins: {},
  compile: {
    thread: false, // 多进程编译
    cache: false
  },
  done() {
    console.log('如果启动成功后, Chrome控制台浏览器脚本报错, 可以尝试执行 npm run clean 清除缓存解决');
  }
};