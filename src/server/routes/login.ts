import { TUserLogData } from '@generic-types/user/user';
import User from '@models/User';
import checkUserToken from '@server-middlewares/checkUserToken';
import setTokens from '@server-middlewares/setTokens';
import { TRequestBody } from '@server-types/requestBody';
import errorMessage from '@server-utils/errorMessage';
import { Router, Response, NextFunction } from 'express';

const router = Router();

router.post(
  '/login',
  async (
    req: TRequestBody<TUserLogData>,
    res: Response,
    next: NextFunction
  ) => {
    const { body } = req;
    try {
      const user = await User.findOne({
        email: body.email,
        password: body.password,
      });
      if (!user) {
        return res.status(404).json(errorMessage('Пользователь не найден'));
      }

      res.locals._id = user._id;
      next();
    } catch (e) {
      res.send(500).json(errorMessage('Ошибка авторизации'));
    }
  },
  checkUserToken,
  setTokens
);

export default router;
