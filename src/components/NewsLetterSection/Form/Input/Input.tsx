import styles from './Input.module.css';

type InputProps = {
  placeholder: string;
  id: string;
};

const Input = ({ placeholder, id }: InputProps) => {
  return (
    <input
      className={styles.input}
      id={id}
      type={'text'}
      placeholder={placeholder}
      aria-label={id}
    />
  );
};

export default Input;
