import { IDesk } from '@generic-types/desk/desk';
import { Schema, model } from 'mongoose';

const deskSchema = new Schema<IDesk>({
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
});

const Desk = model('Desk', deskSchema);

export default Desk;
