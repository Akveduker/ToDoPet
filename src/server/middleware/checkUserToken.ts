import Token from '@models/Token';
import { TResponseWithId } from '@server-types/responseBody';
import errorMessage from '@server-utils/errorMessage';
import { Request, NextFunction } from 'express';

const checkUserToken = async (
  _req: Request,
  res: TResponseWithId,
  next: NextFunction
) => {
  try {
    const { _id } = res.locals._id;
    const token = await Token.findOne({ userId: _id });
    if (token) {
      await Token.deleteOne({ userId: _id });
    }
    next();
  } catch (e) {
    res.status(500).json(errorMessage('Неизвестная ошибка'));
  }
};

export default checkUserToken;
