import Checkbox from '@ui/icons/Checkbox/Checkbox';
import CheckboxChecked from '@ui/icons/CheckboxChecked/CheckboxChecked';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

type ICheckboxPrimaryProps = {
  isCheked: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const CheckboxPrimary: FC<ICheckboxPrimaryProps> = ({ isCheked, ...props }) => {
  return (
    <label>
      <input type="checkbox" {...props} className={'hidden'} />
      {isCheked ? <CheckboxChecked /> : <Checkbox />}
    </label>
  );
};

export default CheckboxPrimary;
