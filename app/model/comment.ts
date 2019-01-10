import { Document } from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import updateOrInsertAt from '../libs/mongo/update_or_insert';
import { User } from './user';

export interface Comment extends Document {
  _id?: string;
  id?: number;
  job_id?: number;
  pid?: number;
  content?: string;
  likes?: number;
  ip?: string;
  from?: User;
  to?: User;
  // status?: number;
  create_at?: Date;
  update_at?: Date;
}

export default (app) => {
  const mongoose = app.mongoose;
  const connection = mongoose.connection;
  // 自增ID初始化
  autoIncrement.initialize(connection);
  const Schema = mongoose.Schema;
  const commentSchema = new Schema({
    // 评论所在的文章_id，0代表系统留言板
    job_id: { type: Number, required: true },
    // pid，0代表默认留言
    pid: { type: Number, default: 0 },
    // content
    content: {
      type: String,
      required: true,
      validate: /\S+/
    },
    // 被赞数
    likes: { type: Number, default: 0 },
    // ip
    ip: { type: String },
    // 评论产生者
    from: { type: Schema.Types.ObjectId, ref: 'User' },
    to: { type: Schema.Types.ObjectId, ref: 'User' },
    // 状态 0待审核 1通过正常 2不通过
    // status: { type: Number, default: 1 },
    // 发布日期
    create_at: { type: Date, default: Date.now },
    // 最后修改日期
    update_at: { type: Date }
  });
  commentSchema
    .set('toObject', { getters: true })
    .plugin(mongoosePaginate)
    .plugin(updateOrInsertAt)
    .plugin(autoIncrement.plugin, {
      model: 'Comment',
      field: 'id',
      startAt: 1,
      incrementBy: 1
    });
  return mongoose.model('Comment', commentSchema);
};
