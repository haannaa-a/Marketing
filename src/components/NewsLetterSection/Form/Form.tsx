import Input from './Input/Input.tsx';
import Button from '../../Button/Button.tsx';
import styles from './Form.module.css';

type FormProps = {
  buttonText: string;
  placeholder: string;
  id: string;
};

const Form = ({ buttonText, placeholder, id }: FormProps) => {
  return (
    <form className={styles.form}>
      <Input placeholder={placeholder} id={id} />
      <Button text={buttonText} />
    </form>
  );
};

export default Form;
