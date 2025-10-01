import styles from './Input.module.css';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  validationError: string;
}

const Input = ({ validationError, ...props }: InputProps) => {
  return (
    <div className={styles.containerInput}>
      <input className={styles.input} aria-label={props.id} {...props} />
      {validationError && (
        <label className={styles.error}>{validationError}</label>
      )}
    </div>
  );
};

export default Input;
