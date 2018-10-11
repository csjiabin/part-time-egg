import { Document } from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import updateOrInsertAt from '../libs/mongo/update_or_insert';
import { Job } from './job';
export interface Company extends Document {
  _id?: string;
  id?: number;
  company_name?: string;
  contact_name?: string;
  contact_phone?: string;
  mobile_phone?: string;
  fax?: string;
  contact_address?: string;
  email?: string;
  site?: string;
  industry?: string;
  description?: string;
  create_at?: Date;
  update_at?: Date;
  jobs?: Job[];
}

export default (app) => {
  const mongoose = app.mongoose;
  const connection = mongoose.connection;
  // 自增ID初始化
  autoIncrement.initialize(connection);
  const Schema = mongoose.Schema;
  const companySchema = new Schema({
    company_name: { type: String },
    contact_name: { type: String },
    contact_phone: { type: String },
    mobile_phone: { type: String },
    fax: { type: String },
    contact_address: { type: String },
    email: { type: String },
    site: { type: String },
    industry: { type: String },
    description: { type: String },
    create_at: { type: Date, default: Date.now },
    // 最后修改日期
    update_at: { type: Date, default: Date.now }
  });
  companySchema.set('toObject', { getters: true })
    .plugin(mongoosePaginate)
    .plugin(updateOrInsertAt)
    .plugin(autoIncrement.plugin, {
      model: 'Company',
      field: 'id',
      startAt: 1,
      incrementBy: 1
    });
  return mongoose.model('Company', companySchema);
};
