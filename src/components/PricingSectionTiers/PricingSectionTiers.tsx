import { PricingSectionTiersConstant } from './PricingSectionTiers.constant.ts';
import styles from './PricingSectionTiers.module.css';
import Button, { ButtonVariant } from '../Button/Button.tsx';
import TierCard from './Tier/TierCard.tsx';
import { useState } from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import ContentHeader from '../ContentHeader/ContentHeader.tsx';

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
    <ContentWrapper>
      <ContentHeader
        subTitle={PricingSectionTiersConstant.header.subTitle}
        title={PricingSectionTiersConstant.header.title}
        text={PricingSectionTiersConstant.header.text}
      />
      <div className={styles.containerToggleButtons}>
        {Object.values(SubscriptionType).map((type) => (
          <Button
            key={PricingSectionTiersConstant.toggleButtons[type]}
            label={PricingSectionTiersConstant.toggleButtons[type]}
            variant={
              subscriptionType === type
                ? ButtonVariant.TERTIARY
                : ButtonVariant.SECONDARY
            }
            onClick={() => setSubscriptionType(type)}
            disabled={subscriptionType === type}
          />
        ))}
      </div>
      <ul className={styles.containerTiers}>
        {Object.values(Plans).map((plan) => (
          <TierCard
            key={tierContent[plan].title}
            isActive={plan === Plans.POPULAR}
            additionalCardInfo={
              plan === Plans.POPULAR ? tierContent[plan].additionalCardInfo : ''
            }
            {...tierContent[plan]}
          />
        ))}
      </ul>
    </ContentWrapper>
  );
};

export default PricingSectionTiers;
