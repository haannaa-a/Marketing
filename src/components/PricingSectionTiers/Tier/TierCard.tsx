import Button, { ButtonVariant } from '../../Button/Button.tsx';
import List from '../../List/List.tsx';
import { ListItemT } from '../../List/ListItem/ListItem.tsx';
import styles from './Tier.module.css';

type TierProps = {
  title: string;
  info: string;
  price: string;
  period: string;
  priceInfo: string;
  listData: ListItemT[];
  isActive?: boolean;
  additionalCardInfo?: string;
};
const TierCard = ({
  title,
  info,
  price,
  period,
  priceInfo,
  listData,
  isActive = false,
  additionalCardInfo,
}: TierProps) => {
  return (
    <li
      className={`${styles.container} ${isActive ? styles.containerActive : ''}`}
    >
      {isActive && (
        <div className={styles.additionalCardInfo}>{additionalCardInfo}</div>
      )}
      <div className={styles.containerTierContent}>
        <div className={styles.containerTierHeader}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.info}>{info}</p>
        </div>
        <div className={styles.containerPriceInfo}>
          <div
            className={`${styles.containerPrice} ${isActive ? styles.accentColor : ''}`}
          >
            <span className={styles.price}>{price}</span>
            <span className={styles.period}>/{period}</span>
          </div>
          <span>{priceInfo}</span>
        </div>
        <List listDataArray={listData} />
        <Button
          variant={isActive ? ButtonVariant.PRIMARY : ButtonVariant.SECONDARY}
          label={'Buy now'}
        />
      </div>
    </li>
  );
};

export default TierCard;
