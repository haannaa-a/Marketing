import { FeaturesSectionConstants } from './FeaturesSectionConstants.ts';
import styles from './FeaturesSection.module.css';
import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import ContentHeader from '../ContentHeader/ContentHeader.tsx';

const { feature_1, feature_2 } = FeaturesSectionConstants;

type FeaturesSectionProps = {
  isRightInPath: boolean;
};

function FeaturesSection({ isRightInPath }: FeaturesSectionProps) {
  const feature = isRightInPath ? feature_2 : feature_1;

  return (
    <ContentWrapper>
      <ContentHeader
        subTitle={feature.header.subTitle}
        title={feature.header.title}
        text={feature.header.text}
      />
      <div
        className={`${styles.containerCardContent} ${isRightInPath ? '' : styles.reverse}`}
      >
        <div className={styles.containerImage}>
          <img
            className={styles.img}
            src={feature.img.src}
            alt={feature.img.alt}
            loading={'lazy'}
          />
        </div>
        <ul className={styles.list}>
          {feature.list.map((item) => (
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
      </div>
    </ContentWrapper>
  );
}

export default FeaturesSection;
