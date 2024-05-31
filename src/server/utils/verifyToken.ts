import jwt from 'jsonwebtoken';

const verifyToken = (token: string, secret: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    if (typeof decoded === 'string' || !decoded._id) {
      return false;
    }
    return decoded._id;
  } catch (e) {
    return false;
  }
};

export default verifyToken;
