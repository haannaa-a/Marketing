import styles from './FeaturesSectionGrid.module.css';
import { FeaturesSectionGridConstant } from './FeaturesSectionGrid.constant.ts';
import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import ContentHeader from '../ContentHeader/ContentHeader.tsx';

const FeaturesSectionGrid = () => {
  return (
    <ContentWrapper>
      <ContentHeader
        subTitle={FeaturesSectionGridConstant.header.subTitle}
        title={FeaturesSectionGridConstant.header.title}
        text={FeaturesSectionGridConstant.header.text}
      />
      <ul className={styles.grid}>
        {FeaturesSectionGridConstant.grid.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <span
              className={styles.listItemIcon}
              style={{ backgroundImage: `url(${item.dataBefore})` }}
            />
            <h3 className={styles.listItemTitle}>{item.title}</h3>
            <span className={styles.listItemText}>{item.text}</span>
          </li>
        ))}
      </ul>
    </ContentWrapper>
  );
};

export default FeaturesSectionGrid;
