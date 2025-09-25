import styles from './Card.module.css';
import { JSX, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props): JSX.Element => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default Card;
