import Token from '@models/Token';
import { TResponseWithId } from '@server-types/responseBody';
import CreateTwoTokens from '@server-utils/createTwoTokens';
import { Request } from 'express';

const setTokens = async (_req: Request, res: TResponseWithId) => {
  try {
    const { _id } = res.locals;
    const [accesToken, refreshToken] = CreateTwoTokens({ _id });
    const token = new Token({ token: refreshToken, userId: _id });
    await token.save();
    res.cookie(`refreshToken`, refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.cookie(`Authorization`, `Bearer ${accesToken}`, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
};

export default setTokens;
