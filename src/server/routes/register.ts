import { NextFunction, Router } from 'express';
import { TUserRegData } from '@generic-types/user/user';
import User from '@models/User';
import { Response } from 'express';
import setTokens from '@server-middlewares/setTokens';
import { TRequestBody } from '@server-types/requestBody';
import errorMessage from '@server-utils/errorMessage';
import { MongoError } from 'mongodb';

const router = Router();

router.post(
  '/registration',
  async (
    req: TRequestBody<TUserRegData>,
    res: Response,
    next: NextFunction
  ) => {
    const { body } = req;
    try {
      const user = new User(body);
      await user.save();
      res.locals._id = user._id;
      next();
    } catch (e) {
      const typedErr = e as MongoError;
      if (typedErr.code && typedErr.code === 11000) {
        return res
          .status(400)
          .json(errorMessage('Пользователь с такой почтой уже существует'));
      }
      res.status(500).json(errorMessage('Ошибка регистрации'));
    }
  },
  setTokens
);

export default router;
