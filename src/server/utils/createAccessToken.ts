import jwt from 'jsonwebtoken';

const createAccessToken = <T extends object>(data: T) => {
  const token = jwt.sign(data, process.env.ACCESS_SECRET as string, {
    expiresIn: '5m',
  });
  return token;
};

export default createAccessToken;
