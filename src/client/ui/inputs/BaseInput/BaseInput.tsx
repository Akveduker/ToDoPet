import { DetailedHTMLProps, FC, InputHTMLAttributes, forwardRef } from 'react';

const BaseInput: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = forwardRef((props, ref) => {
  return (
    <input
      className="p-1 rounded-md w-full outline-none border border-secondary"
      {...props}
      ref={ref}
    />
  );
});

export default BaseInput;
