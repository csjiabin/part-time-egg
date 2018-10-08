import { Service } from 'egg';
import { Company } from '../model/company';
export default class CompanyService extends Service {
  public async find(option: Company): Promise<Company> {
    const { Company } = this.ctx.model;
    try {
      const company: Company = await Company.findOne(option);
      return company;
    } catch (error) {
      throw error;
    }
  }
  public async findAll(querys, options): Promise<any> {
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
  public async create(option: Company): Promise<Company> {
    const { Company } = this.ctx.model;
    try {
      const company: Company = await new Company(option).save();
      return company;
    } catch (error) {
      throw error;
    }
  }
  public async update(_id: string, option: Company): Promise<Company> {
    const { Company } = this.ctx.model;
    delete option.create_at;
    delete option.update_at;
    try {
      const company: Company = await Company.findOneAndUpdate({ _id }, option);
      return company;
    } catch (error) {
      throw error;
    }
  }
  public async detail(_id): Promise<Company> {
    const { Company } = this.ctx.model;
    try {
      const detail: Company = await Company.findById(_id);
      return detail;
    } catch (error) {
      throw error;
    }
  }
  public async delete(_id): Promise<Company> {
    const { Company } = this.ctx.model;
    try {
      const result: Company = await Company.findByIdAndRemove(_id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
