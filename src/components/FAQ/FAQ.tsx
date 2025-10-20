import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import { FAQConstants } from './FAQ.constants.ts';
import styles from './FAQ.module.css';
import Button from '../Button/Button.tsx';
import MinusIcon from '../Icons/MinusIcon.tsx';
import { useState } from 'react';
import PlusIcon from '../Icons/PlusIcon.tsx';

const FAQ = () => {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const handleShowAnswer = (id: number) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <ContentWrapper className={styles.mainContainer}>
      <header className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>{FAQConstants.header.title}</h2>
        <p className={styles.headerText}>{FAQConstants.header.text}</p>
      </header>
      <ul className={styles.questionsContainer}>
        {FAQConstants.questions.map(({ id, question, answer }) => {
          const isOpen = openQuestionId === id;

          return (
            <li className={styles.questionContainer} key={id}>
              <div className={styles.containerQuestionTitle}>
                <h4 className={styles.question}>{question}</h4>
                <button
                  className={styles.btnIcon}
                  onClick={() => handleShowAnswer(id)}
                >
                  {/*{isOpen ? <MinusIcon /> : <PlusIcon />}*/}
                  <MinusIcon />
                </button>
              </div>
              {/*{isOpen && <p className={styles.answer}>{answer}</p>}*/}
              <p className={styles.answer}>{answer}</p>
            </li>
          );
        })}
      </ul>
      <div className={styles.moreQuestionsContainer}>
        <div className={styles.moreQuestionsContainerText}>
          <h3 className={styles.moreQuestionsContainerTitle}>
            {FAQConstants.moreQuestions.title}
          </h3>
          <p className={styles.moreQuestionsContainerText}>
            Reach out to our{' '}
            <a className={styles.moreQuestionsLink} href={'#'}>
              customer support
            </a>{' '}
            team.
          </p>
        </div>
        <Button label={FAQConstants.moreQuestions.button} />
      </div>
    </ContentWrapper>
  );
};

export default FAQ;
