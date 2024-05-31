import { TColumnWithId } from '@generic-types/column/column';
import Task from '@models/Task';

const createColumnWithTasks = async (
  columns: Pick<TColumnWithId, 'name' | '_id' | 'order'>[]
) => {
  const result = await Promise.all(
    columns.map(async (column) => {
      const tasks = await Task.find({ columnId: column._id }).sort({
        order: 1,
      });
      return {
        _id: column._id,
        name: column.name,
        order: column.order,
        tasks,
      };
    })
  );
  return result;
};

export default createColumnWithTasks;
