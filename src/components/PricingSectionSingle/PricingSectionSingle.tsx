import { PricingSectionSingleConstant } from './PricingSectionSingle.constant.ts';
import styles from './PricingSectionSingle.module.css';
import Button from '../Button/Button.tsx';
import List from '../List/List.tsx';
import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import ContentHeader from '../ContentHeader/ContentHeader.tsx';

const PricingSectionSingle = () => {
  return (
    <ContentWrapper>
      <ContentHeader
        subTitle={PricingSectionSingleConstant.header.subTitle}
        title={PricingSectionSingleConstant.header.title}
        text={PricingSectionSingleConstant.header.text}
      />
      <div className={styles.containerCardContent}>
        <div className={styles.containerCardText}>
          <h3 className={styles.contentTitle}>
            {PricingSectionSingleConstant.content.title}
          </h3>
          <List listDataArray={PricingSectionSingleConstant.content.list} />
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
          <Button label={PricingSectionSingleConstant.price.button} />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default PricingSectionSingle;
