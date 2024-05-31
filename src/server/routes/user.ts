import Desk from '@models/Desk';
import User from '@models/User';
import isUserAuthenticated from '@server-middlewares/isUserAuthenticated';
import { TResponseWithId } from '@server-types/responseBody';
import { Router } from 'express';

const router = Router();

router.get('/user', isUserAuthenticated, async (_, res: TResponseWithId) => {
  try {
    const { _id: userId } = res.locals;
    const user = await User.findById(userId, 'name email');
    const desks = await Desk.find({ userId }, 'name _id');
    if (!user || !desks) {
      return res.send(404).json({ message: 'Пользователь не найден' });
    }

    res.json({ user, desks });
  } catch (e) {
    res.send(404).json({ message: 'Неизвестная ошибка' });
  }
});

export default router;
