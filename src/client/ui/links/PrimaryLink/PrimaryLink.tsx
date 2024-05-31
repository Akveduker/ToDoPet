import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const PrimaryLink: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} className="hover:text-fontHover transition">
      {children}
    </Link>
  );
};

export default PrimaryLink;
