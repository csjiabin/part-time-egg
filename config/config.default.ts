import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
import * as fs from "fs";
import { join } from "path";
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1538649931215_6001";

  // add your egg config in here
  config.middleware = ["locals", "access"];
  config.security = {
    csrf: {
      enable: false,
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: "*",
      useSession: false, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      ignoreJSON: false, // skip check JSON requests if ignoreJSON set to true
      cookieName: "csrfToken", // csrf token's cookie name
      sessionName: "csrfToken", // csrf token's session name
      headerName: "x-csrf-token", // request csrf token's name in header
      bodyName: "_csrf", // request csrf token's name in body
      queryName: "_csrf" // request csrf token's name in query
    },
    xframe: {
      enable: false
    }
  };
  config.session = {
    key: "EGG_SESS",
    maxAge: 1000 * 60 * 60 * 24, // 1天
    httpOnly: true,
    encrypt: true
  };
  config.passportLocal = {
    usernameField: "username",
    passwordField: "password"
  };
  config.view = {
    cache: false
  };
  config.siteFile = {
    "/favicon.ico": fs.readFileSync(
      join(appInfo.baseDir, "app/public/favicon.ico")
    )
  };
  config.vuessr = {
    layout: join(appInfo.baseDir, "app/web/view/layout.html")
    // renderOptions: {
    //   basedir: join(appInfo.baseDir, "app/view")
    // }
  };
  config.logger = {
    consoleLevel: "DEBUG",
    dir: join(appInfo.baseDir, "logs")
  };
  config.multipart = {
    mode: "file"
  };
  config.static = {
    prefix: "/public/",
    dir: join(appInfo.baseDir, "public")
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
