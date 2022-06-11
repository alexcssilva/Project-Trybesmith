import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

function validateUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;

  if (!username) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" length must be at least 3 characters long' });
  }

  next();
}

function validateClass(req: Request, res: Response, next: NextFunction) {
  const { classe } = req.body;

  if (!classe) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"classe" is required' });
  }

  if (typeof classe !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"classe" must be a string' });
  }

  if (classe.length < 3) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"classe" length must be at least 3 characters long' });
  }

  next();
}

function validateLevel(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;

  if (level === undefined) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"level" is required' });
  }

  if (typeof level !== 'number') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"level" must be a number' });
  }

  if (level < 1) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"level" must be greater than or equal to 1' });
  }

  next();
}

function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"password" is required' });
  }

  if (typeof password !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" must be a string' });
  }

  if (password.length < 8) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" length must be at least 8 characters long' });
  }

  next();
}

export default {
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
};
