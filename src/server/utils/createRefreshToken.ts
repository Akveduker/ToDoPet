import jwt from 'jsonwebtoken';
const createRefreshToken = <T extends object>(data: T) => {
  const token = jwt.sign(data, process.env.REFRESH_SECRET as string, {
    expiresIn: '1h',
  });
  return token;
};

export default createRefreshToken;
