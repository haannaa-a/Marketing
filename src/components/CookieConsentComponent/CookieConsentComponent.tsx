import Button, { ButtonVariant } from '../Button/Button.tsx';

import styles from './CookieConsentComponent.module.css';
import CookieConsentModal from './components/CookieConsentModal.tsx';
import { useEffect, useState } from 'react';
import LocalStorage from '../../services/localStorage.ts';
import { CookieConsentName } from './components/CookieConsentModal.constants.ts';

const localStorage = new LocalStorage();

const CookieConsentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    function loadScript() {
      const previousEssentialConsent = localStorage.get(
        CookieConsentName.Essentials,
      );
      const previousMarketingConsent = localStorage.get(
        CookieConsentName.Marketing,
      );
      const previousAnalyticsConsent = localStorage.get(
        CookieConsentName.Analytics,
      );

      if (previousEssentialConsent === 'true') {
        addScript('js/essentials.js');
      }
      if (previousMarketingConsent === 'true') {
        addScript('js/marketing.js');
      }
      if (previousAnalyticsConsent === 'true') {
        addScript('js/analytics.js');
      }
    }

    function addScript(src: string) {
      let script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.onload = () => console.log(`${src} has been loaded successfully.`);
      document.head.appendChild(script);
    }

    loadScript();
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.containerText}>
          <h2 className={styles.header}>We use cookies</h2>
          <p className={styles.text}>
            We use cookies to enhance your browsing experience and improve our
            website's performance. By continuing to use this site, you consent
            to the use of cookies. To learn more about how we use cookies and
            your options, please read our{' '}
            <a className={styles.link} href={'#'}>
              cookie policy.
            </a>
          </p>
        </div>
        <div className={styles.containerAllBtns}>
          <Button label={'Decline all'} variant={ButtonVariant.TERTIARY} />
          <div className={styles.containerBtns}>
            <Button label={'Allow cookies'} />
            <Button
              label={'Manage cookies'}
              variant={ButtonVariant.SECONDARY}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </footer>
      <CookieConsentModal
        isModalOpen={isModalOpen}
        changeModalVisibility={setIsModalOpen}
      />
    </>
  );
};

export default CookieConsentComponent;
