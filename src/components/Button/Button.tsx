import styles from './Button.module.css';

export enum buttonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

type ButtonVariant =
  | buttonVariant.PRIMARY
  | buttonVariant.SECONDARY
  | buttonVariant.TERTIARY;

type Props = {
  text: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  text,
  variant = buttonVariant.PRIMARY,
  className,
  onClick,
  disabled,
}: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
