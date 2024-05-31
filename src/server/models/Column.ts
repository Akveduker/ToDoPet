import { IColumn } from '@generic-types/column/column';
import { Schema, model } from 'mongoose';

const columnSchema = new Schema<IColumn>({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
    trim: true,
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

const Column = model('Column', columnSchema);

export default Column;
