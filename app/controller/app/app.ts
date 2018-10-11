import Controller from '../../extend/base_controller';
import * as Model from '../../mocks/article/list';
export default class AppController extends Controller {
  async index() {
    await this.ctx.render('app/app.js', {
      url: this.ctx.url.replace(/\/app/, '')
    });
  }

  async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }
  async jobs() {
    const {
      service,
      query: { page = 1, limit = 10, keyword = '', date }
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
      this.ctx.body = await service.job.findAll(querys, options);
    } catch (error) {
      this.error(error);
    }
  }
  async detail() {
    const id = this.ctx.params.id;
    this.ctx.body = Model.getDetail(id);
  }
}
