import styles from './Input.module.css';
import { InputHTMLAttributes } from 'react';

// export const enum InputType {
//   TEXT = 'text',
//   EMAIL = 'email',
// }

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // placeholder: string;
  // id: string;
  // type?: InputType;
}

// props
const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className={styles.input}
      // id={id}
      // placeholder={placeholder}
      aria-label={props.id}
      {...props}
    />
  );
};

export default Input;
