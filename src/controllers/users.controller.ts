import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/users.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    
    return res.status(StatusCodes.CREATED).json({ token: userCreated });
  };
}

export default UserController;