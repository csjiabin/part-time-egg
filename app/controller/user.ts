import ms from 'ms';
import Controller from '../extend/base_controller';
import { md5Decode } from '../libs/crypto';
import { User } from '../model/user';
export default class UserController extends Controller {
  public async index() {
    const data = { name: 'egg' };
    this.success(data);
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
      this.success(user);
    } catch (error) {
      this.error(error);
    }
  }
  public logout() {
    const {ctx} = this;
    if (ctx.isAuthenticated()) {
      this.ctx.session.user = null;
      ctx.logout();
      ctx.redirect(ctx.get('referer') || '/');
      this.success();
    } else {
      ctx.session.returnTo = ctx.path;
      ctx.redirect('/login');
    }

  }
  public async register() {
    const {
      service,
      body: { username, password }
    } = this;
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
    const {
      service,
      body: { id, username, password }
    } = this;
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
