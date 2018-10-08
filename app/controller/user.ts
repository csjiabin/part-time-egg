import ms from 'ms';
import Controller from '../extend/base_controller';
import { md5Decode } from '../libs/crypto';
import { User } from '../model/user';
export default class UserController extends Controller {
  public async index() {
    const data = { name: 'egg' };
    // await this.ctx.render("user", data);
    return data;
  }
  public async login() {
    const { ctx, service, body } = this;
    const { username, password, rememberMe = false } = body;
    try {
      if (!username || !password)
        return this.error('Please enter username or password!');
      const user: User = await service.user.find({ username });
      if (!user) return this.error('The account does not exist.');
      if (user.password !== md5Decode(password))
        return this.error('The password does not exist.');
      ctx.session.user = `${user._id}`;
      if (rememberMe) ctx.session.maxAge = ms('30d');
      console.log(ctx.session);
      this.success(user);
    } catch (error) {
      this.error(error);
    }
  }
  public logout() {
    try {
      this.ctx.session.user = null;
      this.success();
    } catch (error) {
      this.error(error);
    }
  }
  public async register() {
    const { service, body } = this;
    const { username, password } = body;
    const user = await service.user.find({
      username
    });
    if (user) return this.error('User name duplication!');
    const result = await service.user.create({
      username,
      password: md5Decode(password)
    });
    this.success(result);
  }

  public async update() {
    const { service, body } = this;
    const { id, username, password } = body;
    if (!id) return this.error('The id does not exist.');
    const findUser: User = await service.user.find({ username });
    if (findUser && findUser.id !== id)
      return this.error('User name duplication!');
    const options: User = {};
    if (username) options.username = username;
    if (password) options.password = md5Decode(password);
    const user: User = await service.user.update(id, options);
    if (!user) return this.error('The user does not exist.');
    this.success(user);
  }
}
