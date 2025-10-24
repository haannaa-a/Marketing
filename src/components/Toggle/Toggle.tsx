import styles from './Toggle.module.css';
import { ChangeEvent } from 'react';

interface ToggleProps {
  toggleName: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  toggleState: Record<string, boolean>;
}

const Toggle = ({ toggleName, onChange, toggleState }: ToggleProps) => {
  return (
    <label htmlFor={toggleName} className={styles.switch}>
      <input
        onChange={onChange}
        id={toggleName}
        type="checkbox"
        checked={toggleState[toggleName]}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default Toggle;
