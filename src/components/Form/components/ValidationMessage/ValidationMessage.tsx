import styles from './ValidationMessage.module.css';

type ValidationMessageProps = {
  id: string | undefined;
  validationError: string;
};

const ValidationMessage = ({ id, validationError }: ValidationMessageProps) => {
  return (
    <span
      id={`${id}-error-message`}
      aria-live={'assertive'}
      className={styles.error}
    >
      {validationError}
    </span>
  );
};

export default ValidationMessage;
