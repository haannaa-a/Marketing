import { FeaturesSectionConstants } from './FeaturesSectionConstants.ts';
import styles from './FeaturesSection.module.css';

const { feature_1, feature_2 } = FeaturesSectionConstants;

type Props = {
  isRightInPath: boolean;
};

function FeaturesSection({ isRightInPath }: Props) {
  const feature = isRightInPath ? feature_2 : feature_1;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <span className={styles.headerLabel}>{feature.header.subTitle}</span>
        <h1 className={styles.headerTitle}>{feature.header.title}</h1>
        <p className={styles.headerSubtitle}>{feature.header.text}</p>
      </div>
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
          {feature.list.map((el) => (
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
    </div>
  );
}

export default FeaturesSection;
