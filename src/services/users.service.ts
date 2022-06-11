import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import generateJWT from '../utils/generateJWT';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: Omit<User, 'id'>) {
    const result = await this.model.create(user);
    return generateJWT(result);
  }
}

export default UserService;