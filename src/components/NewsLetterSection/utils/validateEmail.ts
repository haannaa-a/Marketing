import { NewsLetterSectionConstant } from '../NewsLetterSection.constant.ts';
import { isEmailValid } from '../../../utils/isEmailValid.ts';

export const validateEmail = (email: string): string => {
  if (!email.trim().length) {
    return NewsLetterSectionConstant.content.form.email.requiredMessage;
  }

  if (!isEmailValid(email)) {
    return NewsLetterSectionConstant.content.form.email.invalidMessage;
  }

  return '';
};
