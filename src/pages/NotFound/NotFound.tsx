import styles from './NotFound.module.css';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper.tsx';
import Button from '../../components/Button/Button.tsx';
import { useNavigate } from 'react-router';

const NotFound = () => {
  let navigate = useNavigate();

  const handleRedirectToMain = () => {
    navigate('/');
  };

  return (
    <ContentWrapper className={styles.container}>
      <header className={styles.header}>
        <span className={styles.headerLabel}>Not found</span>
        <h1 className={styles.headerTitle}>We can’t find the page</h1>
        <p className={styles.headerSubtitle}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
      </header>
      <Button
        className={styles.redirectButton}
        label={'Back to Home'}
        onClick={handleRedirectToMain}
      />
    </ContentWrapper>
  );
};

export default NotFound;
