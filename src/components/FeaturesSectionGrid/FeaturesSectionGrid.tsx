import styles from './FeaturesSectionGrid.module.css';
import { FeaturesSectionGridConstant } from './FeaturesSectionGrid.constant.ts';

const FeaturesSectionGrid = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <span className={styles.headerLabel}>
          {FeaturesSectionGridConstant.header.subTitle}
        </span>
        <h1 className={styles.headerTitle}>
          {FeaturesSectionGridConstant.header.title}
        </h1>
        <p className={styles.headerSubtitle}>
          {FeaturesSectionGridConstant.header.text}
        </p>
      </div>
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
    </div>
  );
};

export default FeaturesSectionGrid;
