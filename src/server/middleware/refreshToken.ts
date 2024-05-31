import Token from '@models/Token';
import createAccessToken from '@server-utils/createAccessToken';
import verifyRefreshToken from '@server-utils/verifyRefreshToken';
import { Response, Request } from 'express';

const refreshToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) {
      throw new Error();
    }
    const token = await Token.exists({ token: refreshToken });
    if (!token) {
      throw new Error();
    }
    const _id = verifyRefreshToken(refreshToken);
    if (!_id) {
      throw new Error();
    }
    const accessToken = createAccessToken({ _id });
    res.cookie('Authorization', `Bearer ${accessToken}`);
    res.sendStatus(200);
  } catch (e) {
    res.clearCookie('refreshToken');
    res.clearCookie('Authorization');
    res.sendStatus(401);
  }
};

export default refreshToken;
