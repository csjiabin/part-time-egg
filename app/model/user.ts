import { Document } from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import updateOrInsertAt from '../libs/mongo/update_or_insert';

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
    name: { type: String, validate: /\S+/ },
    // 头像
    gravatar: { type: String },
    gender: { type: Number, default: 2 },
    phone: { type: String },
    email: {
      type: String,
      validate: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
    },
    idcard: { type: String },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  });
  userSchema
    .plugin(mongoosePaginate)
    .plugin(updateOrInsertAt)
    .plugin(autoIncrement.plugin, {
      model: 'User',
      field: 'id',
      startAt: 1,
      incrementBy: 1
    });
  return mongoose.model('User', userSchema);
};
