export const ContactSectionConstant = {
  header: {
    title: 'Talk to our team',
    text: "We're committed to delivering the support you require to make your experience as smooth as possible.",
  },
  list: [
    {
      id: 1,
      text: '123 Maple Street, Springfield, IL, USA',
      dataBefore: 'assets/img/svg/building.svg',
      href: 'https://www.google.com/maps/search/123+Maple+Street,+Springfield,+IL,+USA/@39.6195732,-87.2741997,6z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      id: 2,
      text: '+1 (650) 555-0198',
      dataBefore: 'assets/img/svg/phone.svg',
      href: 'tel:+1 (650) 555-0198',
    },
    {
      id: 3,
      text: 'hello@abstractly.com',
      dataBefore: 'assets/img/svg/mail.svg',
      href: 'mailto:hello@abstractly.com',
    },
  ],
  form: {
    name: {
      id: 'name',
      placeholder: 'Your name',
      requiredMessage: 'Name is required.',
      label: 'Name',
    },
    email: {
      id: 'email',
      placeholder: 'example@example.com',
      invalidMessage: 'Please enter a valid email address.',
      requiredMessage: 'Email address is required.',
      label: 'Email',
    },
    message: {
      id: 'message',
      placeholder: 'Write your message...',
      requiredMessage: 'Message is required.',
      label: 'Message',
    },
  },
};
