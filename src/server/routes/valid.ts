import refreshToken from '@server-middlewares/refreshToken';
import verifyAccessToken from '@server-utils/verifyAccessToken';
import { Router } from 'express';

const router = Router();

router.get(
  '/valid',
  async (req, res, next) => {
    try {
      const cookie = req.cookies['Authorization'];
      if (!cookie) return next();
      const token = cookie.split(' ')[1];
      if (!token) return next();
      const _id = verifyAccessToken(token);
      if (!_id) return next();
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(401);
    }
  },
  refreshToken
);

export default router;
