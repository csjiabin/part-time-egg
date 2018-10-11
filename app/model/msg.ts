import { Document } from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import updateOrInsertAt from '../libs/mongo/update_or_insert';
import { Room } from './room';
import { User } from './user';
export interface Msg extends Document {
  _id?: string;
  id?: number;
  username?: string;
  user?: User;
  src?: string;
  msg?: string;
  roomid?: Room;
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
  const msgSchema = new Schema({
    username: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    src: { type: String },
    msg: { type: String },
    roomid: { type: Schema.Types.ObjectId, ref: 'Room' },
    img: { type: String },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  });
  msgSchema
    .set('toObject', { getters: true })
    .plugin(mongoosePaginate)
    .plugin(updateOrInsertAt)
    .plugin(autoIncrement.plugin, {
      model: 'Msg',
      field: 'id',
      startAt: 1,
      incrementBy: 1
    });
  return mongoose.model('Msg', msgSchema);
};
