import { TChangeTaskOrderBody } from '@generic-types/task/task';
import Task from '@models/Task';
import isUserAuthenticated from '@server-middlewares/isUserAuthenticated';
import { TRequestBody } from '@server-types/requestBody';
import { TResponseWithId } from '@server-types/responseBody';
import {
  TTaskRequestWithColumnId,
  TTaskRequestWithBody,
  TTaskRequestWithId,
  TTaskRequestWithIdAndBody,
} from '@server-types/task';
import errorMessage from '@server-utils/errorMessage';

import { Router } from 'express';

const router = Router();

router.get(
  '/:columnId',
  isUserAuthenticated,
  async (req: TTaskRequestWithColumnId, res: TResponseWithId) => {
    try {
      const { _id: userId } = res.locals;
      const { columnId } = req.params;
      const tasks = await Task.find({ columnId, userId }).select(
        'name description _id order columnId'
      );
      res.json(tasks);
    } catch (e) {
      res.sendStatus(500);
    }
  }
);

router.post(
  '/',
  isUserAuthenticated,
  async (req: TTaskRequestWithBody, res: TResponseWithId) => {
    try {
      const { _id: userId } = res.locals;
      const { deskId, columnId } = req.body;
      const count = await Task.countDocuments({ deskId, columnId });
      const task = new Task({
        userId,
        ...req.body,
        status: false,
        order: count,
        columnId,
      });
      await task.save();
      return res.sendStatus(200);
    } catch (e) {
      res.send(500).json(errorMessage('Неизвестная ошибка'));
    }
  }
);

router.delete(
  '/:taskId',
  isUserAuthenticated,
  async (req: TTaskRequestWithId, res: TResponseWithId) => {
    try {
      const { _id: userId } = res.locals;
      const { taskId } = req.params;
      await Task.deleteOne({ _id: taskId, userId });
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  }
);

router.patch(
  '/:taskId',
  isUserAuthenticated,
  async (req: TTaskRequestWithIdAndBody, res: TResponseWithId) => {
    try {
      const { _id: userId } = res.locals;
      const { taskId } = req.params;
      const column = await Task.findOneAndUpdate(
        { _id: taskId, userId },
        req.body,
        {
          new: true,
        }
      ).select('name description _id order columnId');
      res.json(column);
    } catch (e) {
      res.sendStatus(500);
    }
  }
);
router.post(
  '/order',
  isUserAuthenticated,
  async (req: TRequestBody<TChangeTaskOrderBody>, res: TResponseWithId) => {
    try {
      const { oldId, oldOrder, newId, newOrder } = req.body;
      await Task.findOneAndUpdate({ _id: oldId }, { order: oldOrder });
      await Task.findOneAndUpdate({ _id: newId }, { order: newOrder });
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(500);
    }
  }
);
export default router;
