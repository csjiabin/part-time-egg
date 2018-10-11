import Controller from '../../extend/base_controller';
export default class MessageController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      const socket: any = ctx.socket;
      const message = ctx.args[0] || {};
      const { roomId, receive } = message;
      socket.broadcast.emit(roomId, {
        ...message,
        target:roomId
      });
      socket.broadcast.emit(receive, {
        ...message,
        target:receive
      });
    } catch (error) {
      this.app.logger.error(error);
    }
  }
}
