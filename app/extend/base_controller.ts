import { Controller } from 'egg';
interface ResultCtx {
  success: boolean;
  data?: any;
  message: string;
  status: number;
}
export default class BaseController extends Controller {
  request: any = this.ctx.request;
  body = this.ctx.request.body;
  params = this.ctx.params;
  query = this.ctx.query;
  queries = this.ctx.queries;
  socket: any = this.ctx.socket;
  get user() {
    return this.ctx.session.user;
  }

  success(data?: any, message?: string) {
    const result: ResultCtx = {
      success: true,
      data,
      message: message || 'successfully!',
      status: 200
    };
    this.ctx.body = result;
  }
  error(message: string, status?: number) {
    const result: ResultCtx = {
      success: true,
      message: message || 'fail!',
      status: status || 400
    };
    this.ctx.status = result.status;
    this.ctx.body = result;
  }
  notFound(msg) {
    msg = msg || 'not found';
    this.error('Not Found', 404);
    // this.ctx.throw(404, msg);
    this.app.logger.error(msg);
  }
}
