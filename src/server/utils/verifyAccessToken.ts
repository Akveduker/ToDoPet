import verifyToken from './verifyToken';

const verifyAccessToken = (token: string) => {
  return verifyToken(token, process.env.ACCESS_SECRET as string);
};

export default verifyAccessToken;
