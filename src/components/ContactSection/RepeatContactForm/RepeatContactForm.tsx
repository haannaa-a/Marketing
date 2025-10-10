import styles from './RepeatContactForm.module.css';
import Button, { ButtonVariant } from '../../Button/Button.tsx';
import CheckMarkIcon from '../../Icons/CheckMarkIcon.tsx';

type RepeatContactFormProps = {
  submissionSuccessMessage: string;
  onResetContactMessage: () => void;
};

const RepeatContactForm = ({
  submissionSuccessMessage,
  onResetContactMessage,
}: RepeatContactFormProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFormElements}>
        <div className={styles.containerImage}>
          <CheckMarkIcon />
        </div>
        <p className={styles.submissionSuccessMessage}>
          {submissionSuccessMessage}
        </p>
      </div>
      <Button
        className={`${styles.formButton}${styles.centeredElements}`}
        label={'Send another message'}
        onClick={onResetContactMessage}
        variant={ButtonVariant.SECONDARY}
      />
    </div>
  );
};

export default RepeatContactForm;
