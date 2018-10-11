import Controller from '../extend/base_controller';
export default class RobotController extends Controller {
  public async index() {
    const {
      config: {
        rebot: { apikey, uri }
      },
      ctx,
      query: { text = 'hello' }
    } = this;
    const data = {
      reqType: 0,
      perception: {
        inputText: {
          text
        },
        selfInfo: {
          location: {
            city: '厦门'
          }
        }
      },
      userInfo: {
        apiKey: apikey,
        userId: 'robot'
      }
    };
    try {
      const { data: result } = await ctx.curl(uri, {
        // 必须指定 method
        method: 'POST',
        // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
        contentType: 'json',
        data,
        // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
        dataType: 'json'
      });
      this.success({ ...result, send: text });
    } catch (error) {
      this.error(error);
    }
  }
}
