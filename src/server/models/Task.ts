import { ITask } from '@generic-types/task/task';
import { Schema, model } from 'mongoose';

const taskSchema = new Schema<ITask>({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20,
    trim: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  columnId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  deskId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

const Task = model('Task', taskSchema);

export default Task;
