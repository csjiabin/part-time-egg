import { Document } from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import mongoUpdateAt from '../libs/mongo_update_at';
import updateOrInsertAt from '../libs/update_or_insert';
import { Company } from './company';

export interface Job extends Document {
  id?: number;
  recruitment_positon?: string;
  people_num?: string;
  company_name?: string;
  company?: Company;
  term_start?: Date;
  term_end?: Date;
  department?: string;
  contact_name?: string;
  contact_phone?: string;
  mobile_phone?: string;
  fax?: string;
  contact_address?: string;
  email?: string;
  education?: string;
  gender?: number;
  position_nature?: string;
  language_requirement?: string;
  work_address?: string;
  reference_reward?: string;
  work_hours?: string;
  welfare?: string;
  monthly_salary?: string;
  // 职位职责和职位要求 (Job Responsibilities & Requirements)：
  responsibilities_and_requirements?: string;
  create_at?: Date;
  update_at?: Date;
}

export default (app) => {
  const mongoose = app.mongoose;
  const connection = mongoose.connection;
  // 自增ID初始化
  autoIncrement.initialize(connection);
  const Schema = mongoose.Schema;
  const jobSchema = new Schema({
    recruitment_positon: { type: String },
    people_num: { type: String },
    company_name: { type: String },
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    term_start: { type: Date },
    term_end: { type: Date },
    department: { type: String },
    contact_name: { type: String },
    contact_phone: { type: String },
    mobile_phone: { type: String },
    fax: { type: String },
    contact_address: { type: String },
    email: { type: String },
    // 职位基本要求
    education: { type: String },
    gender: { type: Number },
    position_nature: { type: String },
    language_requirement: { type: String },
    work_address: { type: String },
    reference_reward: { type: String },
    work_hours: { type: String },
    welfare: { type: String },
    monthly_salary: { type: String },
    // 职位职责和职位要求 (Job Responsibilities & Requirements)：
    responsibilities_and_requirements: { type: String },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
  });
  // 转化成普通 JavaScript 对象
  jobSchema
    .set('toObject', { getters: true })
    .plugin(mongoosePaginate)
    .plugin(updateOrInsertAt)
    .plugin(mongoUpdateAt)
    .plugin(autoIncrement.plugin, {
      model: 'Job',
      field: 'id',
      startAt: 1,
      incrementBy: 1
    });

  return mongoose.model('Job', jobSchema);
};