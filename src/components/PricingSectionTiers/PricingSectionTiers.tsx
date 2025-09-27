import Header from '../Header/Header.tsx';
import Card from '../Card/Card.tsx';
import { PricingSectionTiersConstant } from './PricingSectionTiers.constant.ts';
import styles from './PricingSectionTiers.module.css';
import Button, { buttonVariant } from '../Button/Button.tsx';
import TierCard from './Tier/TierCard.tsx';
import { useState } from 'react';

enum SubscriptionType {
  MONTHLY = 'monthly',
  ANNUAL = 'annually',
}

enum Plans {
  BASIC = 'basicPlan',
  POPULAR = 'mostPopular',
  PREMIUM = 'premiumPlan',
}

const PricingSectionTiers = () => {
  const [subscriptionType, setSubscriptionType] = useState<SubscriptionType>(
    SubscriptionType.MONTHLY,
  );

  const tierContent =
    subscriptionType === SubscriptionType.MONTHLY
      ? PricingSectionTiersConstant.monthly
      : PricingSectionTiersConstant.annually;

  return (
    <Card>
      <Header
        subTitle={PricingSectionTiersConstant.header.subTitle}
        title={PricingSectionTiersConstant.header.title}
        text={PricingSectionTiersConstant.header.text}
      />
      <div className={styles.containerToggleButtons}>
        {Object.values(SubscriptionType).map((type) => (
          <Button
            key={PricingSectionTiersConstant.toggleButtons[type]}
            text={PricingSectionTiersConstant.toggleButtons[type]}
            variant={
              subscriptionType === type
                ? buttonVariant.TERTIARY
                : buttonVariant.SECONDARY
            }
            onClick={() => setSubscriptionType(type)}
            disabled={subscriptionType === type}
          />
        ))}
      </div>
      <div className={styles.containerTiers}>
        {Object.values(Plans).map((plan) => (
          <TierCard
            key={tierContent[plan].title}
            title={tierContent[plan].title}
            info={tierContent[plan].planInfo}
            price={tierContent[plan].price}
            period={tierContent[plan].period}
            priceInfo={tierContent[plan].priceInfo}
            listData={tierContent[plan].list}
            isActive={plan === Plans.POPULAR ? true : false}
            additionalCardInfo={
              plan === Plans.POPULAR ? tierContent[plan].additionalCardInfo : ''
            }
          />
        ))}
      </div>
    </Card>
  );
};

export default PricingSectionTiers;
