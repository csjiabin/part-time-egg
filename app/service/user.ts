import { Service } from 'egg';
import { User } from '../model/user';
export default class UserService extends Service {
  public async find(option: User): Promise<User> {
    try {
      const user: User = await this.ctx.model.User.findOne(option);
      return user;
    } catch (error) {
      throw error;
    }
  }
  public async create(option: User): Promise<User> {
    const { User } = this.ctx.model;
    try {
      const user: User = await new User(option).save();
      return user;
    } catch (error) {
      throw error;
    }
  }
  public async update(id: number, option: User): Promise<User> {
    const { User } = this.ctx.model;
    try {
      const user: User = await User.findOneAndUpdate({ id }, option);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async say() {
    return 'Hello Man!';
  }
}
