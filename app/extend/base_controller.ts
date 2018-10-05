import { Controller } from "egg";
export default class BaseController extends Controller {
  request:any = this.ctx.request;
  body = this.ctx.request.body;
  params = this.ctx.params
  query = this.ctx.query
  queries = this.ctx.queries
  get user() {
    return this.ctx.session.user;
  }

  success(data?: any, message?: string) {
    this.ctx.body = {
      success: true,
      message: message || "request successfully!",
      data
    };
  }
  error(message: string, code?: number) {
    this.ctx.status = code || 400;
    this.ctx.body = {
      success: false,
      message
    };
  }
  notFound(msg) {
    msg = msg || "not found";
    this.ctx.throw(404, msg);
  }
}
