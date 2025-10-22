import styles from './LogoMarqueeSection.module.css';
import LogoStrip from './components/LogoStrip.tsx';

const LogoMarqueeSection = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Used by teams that you love</h2>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          <LogoStrip />
          <LogoStrip aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default LogoMarqueeSection;
