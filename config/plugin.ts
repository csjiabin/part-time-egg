import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mongoose: {
    enable: true,
    package: "egg-mongoose"
  },
  security: {
    enable: true,
    package: "egg-security"
  },
  passport: {
    enable: true,
    package: "egg-passport"
  },
  vuessr: {
    enable: true,
    package: "egg-view-vue-ssr"
  },
  validate: {
    enable: true,
    package: "egg-validate"
  }
};

export default plugin;
