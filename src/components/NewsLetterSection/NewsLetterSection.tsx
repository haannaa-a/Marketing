import styles from './NewsLetterSection.module.css';
import { NewsLetterSectionConstant } from './NewsLetterSection.constant.ts';
import List from '../List/List.tsx';
import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import Input from '../Input/Input.tsx';
import Button from '../Button/Button.tsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  initApiRequest,
  REQUEST_METHOD,
} from '../../services/initApiRequest.ts';
import { escapeHtml } from '../../utils/escapeHtml.ts';
import Toast, { ToastType } from '../Toast/Toast.tsx';
import { validateEmail } from './utils/validateEmail.ts';

const NEWS_LETTER_URL =
  'https://www.greatfrontend.com/api/projects/challenges/newsletter';

interface NewsSubscription {
  message?: string;
  error?: string;
}

const DEFAULT_TOAST_INFO = {
  message: '',
  type: ToastType.Success,
};

const NewsLetterSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [toastInfo, setToastInfo] = useState(DEFAULT_TOAST_INFO);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const error = validateEmail(event.target.value);

    setEmail(event.target.value);
    setValidationError(error);
  };

  const { doApiRequest } = initApiRequest();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = validateEmail(email);

    try {
      if (error) {
        setValidationError(error);

        return;
      }

      setLoading(true);

      const data = await doApiRequest<NewsSubscription>(NEWS_LETTER_URL, {
        body: { email: escapeHtml(email) },
        method: REQUEST_METHOD.Post,
      });

      if (data?.message) {
        setToastInfo({ message: data.message, type: ToastType.Success });
      }

      if (data?.error) {
        setToastInfo({ message: data.error, type: ToastType.Error });
      }

      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContentWrapper className={styles.containerNewsLetterSection}>
      <div className={styles.containerTextContent}>
        <h2 className={styles.heading}>
          {NewsLetterSectionConstant.content.header.title}
        </h2>
        <List listDataArray={NewsLetterSectionConstant.content.list} />
        <div className={styles.containerForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.containerEmailInput}>
              <Input
                placeholder={
                  NewsLetterSectionConstant.content.form.email.placeholder
                }
                id={NewsLetterSectionConstant.content.form.email.id}
                type={'email'}
                value={email}
                onChange={handleEmailChange}
                validationError={validationError}
              />
              <span className={styles.logo}>
                {NewsLetterSectionConstant.content.logo}
              </span>
            </div>
            <Button
              label={NewsLetterSectionConstant.content.form.button}
              disabled={loading || Boolean(validationError)}
            />
          </form>
        </div>
      </div>
      <div className={styles.containerImg}>
        <img {...NewsLetterSectionConstant.content.img} />
      </div>
      <Toast {...toastInfo} />
    </ContentWrapper>
  );
};

export default NewsLetterSection;
