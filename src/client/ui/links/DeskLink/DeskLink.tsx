import DeskIconDark from '@ui/icons/DeskIconDark/DeskIconDark';
import DeskIconLight from '@ui/icons/DeskIconLight/DeskIconLight';
import clsx from 'clsx';
import { FC, RefAttributes } from 'react';
import { Link, LinkProps, useMatch } from 'react-router-dom';

const DeskLink: FC<LinkProps & RefAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  const isCurrentPathActive = useMatch(props.to.toString());
  return (
    <Link
      className={clsx(
        'text-lg',
        'py-2.5',
        'inline-block',
        'px-8',
        'rounded-r-3xl',
        'text-center',
        { 'text-fontSecondary': isCurrentPathActive },
        { 'hover:bg-secondaryHover': isCurrentPathActive },
        { 'transition-all': isCurrentPathActive },
        {
          'bg-secondary': isCurrentPathActive,
        }
      )}
      {...props}
    >
      <div className="flex place-content-center">
        {isCurrentPathActive ? <DeskIconLight /> : <DeskIconDark />}
        <span className="ml-2.5">{children}</span>
      </div>
    </Link>
  );
};

export default DeskLink;
