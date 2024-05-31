import Column from '@models/Column';
import Desk from '@models/Desk';
import Task from '@models/Task';
import isUserAuthenticated from '@server-middlewares/isUserAuthenticated';
import {
  TColumnRequest,
  TColumnRequestWithBody,
  TColumnRequestWithId,
  TColumnRequestWithIdAndBody,
} from '@server-types/column';
import { TResponseWithId } from '@server-types/responseBody';
import errorMessage from '@server-utils/errorMessage';

import { Router } from 'express';
import { ObjectId } from 'mongodb';

const router = Router();

router.get(
  '/:deskId',
  isUserAuthenticated,
  async (req: TColumnRequest, res: TResponseWithId) => {
    try {
      const { _id: userId } = res.locals;
      const { deskId } = req.params;
      if (!ObjectId.isValid(deskId)) {
        return res.status(403).json(errorMessage('Неверный формат id'));
      }
      const columns = await Column.find({ deskId, userId }).select('name _id');
      const desk = await Desk.findById(deskId);
      if (!columns || !desk) {
        return res.status(404).json(errorMessage('Доски не существует'));
      }
      if (!columns.length) {
        return res.json({ deskName: desk.name, columns: [] });
      }
      res.json({ deskName: desk.name, columns });
    } catch (e) {
      res.status(500).json(errorMessage('Неизвестная ошибка'));
    }
  }
);

router.post(
  '/',
  isUserAuthenticated,
  async (req: TColumnRequestWithBody, res: TResponseWithId) => {
    try {
      const { _id: userId } = res.locals;
      const { name, deskId } = req.body;
      if (!name) {
        return res.status(400).json(errorMessage('У Колонки дожно быть имя'));
      }
      const count = await Column.countDocuments({ deskId });
      const column = new Column({ userId, name, order: count, deskId });
      await column.save();
      const response = {
        name: column.name,
        _id: column._id,
      };
      res.json(response);
    } catch (e) {
      res.status(400).json({ message: 'Ошибка сохранения' });
    }
  }
);

router.delete(
  '/:columnId',
  isUserAuthenticated,
  async (req: TColumnRequestWithId, res: TResponseWithId) => {
    try {
      const { _id: userId } = res.locals;
      const { columnId } = req.params;
      await Column.deleteOne({ userId, _id: columnId });
      await Task.deleteMany({ columnId, userId });
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  }
);

router.patch(
  '/:columnId',
  isUserAuthenticated,
  async (req: TColumnRequestWithIdAndBody, res: TResponseWithId) => {
    try {
      const { _id: userId } = res.locals;
      const { columnId } = req.params;
      const column = await Column.findOneAndUpdate(
        { _id: columnId, userId },
        req.body,
        { new: true }
      ).select('name _id');
      res.json(column);
    } catch (e) {
      res.sendStatus(500);
    }
  }
);

export default router;
