import { Service } from 'egg';
import { User as UserModel } from '../model/user';
export default class UserService extends Service {
  public async find(option: UserModel): Promise<UserModel> {
    try {
      const user: UserModel = await this.ctx.model.User.findOne(option);
      return user;
    } catch (error) {
      throw error;
    }
  }
  public async create(option: UserModel): Promise<UserModel> {
    const { User } = this.ctx.model;
    try {
      const user: UserModel = await new User(option).save();
      return user;
    } catch (error) {
      throw error;
    }
  }
  public async update(id: number, option: UserModel): Promise<UserModel> {
    const { User } = this.ctx.model;
    try {
      const user: UserModel = await User.findOneAndUpdate({ id }, option);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async say() {
    return 'Hello Man!';
  }
}
