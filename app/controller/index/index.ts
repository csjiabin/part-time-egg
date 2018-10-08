import Controller from '../../extend/base_controller';

module.exports = class IndexController extends Controller {
  async index() {
    await this.ctx.render('index/index.js', {
      
    });
  }

  async client() {
    await this.ctx.renderClient('index/index.js', {
      
    });
  }

  async list() {
    this.ctx.body = {}
  }

  async detail() {
    const id = this.ctx.query.id;
    this.ctx.body = {id}
  }
};