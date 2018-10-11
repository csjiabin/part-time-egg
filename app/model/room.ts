import { Document } from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import updateOrInsertAt from '../libs/mongo/update_or_insert';
import { User } from './user';

export interface Room extends Document {
  _id?: string;
  id?: number;
  name?: string;
  users?: User[];
  img?: string;
  create_at?: Date;
  update_at?: Date;
}

export default (app) => {
  const mongoose = app.mongoose;
  const connection = mongoose.connection;
  // 自增ID初始化
  autoIncrement.initialize(connection);
  const Schema = mongoose.Schema;
  const roomSchema = new Schema({
    name: { type: String },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    img: { type: String },
    isMany: { type: Boolean, default: false },
    create_at: { type: Date, default: Date.now },
    // 最后修改日期
    update_at: { type: Date, default: Date.now }
  });
  roomSchema
    .set('toObject', { getters: true })
    .plugin(mongoosePaginate)
    .plugin(updateOrInsertAt)
    .plugin(autoIncrement.plugin, {
      model: 'Room',
      field: 'id',
      startAt: 1,
      incrementBy: 1
    });
  return mongoose.model('Room', roomSchema);
};
