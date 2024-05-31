const passwordValidator = {
  required: 'Обязательное поле',
  minLength: {
    value: 6,
    message: 'Пароль слишком короткий',
  },
};
export default passwordValidator;
