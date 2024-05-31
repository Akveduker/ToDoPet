import { IUser } from '@generic-types/user/user';
import { Schema, model } from 'mongoose';

const userShchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    maxlength: 30,
    minlength: 6,
    trim: true,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    min: 6,
    trim: true,
    required: true,
  },
});

const User = model('User', userShchema);

export default User;
