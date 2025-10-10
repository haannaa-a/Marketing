import styles from './Toast.module.css';
import { useEffect, useState } from 'react';

export const enum ToastType {
  Success = 'success',
  Error = 'error',
}

type GetToastStylesByTypeReturnType = {
  containerStyle: string;
  labelStyle: string;
  label: string;
};

export type ToastInfo = {
  message: string;
  type: ToastType;
};

const getToastStylesByType = (
  type: ToastType,
): GetToastStylesByTypeReturnType => {
  switch (type) {
    case ToastType.Error:
      return {
        containerStyle: styles.containerError,
        labelStyle: styles.labelError,
        label: 'Error',
      };

    case ToastType.Success:
      return {
        containerStyle: styles.containerSuccess,
        labelStyle: '',
        label: 'Success',
      };

    default:
      return {
        containerStyle: '',
        labelStyle: '',
        label: '',
      };
  }
};

type ToastProps = { message: string; type: ToastType };

const Toast = ({ message, type }: ToastProps) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    let timerId = undefined;

    if (message && type) {
      setIsShown(true);

      timerId = setTimeout(() => {
        setIsShown(false);
      }, 3000);
    }

    return () => clearTimeout(timerId);
  }, [message, type]);

  if (!isShown) return null;

  const { containerStyle, labelStyle, label } = getToastStylesByType(type);

  return (
    <div className={`${styles.container} ${containerStyle}`}>
      <span className={`${styles.label} ${labelStyle}`}>{label}</span>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
