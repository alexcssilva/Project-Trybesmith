import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validateUser from '../middlewares/user.middleware';

const router = Router();

const usersController = new UserController();

router.post(
  '/users',
  validateUser.validateUsername,
  validateUser.validateClass,
  validateUser.validateLevel,
  validateUser.validatePassword,
  usersController.create,
);

export default router;