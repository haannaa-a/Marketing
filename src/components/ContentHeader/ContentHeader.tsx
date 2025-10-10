import styles from './Header.module.css';

type ContentHeaderProps = {
  subTitle: string;
  title: string;
  text: string;
  className?: string;
};

const ContentHeader = ({
  subTitle,
  title,
  text,
  className,
}: ContentHeaderProps) => {
  return (
    <header className={`${styles.cardHeader} ${className}`}>
      <span className={styles.headerLabel}>{subTitle}</span>
      <h1 className={styles.headerTitle}>{title}</h1>
      <p className={styles.headerSubtitle}>{text}</p>
    </header>
  );
};

export default ContentHeader;
