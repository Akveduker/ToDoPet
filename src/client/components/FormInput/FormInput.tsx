import BaseInput from '@ui/inputs/BaseInput/BaseInput';
import { DetailedHTMLProps, FC, InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface IFormInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  inputTitle: string;
  error: FieldError | undefined;
}

const FormInput: FC<IFormInputProps> = forwardRef(
  ({ inputTitle, error, ...props }, ref) => {
    return (
      <label>
        <p className="mb-1.5">
          <b>{inputTitle}</b>
        </p>
        <BaseInput {...props} ref={ref} />
        {error && <p className="mt-1.5 text-fontError">{error.message}</p>}
      </label>
    );
  }
);

export default FormInput;
