import Controller from '../extend/base_controller';
import { Company } from '../model/company';
import { Job } from '../model/job';

export default class CompanyController extends Controller {
  public async list() {
    const { service, body } = this;
    try {
      const { page = 1, limit = 10, keyword = '', date } = body;
      // 过滤条件
      const options = {
        sort: {
          create_at: -1
        },
        page: Number(page) || 1,
        limit: Number(limit)
      };
      // 参数
      const querys: any = {};
      // 关键词查询
      if (keyword) {
        const keywordReg = new RegExp(keyword);
        querys.$or = [
          {
            company_name: keywordReg
          },
          {
            contact_address: keywordReg
          },
          {
            industry: keywordReg
          },
          {
            description: keywordReg
          },
          {
            contact_name: keywordReg
          }
        ];
      }
      // 时间查询
      if (date) {
        const getDate: any = new Date(date);
        if (!Object.is(getDate.toString(), 'Invalid Date')) {
          querys.create_at = {
            $gte: new Date((getDate / 1000 - 60 * 60 * 8) * 1000),
            $lt: new Date((getDate / 1000 + 60 * 60 * 16) * 1000)
          };
        }
      }
      this.success(await service.company.findAll(querys, options));
    } catch (error) {
      this.error(error);
    }
  }
  public async create() {
    const { service, body } = this;
    try {
      this.success(
        await service.company.create(body),
        'create company successfully!'
      );
    } catch (error) {
      this.error(error);
    }
  }
  public async detail() {
    const {
      service,
      params: { id }
    } = this;
    try {
      const company: Company = await service.company.detail(id);
      if (!company) return this.error('The company does not exist.', 404);
      const jobs: Job[] = await service.job.companyJobs(id);
      const result: any = { ...company };
      this.success({
        ...result._doc,
        jobs
      });
    } catch (error) {
      this.error(error);
    }
  }
  public async update() {
    const {
      service,
      params: { id },
      body
    } = this;
    try {
      const company: Company = await service.company.update(id, body);
      if (!company) return this.error('The company does not exist.', 404);
      this.success(company, 'update company successfully!');
    } catch (error) {
      this.error(error);
    }
  }
  public async delete() {
    const {
      service,
      params: { id }
    } = this;
    try {
      const result: Company = await service.company.delete(id);
      if (!result) return this.error('The company does not exist.', 404);
      this.success(result, 'delete company successfully!');
    } catch (error) {
      this.error(error);
    }
  }
}
