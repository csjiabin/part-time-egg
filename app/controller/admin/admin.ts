import Controller from '../../extend/base_controller';
import * as Model from '../../mocks/article/list';

export default class AdminController extends Controller {
  async login() {
    const { ctx } = this;
    await ctx.renderClient('admin/login/login.js', {
      ctx,
      message: 'vue server side render!'
    });
  }
  async home() {
    const { ctx } = this;
    const url = ctx.url.replace(/\/admin/, '');
    await ctx.render('admin/home/home.js', { ctx, url });
  }
  async list() {
    const {
      ctx,
      body,
      query
    } = this;
    ctx.body = Model.getPage(query.pageIndex || body.pageIndex, query.pageSize || body.pageSize);
  }
  async add() {
    const { ctx, body } = this;
    ctx.body = {
      list: [
        {
          body
        }
      ]
    };
  }
  async del() {
    const {
      params: { id }
    } = this;
    this.success(id);
  }
  async detail() {
    const {
      query: { id }
    } = this;
    this.success(id);
  }
}
