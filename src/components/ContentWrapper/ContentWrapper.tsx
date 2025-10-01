import { ReactNode } from 'react';

type ContentWrapperProps = {
  children: ReactNode;
  className: string;
};

const ContentWrapper = ({ children, className }: ContentWrapperProps) => {
  return <main className={className}>{children}</main>;
};

export default ContentWrapper;
