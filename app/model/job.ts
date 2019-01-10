import { Document } from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import updateOrInsertAt from '../libs/mongo/update_or_insert';
import { Company } from './company';
import MongoPaginate from './mongoPaginate';
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
  education?: number;
  gender?: number;
  position_nature?: number;
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
export interface JobAll extends MongoPaginate {
  list: Job[];
}
export default app => {
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
    /* 职位基本要求 */
    // 1 小学 2 初中 3 高中 4 中专 5 大专 6 本科 7 硕士研究生 8 博士研究生
    education: { type: Number, default: 0 },
    gender: { type: Number, default: 2 },
    // 1全职 2兼职 3实习 4临时
    position_nature: { type: Number, default: 1 },
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
    .plugin(autoIncrement.plugin, {
      model: 'Job',
      field: 'id',
      startAt: 1,
      incrementBy: 1
    });

  return mongoose.model('Job', jobSchema);
};
