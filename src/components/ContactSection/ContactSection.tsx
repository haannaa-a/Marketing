import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import styles from './ContactSection.module.css';
import { ContactSectionConstant } from './ContactSection.constant.ts';
import List from '../List/List.tsx';
import Toast, { ToastInfo } from '../Toast/Toast.tsx';
import ContactForm from './ContactForm/ContactForm.tsx';
import RepeatContactForm from './RepeatContactForm/RepeatContactForm.tsx';
import { useState } from 'react';
import { TOAST_INFO } from '../../constants/DEFAULT_VALUES.ts';

const ContactSection = () => {
  const [toastInfo, setToastInfo] = useState<ToastInfo>(TOAST_INFO);
  const [submissionSuccessMessage, setSubmissionSuccessMessage] = useState('');

  const handleResetContactMessage = () => setSubmissionSuccessMessage('');

  const { length } = submissionSuccessMessage;

  return (
    <ContentWrapper className={styles.container}>
      <div className={styles.containerTextContent}>
        <h2 className={styles.heading}>
          {ContactSectionConstant.header.title}
        </h2>
        <p className={styles.headerText}>
          {ContactSectionConstant.header.text}
        </p>
        <List listDataArray={ContactSectionConstant.list} />
      </div>
      <div
        className={`${styles.containerFormSection}${length ? styles.centeredElements : ''}`}
      >
        {length === 0 ? (
          <ContactForm
            onErrorSubmit={setToastInfo}
            onSuccessSubmit={setSubmissionSuccessMessage}
          />
        ) : (
          <RepeatContactForm
            submissionSuccessMessage={submissionSuccessMessage}
            onResetContactMessage={handleResetContactMessage}
          />
        )}
      </div>
      <Toast {...toastInfo} />
    </ContentWrapper>
  );
};

export default ContactSection;
