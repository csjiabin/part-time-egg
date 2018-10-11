import Controller from '../../extend/base_controller';
import * as Model from '../../mocks/article/list';

export default class IndexController extends Controller {
  async index() {
    const {query} = this;
    await this.ctx.render('index/index.js', {
      query
    });
  }

  async client() {
    await this.ctx.renderClient('index/index.js', {

    });
  }

  async list() {
    const {query: { pageIndex = 1, pageSize = 10}} = this;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const id = this.ctx.query.id;
    this.ctx.body = {id};
  }
};