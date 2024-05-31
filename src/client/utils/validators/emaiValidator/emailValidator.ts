import { RegisterOptions } from 'react-hook-form';

const emailValidator: RegisterOptions = {
  required: 'Обязательное поле',
  pattern: {
    value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
    message: 'Неверный формат электронной почты',
  },
  minLength: {
    value: 6,
    message: 'Электронная почта слишком короткая',
  },
  maxLength: {
    value: 30,
    message: 'Электронная почта слишком длинная',
  },
};

export default emailValidator;
