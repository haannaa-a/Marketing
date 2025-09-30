import styles from './Card.module.css';
import { ReactNode } from 'react';

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <main className={styles.container}>{children}</main>;
};

export default ContentWrapper;
