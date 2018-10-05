import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  webpack: {
    enable: true,
    package: 'egg-webpack'
  },
  webpackvue: {
    enable: true,
    package: 'egg-webpack-vue'
  }
};

export default plugin;
