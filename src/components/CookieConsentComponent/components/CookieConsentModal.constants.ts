export const enum CookieConsentName {
  Essentials = 'Essentials',
  Analytics = 'Analytics',
  Marketing = 'Marketing',
}

export const CookieConsentModalConstants = [
  {
    id: 1,
    title: CookieConsentName.Essentials,
    text: 'These cookies are essential for the proper functioning of our services and cannot be disabled.',
  },
  {
    id: 2,
    title: CookieConsentName.Analytics,
    text: 'These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues.',
  },
  {
    id: 3,
    title: CookieConsentName.Marketing,
    text: 'These cookies allow us to show you advertisements relevant to you through our advertising partners.',
  },
];
