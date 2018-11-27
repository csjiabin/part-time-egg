import { Controller } from 'egg';

export default class BaseController extends Controller {
  request: any = this.ctx.request;
  body = this.ctx.request.body;
  params = this.ctx.params;
  query = this.ctx.query;
  queries = this.ctx.queries;
  socket:any = this.ctx.socket;
  get user() {
    return this.ctx.session.user;
  }

  success(data?: any, message?: string) {
    this.ctx.body = {
      success: true,
      data,
      message: message || 'request successfully!',
      status: 200
    };
  }
  error(message: string, status?: number) {
    status = status || 400;
    this.ctx.status = status;
    this.ctx.body = {
      success: false,
      message: message || 'request fail!',
      status
    };
  }
  notFound(msg) {
    msg = msg || 'not found';
    this.error('Not Found', 404);
    // this.ctx.throw(404, msg);
    this.app.logger.error(msg);
  }
}
