import routes from '@client-utils/constants/routes';
import emailValidator from '@client-utils/validators/emaiValidator/emailValidator';
import passwordValidator from '@client-utils/validators/passwordValidator/passwordValidator';
import ErrorHandler from '@components/ErrorHandler/ErrorHandler';
import FormInput from '@components/FormInput/FormInput';
import useRegistration from '@hooks/useRegistration';
import PrimaryButton from '@ui/buttons/PrimaryButton/PrimaryButton';
import PrimaryLink from '@ui/links/PrimaryLink/PrimaryLink';

const RegistrationForm = () => {
  const [
    {
      formState: { errors },
      register,
    },
    { error, isError },
    submit,
  ] = useRegistration();
  const { name, email, password } = errors;
  return (
    <div>
      <h3>Регистрация</h3>
      <form onSubmit={submit()}>
        <div className="mt-3">
          <FormInput
            error={name}
            {...register('name', {
              required: 'Обязательное поле',
              minLength: {
                value: 2,
                message: 'Имя слишком короткое',
              },
              maxLength: {
                value: 20,
                message: 'Имя слишком длинное',
              },
            })}
            inputTitle="Имя"
            placeholder="Имя"
          />
        </div>
        <div className="my-3">
          <FormInput
            error={email}
            {...register('email', emailValidator)}
            inputTitle="Электронная почта"
            placeholder="Электронная почта"
          />
        </div>
        <div className="mb-3">
          <FormInput
            error={password}
            type="password"
            {...register('password', passwordValidator)}
            inputTitle="Пароль"
            placeholder="Пароль"
          />
        </div>
        <div className="flex items-center">
          <PrimaryButton type="submit">Регистрация</PrimaryButton>

          <div className="ml-3">
            <PrimaryLink to={`../${routes.login}`}>Есть аккаунт?</PrimaryLink>
          </div>
        </div>
        {isError && (
          <div className="mt-3">
            <ErrorHandler error={error} />
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
