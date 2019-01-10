import Controller from '../extend/base_controller';
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // await ctx.render('home.nj', { data: 'asd' });
    await ctx.render('home.nj', { data: 'asd' });

  }
  public async initData() {
    this.ctx.app.runSchedule('crawler_xmrc');
    this.success(null, 'this is init data');
  }
}
