import styles from './Header.module.css';

type Props = {
  subTitle: string;
  title: string;
  text: string;
};

const Header = ({ subTitle, title, text }: Props) => {
  return (
    <div className={styles.cardHeader}>
      <span className={styles.headerLabel}>{subTitle}</span>
      <h1 className={styles.headerTitle}>{title}</h1>
      <p className={styles.headerSubtitle}>{text}</p>
    </div>
  );
};

export default Header;
