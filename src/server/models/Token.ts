import { Schema, Types, model } from 'mongoose';

const tokenShchema = new Schema({
  token: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: Types.ObjectId,
    required: true,
    trim: true,
  },
});

const Token = model('Token', tokenShchema);

export default Token;
