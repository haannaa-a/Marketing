import styles from './Input.module.css';
import { InputHTMLAttributes } from 'react';
import ValidationMessage from '../components/ValidationMessage/ValidationMessage.tsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  validationError: string;
  label?: string;
}

const Input = ({
  validationError,
  label,
  id,
  type = 'text',
  autoComplete = 'off',
  ...props
}: InputProps) => {
  return (
    <div className={styles.containerInput}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        className={styles.input}
        aria-label={id}
        aria-describedby={`${id}-error-message`}
        {...props}
      />
      {validationError && (
        <ValidationMessage id={id} validationError={validationError} />
      )}
    </div>
  );
};

export default Input;
