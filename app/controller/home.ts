import Controller from "../extend/base_controller";
import * as Model from "../mocks/article/list";
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render("home/index.js", Model.getPage(1, 10));
  }
  public async client() {
    const { ctx } = this;
    await ctx.renderClient("home/index.js", Model.getPage(1, 10));
  }
  public async initData() {
    this.ctx.app.runSchedule("crawler_xmrc");
    this.success(null, "this is init data");
  }
}
