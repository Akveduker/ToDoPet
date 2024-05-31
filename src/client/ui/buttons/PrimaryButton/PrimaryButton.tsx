import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
type TPrimaryButtonProps = {
  styleType?: 'small';
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const PrimaryButton: FC<TPrimaryButtonProps> = ({
  children,
  styleType,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        ` bg-secondary text-fontSecondary rounded-md
      hover:bg-secondaryHover transition`,
        { 'p-1.5': styleType === 'small' },
        { 'p-3': styleType === undefined }
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
