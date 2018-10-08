import Controller from '../../extend/base_controller';

export default class CategoryController extends Controller{
  async index() {
    await this.ctx.render('category/category.js', {
      message: 'Egg Vue Server Side Render: Category'
    });
  }
};