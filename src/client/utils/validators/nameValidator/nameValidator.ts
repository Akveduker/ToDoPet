import { RegisterOptions } from 'react-hook-form';

const nameValidator: RegisterOptions = {
  required: 'Обязательное поле',
  minLength: {
    value: 1,
    message: 'Имя слишком короткое',
  },
  maxLength: {
    value: 20,
    message: 'Имя слишком длинное',
  },
};
export default nameValidator;
