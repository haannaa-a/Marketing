import styles from './Textarea.module.css';
import { TextareaHTMLAttributes } from 'react';
import ValidationMessage from '../components/ValidationMessage/ValidationMessage.tsx';
import SymbolsCount from '../components/SymbolsCount/SymbolsCount.tsx';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  validationError: string;
  label?: string;
  symbolsCountLimit?: number;
  value: string;
  showSymbolsCounter?: boolean;
}

const SYMBOLS_COUNT_LIMIT = 500;

const Textarea = ({
  validationError,
  value,
  symbolsCountLimit = SYMBOLS_COUNT_LIMIT,
  label,
  showSymbolsCounter,
  id,
  ...props
}: TextareaProps) => {
  const { length } = value;
  const isOverSymbolsLimit = length >= symbolsCountLimit;

  return (
    <>
      <div className={styles.containerInput}>
        <label htmlFor={id}>Message</label>
        <textarea
          id={id}
          value={value}
          className={`${styles.textarea} ${isOverSymbolsLimit ? styles.borderError : ''}`}
          aria-label={id}
          aria-describedby={`${id}-error-message`}
          {...props}
        />
        {validationError && (
          <ValidationMessage id={id} validationError={validationError} />
        )}
      </div>
      {showSymbolsCounter && (
        <SymbolsCount value={length} limit={symbolsCountLimit} />
      )}
    </>
  );
};

export default Textarea;
