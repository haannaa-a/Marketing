import Card from '../Card/Card.tsx';
import styles from './NewsLetterSection.module.css';
import { NewsLetterSectionConstant } from './NewsLetterSection.constant.ts';
import List from '../List/List.tsx';
import Form from './Form/Form.tsx';

const NewsLetterSection = () => {
  return (
    <Card>
      <div className={styles.containerContent}>
        <div className={styles.containerTextContent}>
          <h2 className={styles.heading}>
            {NewsLetterSectionConstant.content.header.title}
          </h2>
          <List data={NewsLetterSectionConstant.content.list} />
          <div className={styles.containerForm}>
            <Form
              buttonText={NewsLetterSectionConstant.content.form.button}
              placeholder={
                NewsLetterSectionConstant.content.form.email.placeholder
              }
              id={NewsLetterSectionConstant.content.form.email.id}
            />
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
    </Card>
  );
};

export default NewsLetterSection;
