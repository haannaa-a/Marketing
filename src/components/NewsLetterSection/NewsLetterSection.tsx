import styles from './NewsLetterSection.module.css';
import { NewsLetterSectionConstant } from './NewsLetterSection.constant.ts';
import List from '../List/List.tsx';
import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import Input from '../Input/Input.tsx';
import Button from '../Button/Button.tsx';

const NewsLetterSection = () => {
  const handleSubmit = () => {};

  return (
    <ContentWrapper>
      <div className={styles.containerContent}>
        <div className={styles.containerTextContent}>
          <h2 className={styles.heading}>
            {NewsLetterSectionConstant.content.header.title}
          </h2>
          <List listDataArray={NewsLetterSectionConstant.content.list} />
          <div className={styles.containerForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <Input
                placeholder={
                  NewsLetterSectionConstant.content.form.email.placeholder
                }
                id={NewsLetterSectionConstant.content.form.email.id}
                type={'email'}
              />
              <Button label={NewsLetterSectionConstant.content.form.button} />
            </form>
            <span className={styles.logo}>
              {NewsLetterSectionConstant.content.logo}
            </span>
          </div>
        </div>
        <div className={styles.containerImg}>
          <img
            src={NewsLetterSectionConstant.content.img.src}
            alt={NewsLetterSectionConstant.content.img.alt}
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default NewsLetterSection;
