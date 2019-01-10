import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    // keys: appInfo.name + "_1538649931215_6001",
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/parttime',
        options: {}
      }
    },
    // 阿里云 node性能平台
    alinode: {
      // 从 `Node.js 性能平台` 获取对应的接入参数
      appid: '76159',
      secret: '1534184f56b2c794a48f45ed19ec9b96f711b118'
    }
  };
  return config;
};
