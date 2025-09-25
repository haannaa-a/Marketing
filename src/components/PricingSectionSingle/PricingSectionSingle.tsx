import Card from '../Card/Card.tsx';
import Header from '../Header/Header.tsx';
import { PricingSectionSingleConstant } from './PricingSectionSingle.constant.ts';
import styles from './PricingSectionSingle.module.css';
import Button from '../Button/Button.tsx';

const PricingSectionSingle = () => {
  return (
    <Card>
      <Header
        subTitle={PricingSectionSingleConstant.header.subTitle}
        title={PricingSectionSingleConstant.header.title}
        text={PricingSectionSingleConstant.header.text}
      />
      <div className={styles.containerCardContent}>
        <div className={styles.containerCardText}>
          <h3 className={styles.contentTitle}>
            {PricingSectionSingleConstant.content.title}
          </h3>
          <ul className={styles.containerList}>
            {PricingSectionSingleConstant.content.list.map((el) => (
              <li className={styles.listItem} key={el.id}>
                <span
                  className={styles.listItemIcon}
                  style={{ backgroundImage: `url(${el.dataBefore})` }}
                />
                <span className={styles.listItemText}>{el.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.containerPrice}>
          <div className={styles.containerPriceContent}>
            <span className={styles.priceLabel}>
              {PricingSectionSingleConstant.price.label}
            </span>
            <h2 className={styles.price}>
              {PricingSectionSingleConstant.price.price}
            </h2>
            <p className={styles.currencyType}>
              {PricingSectionSingleConstant.price.currencyType}
            </p>
          </div>
          <p className={styles.priceText}>
            {PricingSectionSingleConstant.price.text}
          </p>
          <Button text={PricingSectionSingleConstant.price.button} />
        </div>
      </div>
    </Card>
  );
};

export default PricingSectionSingle;
