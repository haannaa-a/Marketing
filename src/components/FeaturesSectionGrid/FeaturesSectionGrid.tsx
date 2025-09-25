import styles from './FeaturesSectionGrid.module.css';
import { FeaturesSectionGridConstant } from './FeaturesSectionGrid.constant.ts';
import Card from '../Card/Card.tsx';
import Header from '../Header/Header.tsx';

const FeaturesSectionGrid = () => {
  return (
    <Card>
      <Header
        subTitle={FeaturesSectionGridConstant.header.subTitle}
        title={FeaturesSectionGridConstant.header.title}
        text={FeaturesSectionGridConstant.header.text}
      />
      <ul className={styles.grid}>
        {FeaturesSectionGridConstant.grid.map((el) => (
          <li className={styles.listItem} key={el.id}>
            <span
              className={styles.listItemIcon}
              style={{ backgroundImage: `url(${el.dataBefore})` }}
            />
            <h3 className={styles.listItemTitle}>{el.title}</h3>
            <span className={styles.listItemText}>{el.text}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default FeaturesSectionGrid;
