export const PricingSectionTiersConstant = {
  monthly: {
    basicPlan: {
      title: 'Basic Plan',
      planInfo: 'Access to a curated selection of abstract images',
      price: '$9.99/ month',
      priceInfo: 'Billed monthly',
      list: [
        {
          id: 1,
          text: 'Standard quality images',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 2,
          text: 'Limited to personal use',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 3,
          text: 'Email support',
          dataBefore: 'assets/img/svg/check.svg',
        },
      ],
      button: 'Buy now',
    },
    mostPopular: {
      additionalCardInfo: 'Most Popular',
      title: 'Standard Plan',
      planInfo: 'Next-level Integrations, priced economically',
      price: '$19.99/ month',
      priceInfo: 'Billed monthly',
      list: [
        {
          id: 1,
          text: 'Expanded library with more diverse abstract images',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 2,
          text: 'High-resolution images available',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 3,
          text: 'Suitable for commercial use',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 4,
          text: 'Priority email support',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 5,
          text: 'Advanced analytics',
          dataBefore: 'assets/img/svg/check.svg',
        },
      ],
      button: 'Buy now',
    },
    premiumPlan: {
      title: 'Premium Plan',
      planInfo: 'Experience limitless living for power users',
      price: '$29.99/ month',
      priceInfo: 'Billed monthly',
      list: [
        {
          id: 1,
          text: 'Full access to the entire image library, including exclusive content',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 2,
          text: 'Highest quality images, including premium collections',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 3,
          text: 'Commercial and resale rights',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 4,
          text: 'Dedicated customer support line',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 5,
          text: '24/7 support response time',
          dataBefore: 'assets/img/svg/check.svg',
        },
        {
          id: 6,
          text: 'Advanced analytics and insights',
          dataBefore: 'assets/img/svg/check.svg',
        },
      ],
      button: 'Buy now',
    },
  },
  annually: {
    basicPlan: {
      price: '$6.99/ month',
      priceInfo: 'Billed annually ($84)',
    },
    mostPopular: {
      price: '$15.99/ month',
      priceInfo: 'Billed annually ($192)',
    },
    premiumPlan: {
      price: '$25.99/ month',
      priceInfo: 'Billed annually ($312)',
    },
  },
};
