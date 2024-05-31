import verifyToken from './verifyToken';

const verifyRefreshToken = (token: string) => {
  return verifyToken(token, process.env.REFRESH_SECRET as string);
};

export default verifyRefreshToken;
