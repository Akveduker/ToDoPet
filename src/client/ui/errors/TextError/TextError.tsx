import { FC, PropsWithChildren } from 'react';

const TextError: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-fontError">{children}</p>;
};

export default TextError;
