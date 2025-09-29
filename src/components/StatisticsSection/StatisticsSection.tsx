import Header from '../Header/Header.tsx';
import Card from '../Card/Card.tsx';
import { StatisticsSectionConstant } from './StatisticsSection.constant.ts';
import styles from './StatisticsSection.module.css';

const StatisticsSection = () => {
  return (
    <Card>
      <Header
        subTitle={StatisticsSectionConstant.header.subTitle}
        title={StatisticsSectionConstant.header.title}
        text={StatisticsSectionConstant.header.text}
      />
      <div className={styles.containerContent}>
        <div className={styles.containerImg}>
          <img
            src={StatisticsSectionConstant.content.img.src}
            alt={StatisticsSectionConstant.content.img.alt}
          />
        </div>
        <div className={styles.containerTextPart}>
          <h2 className={styles.contentHeading}>
            {StatisticsSectionConstant.content.title}
          </h2>
          <ul className={styles.containerList}>
            {StatisticsSectionConstant.content.list.map((item) => (
              <li className={styles.containerListItem} key={item.id}>
                <h3 className={styles.listItemHeading}>{item.title}</h3>
                <p className={styles.listItemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default StatisticsSection;
