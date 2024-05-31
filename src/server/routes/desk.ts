import { IDesk, TCreateDeskData } from '@generic-types/desk/desk';
import Column from '@models/Column';
import Desk from '@models/Desk';
import Task from '@models/Task';
import isUserAuthenticated from '@server-middlewares/isUserAuthenticated';
import { TRequestWithDeskId } from '@server-types/desk';
import { TRequestBody } from '@server-types/requestBody';
import { TResponseWithId } from '@server-types/responseBody';
import createColumnWithTasks from '@server-utils/createColumnWithTasks';
import errorMessage from '@server-utils/errorMessage';

import { Router } from 'express';

const router = Router();

router.get(
  '/:deskId',
  isUserAuthenticated,
  async (req: TRequestWithDeskId, res: TResponseWithId) => {
    try {
      const { deskId } = req.params;
      const { _id: userId } = res.locals;
      const desk = await Desk.findOne({ _id: deskId, userId }, 'name _id');
      const columns = await Column.find({ deskId }).sort({ order: 1 });
      const columnsWithTasks = await createColumnWithTasks(columns);

      const response = {
        desk,
        columns: columnsWithTasks,
      };
      return res.json(response);
    } catch (e) {
      res.send(500).json(errorMessage('Неизвестная ошибка'));
    }
  }
);

router.post(
  '/',
  isUserAuthenticated,
  async (req: TRequestBody<TCreateDeskData>, res: TResponseWithId) => {
    try {
      const { _id: userId } = res.locals;
      const { name } = req.body;
      if (!name) {
        return res.status(400).json(errorMessage('У доски дожно быть имя'));
      }

      const desk = new Desk({ name, userId });
      await desk.save();
      const response = {
        name: desk.name,
        _id: desk._id,
      };
      res.json(response);
    } catch (e) {
      res.status(500).json(errorMessage('Неизвестная ошибка'));
    }
  }
);

router.delete(
  '/:deskId',
  isUserAuthenticated,
  async (req: TRequestWithDeskId, res: TResponseWithId) => {
    try {
      const { deskId } = req.params;
      const { _id: userId } = res.locals;
      await Desk.deleteOne({ _id: deskId, userId });
      await Column.deleteMany({ deskId, userId });
      await Task.deleteMany({ deskId, userId });
      res.sendStatus(200);
    } catch (e) {
      res.status(500).json(errorMessage('Неизвестная ошибка'));
    }
  }
);

router.patch(
  '/:deskId',
  isUserAuthenticated,
  async (
    req: TRequestWithDeskId<Pick<IDesk, 'name'>>,
    res: TResponseWithId
  ) => {
    try {
      const { deskId } = req.params;
      const desk = await Desk.findByIdAndUpdate(deskId, req.body, {
        new: true,
      }).select('name _id');
      res.json(desk);
    } catch (e) {
      res.sendStatus(500);
    }
  }
);

export default router;
