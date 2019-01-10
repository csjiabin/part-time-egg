import { Service } from 'egg';
import { Company as CompanyModel,CompanyAll } from '../model/company';
export default class CompanyService extends Service {
  public async find(option: CompanyModel): Promise<CompanyModel> {
    const { Company } = this.ctx.model;
    try {
      const company: CompanyModel = await Company.findOne(option);
      return company;
    } catch (error) {
      throw error;
    }
  }
  public async findAll(querys, options): Promise<CompanyAll> {
    const { Company } = this.ctx.model;
    try {
      const result = await Company.paginate(querys, options);
      const companys = { ...result };
      companys.list = companys.docs;
      companys.total = companys.totalDocs;
      delete companys.docs;
      delete companys.totalDocs;
      return companys;
    } catch (error) {
      throw error;
    }
  }
  public async create (option: CompanyModel): Promise<CompanyModel> {
    const { Company } = this.ctx.model;
    try {
      const company: CompanyModel = await new Company(option).save();
      return company;
    } catch (error) {
      throw error;
    }
  }
  public async update(_id: string, option: CompanyModel): Promise<CompanyModel> {
    const { Company } = this.ctx.model;
    delete option.create_at;
    delete option.update_at;
    try {
      const company: CompanyModel = await Company.findOneAndUpdate({ _id }, option);
      return company;
    } catch (error) {
      throw error;
    }
  }
  public async detail(_id): Promise<CompanyModel> {
    const { Company } = this.ctx.model;
    try {
      const detail: CompanyModel = await Company.findById(_id);
      return detail;
    } catch (error) {
      throw error;
    }
  }
  public async delete(_id): Promise<CompanyModel> {
    const { Company } = this.ctx.model;
    try {
      const result: CompanyModel = await Company.findByIdAndRemove(_id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
