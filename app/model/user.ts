import { Document } from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import mongoUpdateAt from '../libs/mongo_update_at';

export interface User extends Document {
  _id?: string;
  id?: number;
  username?: string;
  password?: string;
  name?: string;
  gravatar?: string;
  gender?: number;
  phone?: string;
  email?: string;
  idcard?: string;
  create_at?: Date;
  update_at?: Date;
}

export default (app) => {
  const mongoose = app.mongoose;
  const connection = mongoose.connection;
  // 自增ID初始化
  autoIncrement.initialize(connection);
  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    username: { type: String },
    password: { type: String },
    name: { type: String },
    // 头像
    gravatar: { type: String },
    gender: { type: Number, default: 2 },
    phone: { type: String },
    email: { type: String },
    idcard: { type: String },
    // 发布日期
    create_at: { type: Date, default: Date.now },

    // 最后修改日期
    update_at: { type: Date, default: Date.now }
  });
  userSchema.plugin(mongoosePaginate)
    .plugin(mongoUpdateAt)
    .plugin(autoIncrement.plugin, {
      model: 'User',
      field: 'id',
      startAt: 1,
      incrementBy: 1
    });
  return mongoose.model('User', userSchema);
};
