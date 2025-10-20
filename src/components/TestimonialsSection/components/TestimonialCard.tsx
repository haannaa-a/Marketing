import styles from './TestimonialCard.module.css';
interface TestimonialCardProps {
  id: number;
  src: string;
  alt: string;
  cardTitle: string;
  cardSubTitle: string;
  cardText: string;
}

const TestimonialCard = ({
  id,
  src,
  alt,
  cardTitle,
  cardSubTitle,
  cardText,
}: TestimonialCardProps) => {
  return (
    <li key={id} className={styles.containerCard}>
      <header className={styles.cardHeader}>
        <div className={styles.imgWrapper}>
          <img src={src} alt={alt} />
        </div>
        <div className={styles.containerHeaderText}>
          <h3 className={styles.cardTitle}>{cardTitle}</h3>
          <span className={styles.cardSubTitle}>{cardSubTitle}</span>
        </div>
      </header>
      <p className={styles.cardText}>{cardText}</p>
    </li>
  );
};

export default TestimonialCard;
