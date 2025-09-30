export const NewsLetterSectionConstant = {
  content: {
    header: {
      title: 'Get the finest curated abstracts delivered weekly to your inbox',
    },
    list: [
      {
        id: 1,
        text: 'Exclusive access to new abstract images and collections',
        dataBefore: 'assets/img/svg/check.svg',
      },
      {
        id: 2,
        text: 'Unlock special promotions only for subscribers',
        dataBefore: 'assets/img/svg/check.svg',
      },
      {
        id: 3,
        text: 'Regular doses of artistic inspiration',
        dataBefore: 'assets/img/svg/check.svg',
      },
    ],
    form: {
      email: {
        id: 'email',
        placeholder: 'Enter your email',
        invalidMessage: 'Please enter a valid email address.',
        requiredMessage: 'Email address is required.',
      },
      button: 'Subscribe',
    },
    logo: 'We only send you the best! No spam.',
    img: {
      src: 'assets/img/subscribe.jpg',
      alt: 'subscribeImg',
    },
    toast: {
      success: 'Subscription successful! Please check your email to confirm.',
      error:
        'Failed to subscribe. Please ensure your email is correct or try again later.',
    },
  },
};
