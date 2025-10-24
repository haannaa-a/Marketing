import styles from './CookieConsentModal.module.css';
import Button, { ButtonVariant } from '../../Button/Button.tsx';
import {
  CookieConsentModalConstants,
  CookieConsentName,
} from './CookieConsentModal.constants.ts';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import Toggle from '../../Toggle/Toggle.tsx';
import LocalStorage from '../../../services/localStorage.ts';

interface CookieConsentModalProps {
  isModalOpen: boolean;
  changeModalVisibility: Dispatch<SetStateAction<boolean>>;
}

const INITIAL_COOKIE_STATE = {
  [CookieConsentName.Essentials]: false,
  [CookieConsentName.Analytics]: true,
  [CookieConsentName.Marketing]: true,
};

const localStorage = new LocalStorage();

const CookieConsentModal = ({
  isModalOpen,
  changeModalVisibility,
}: CookieConsentModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [cookieData, setCookieData] = useState<Record<string, boolean>>(
    localStorage.getMulti(Object.keys(INITIAL_COOKIE_STATE)),
  );

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isModalOpen && dialog) {
      dialog.showModal();
    }
  }, [isModalOpen]);

  useEffect(() => {
    const localStorageValues = localStorage.getMulti(
      Object.keys(INITIAL_COOKIE_STATE),
    );

    if (!Object.keys(localStorageValues).length) {
      localStorage.setMulti(
        Object.keys(INITIAL_COOKIE_STATE),
        Object.values(INITIAL_COOKIE_STATE),
      );
    }
  }, []);

  const handleDialogClose = () => {
    dialogRef.current?.close();
    changeModalVisibility(false);
  };

  const handleChangeCookieState = (
    toggleName: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setCookieData((prevCookieData) => ({
      ...prevCookieData,
      [toggleName]: event.target.checked,
    }));
  };

  const handleSaveCookie = () => {
    localStorage.setMulti(Object.keys(cookieData), Object.values(cookieData));

    handleDialogClose();

    window.location.reload();
  };

  const handleDeclineAllCookie = () => {
    localStorage.setMulti(
      Object.keys(cookieData),
      Object.values(cookieData).map(() => false),
    );

    handleDialogClose();

    window.location.reload();
  };

  const handleAcceptAllCookie = () => {
    localStorage.setMulti(
      Object.keys(cookieData),
      Object.values(cookieData).map(() => true),
    );

    handleDialogClose();
  };

  if (!isModalOpen) return null;

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <div className={styles.contentContainer}>
        <ul className={styles.containerCookies}>
          {CookieConsentModalConstants.map(({ id, title, text }) => {
            return (
              <li className={styles.containerCookieInfo} key={id}>
                <div className={styles.containerCookieHeader}>
                  <h3 className={styles.header}>{title}</h3>
                  <span>
                    <Toggle
                      toggleState={cookieData}
                      onChange={(event) =>
                        handleChangeCookieState(title, event)
                      }
                      toggleName={title}
                    />
                  </span>
                </div>
                <p className={styles.text}>{text}</p>
              </li>
            );
          })}
        </ul>
        <form className={styles.form} method="dialog">
          <div className={styles.containerBtns}>
            <Button onClick={handleAcceptAllCookie} label={'Accept all'} />
            <Button
              onClick={handleSaveCookie}
              label={'Save'}
              variant={ButtonVariant.SECONDARY}
            />
          </div>
          <Button
            onClick={handleDeclineAllCookie}
            label={'Decline all'}
            variant={ButtonVariant.TERTIARY}
          />
        </form>
      </div>
    </dialog>
  );
};

export default CookieConsentModal;
