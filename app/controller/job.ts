import Controller from '../extend/base_controller';
import { Job } from '../model/job';

export default class JobController extends Controller {
  public async list() {
    const {
      service,
      body: { page = 1, limit = 10, keyword = '', date }
    } = this;

    try {
      // 过滤条件
      const options = {
        sort: {
          create_at: -1
        },
        page: Number(page) || 1,
        limit: Number(limit),
        populate: ['company']
      };
      // 参数
      const querys: any = {};
      // 关键词查询
      if (keyword) {
        const keywordReg = new RegExp(keyword);
        querys.$or = [
          {
            recruitment_positon: keywordReg
          },
          {
            responsibilities_and_requirements: keywordReg
          },
          {
            education: keywordReg
          },
          {
            language_requirement: keywordReg
          },
          {
            work_address: keywordReg
          },
          {
            contact_address: keywordReg
          },
          {
            monthly_salary: keywordReg
          },
          {
            welfare: keywordReg
          },
          {
            work_hours: keywordReg
          },
          {
            company_name: keywordReg
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
      this.success(await service.job.findAll(querys, options));
    } catch (error) {
      this.error(error);
    }
  }
  public async create() {
    const { body } = this;
    try {
      const result = await this.service.job.create(body);
      this.success(result, 'create job successfully!');
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
      const detail: Job = await service.job.detail(id);
      if (!detail) return this.error('The job does not exist.', 404);
      this.success(detail);
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
      const detail: Job = await service.job.update(id, body);
      if (!detail) return this.error('The job does not exist.', 404);
      this.success(detail, 'update job successfully!');
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
      const result: Job = await service.job.delete(id);
      if (!result) return this.error('The job does not exist.', 404);
      this.success(null, 'delete job successfully!');
    } catch (error) {
      this.error(error);
    }
  }
}
