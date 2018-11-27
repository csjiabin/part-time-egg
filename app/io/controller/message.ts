import Controller from '../../extend/base_controller';
export default class MessageController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      const message = ctx.args[0] || {};
      const { roomId, receive } = message;
      this.socket.broadcast.emit(roomId, {
        ...message,
        target: roomId
      });
      this.socket.broadcast.emit(receive, {
        ...message,
        target: receive
      });
    } catch (error) {
      this.app.logger.error(error);
    }
  }
}
