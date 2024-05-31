import verifyAccessToken from '@server-utils/verifyAccessToken';
import { NextFunction, Request, Response } from 'express';

const isUserAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cookie = req.cookies['Authorization'];
    if (!cookie) throw new Error();
    const token = cookie.split(' ')[1];
    if (!token) throw new Error();
    const _id = verifyAccessToken(token);
    if (!_id) throw new Error();
    res.locals._id = _id;
    next();
  } catch (e) {
    res.sendStatus(401);
  }
};

export default isUserAuthenticated;
