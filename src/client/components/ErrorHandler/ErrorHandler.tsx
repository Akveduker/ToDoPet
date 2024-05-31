import { TAxiosErrorWithMessage } from '@client-types/api';
import TextError from '@ui/errors/TextError/TextError';
import { FC } from 'react';

interface IErrorHandlerProps {
  error: TAxiosErrorWithMessage;
}

const ErrorHandler: FC<IErrorHandlerProps> = ({ error }) => {
  const data = error.response?.data;
  return <TextError>{data ? data.message : 'Неизвестная ошибка'}</TextError>;
};

export default ErrorHandler;
