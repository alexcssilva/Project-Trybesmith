import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

function generateJWT(payload: Omit<User, 'password'>) {
  const secret = 'senha';
  
  const jwtConfig: object = {
    expiresIn: '8h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ payload }, secret, jwtConfig);

  return token;
}

export default generateJWT;