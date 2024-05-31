import routes from '@client-utils/constants/routes';
import emailValidator from '@client-utils/validators/emaiValidator/emailValidator';
import passwordValidator from '@client-utils/validators/passwordValidator/passwordValidator';
import ErrorHandler from '@components/ErrorHandler/ErrorHandler';
import FormInput from '@components/FormInput/FormInput';
import useLogin from '@hooks/useLogin';
import PrimaryButton from '@ui/buttons/PrimaryButton/PrimaryButton';
import PrimaryLink from '@ui/links/PrimaryLink/PrimaryLink';

const LoginForm = () => {
  const [
    {
      formState: { errors },
      register,
    },
    { error, isError },
    submit,
  ] = useLogin();
  const { email, password } = errors;
  return (
    <div>
      <h3>Авторизация</h3>
      <form onSubmit={submit()}>
        <div className="mt-3">
          <FormInput
            error={email}
            {...register('email', emailValidator)}
            inputTitle="Электронная почта"
            placeholder="Электронная почта"
          />
        </div>
        <div className="my-3">
          <FormInput
            error={password}
            type="password"
            {...register('password', passwordValidator)}
            inputTitle="Пароль"
            placeholder="Пароль"
          />
        </div>
        <div className="flex items-center">
          <PrimaryButton type="submit">Войти</PrimaryButton>

          <div className="ml-3">
            <PrimaryLink to={`../${routes.registration}`}>
              Нет аккаунта?
            </PrimaryLink>
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

export default LoginForm;
