import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  security: {
    enable: true,
    package: 'egg-security'
  },
  passport: {
    enable: true,
    package: 'egg-passport'
  },
  passportLocal: {
    enable: true,
    package: 'egg-passport-local'
  },
  validate: {
    enable: false,
    package: 'egg-validate'
  },
  io: {
    enable: true,
    package: 'egg-socket.io'
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus'
  }
};

export default plugin;
