import { FeaturesSectionConstants } from './FeaturesSectionConstants.ts';
import styles from './FeaturesSection.module.css';
import Card from '../Card/Card.tsx';
import Header from '../Header/Header.tsx';

const { feature_1, feature_2 } = FeaturesSectionConstants;

type Props = {
  isRightInPath: boolean;
};

function FeaturesSection({ isRightInPath }: Props) {
  const feature = isRightInPath ? feature_2 : feature_1;

  return (
    <Card>
      <Header
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
    </Card>
  );
}

export default FeaturesSection;
