import * as crypto from 'crypto';
// md5 编码
export const md5Decode = (value) => {
  return crypto
    .createHash('md5')
    .update(value)
    .digest('hex');
};
