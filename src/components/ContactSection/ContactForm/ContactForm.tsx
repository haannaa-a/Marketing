import styles from './ContactForm.module.css';
import Input from '../../Form/Input/Input.tsx';
import { ContactSectionConstant } from '../ContactSection.constant.ts';
import Button from '../../Button/Button.tsx';
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import { validateEmail } from '../../NewsLetterSection/utils/validateEmail.ts';
import { escapeHtml } from '../../../utils/escapeHtml.ts';
import {
  initApiRequest,
  REQUEST_METHOD,
} from '../../../services/initApiRequest.ts';
import { ToastType, ToastInfo } from '../../Toast/Toast.tsx';
import Textarea from '../../Form/Textarea/Textarea.tsx';
import { API } from '../../../constants/API.ts';
import { toUpperCaseFirstLetter } from '../../../utils/toUpperCaseFirstLetter.ts';

interface ContactSectionResponse {
  message?: string;
  error?: string;
}

type ContactFormProps = {
  onSuccessSubmit: Dispatch<SetStateAction<string>>;
  onErrorSubmit: Dispatch<SetStateAction<ToastInfo>>;
};

const enum InputName {
  Name = 'name',
  Email = 'email',
  Message = 'message',
}
const DEFAULT_VALUES = {
  [InputName.Email]: '',
  [InputName.Name]: '',
  [InputName.Message]: '',
};

const ContactForm = ({ onErrorSubmit, onSuccessSubmit }: ContactFormProps) => {
  const [form, setForm] = useState(DEFAULT_VALUES);
  const [validationError, setValidationError] = useState(DEFAULT_VALUES);
  const [loading, setLoading] = useState(false);
  const { doApiRequest } = initApiRequest();

  const getValidationErrorByInputName = (inputName: string, value: string) => {
    switch (inputName) {
      case InputName.Name:
      case InputName.Message: {
        return value.length === 0
          ? `${toUpperCaseFirstLetter(inputName)} is required`
          : '';
      }
      case InputName.Email: {
        return validateEmail(value);
      }

      default: {
        return '';
      }
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    inputName: string,
  ) => {
    const error = getValidationErrorByInputName(inputName, event.target.value);
    setForm((value) => ({ ...value, [inputName]: event.target.value }));
    setValidationError((prev) => ({ ...prev, [inputName]: error }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailError = getValidationErrorByInputName(
      InputName.Email,
      form.email,
    );
    const nameError = getValidationErrorByInputName(InputName.Name, form.name);
    const messageError = getValidationErrorByInputName(
      InputName.Message,
      form[InputName.Message],
    );

    if (emailError || nameError || messageError) {
      setValidationError({
        email: emailError,
        name: nameError,
        message: messageError,
      });

      return;
    }

    try {
      setLoading(true);

      const data = await doApiRequest<ContactSectionResponse>(API.CONTACT, {
        body: {
          name: escapeHtml(form.name),
          email: escapeHtml(form.email),
          message: escapeHtml(form.message),
        },
        method: REQUEST_METHOD.Post,
      });

      if (data?.message) {
        onSuccessSubmit(data.message);
      }

      if (data?.error) {
        onErrorSubmit({ message: data.error, type: ToastType.Error });
      }

      setForm(DEFAULT_VALUES);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>...Loading</div>;

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.containerFormElements}>
        <div className={styles.inputsContainer}>
          <Input
            placeholder={ContactSectionConstant.form.name.placeholder}
            id={ContactSectionConstant.form.name.id}
            value={form.name}
            onChange={(event) => handleInputChange(event, InputName.Name)}
            validationError={validationError.name}
            label={ContactSectionConstant.form.name.label}
          />
          <Input
            placeholder={ContactSectionConstant.form.email.placeholder}
            id={ContactSectionConstant.form.email.id}
            type={'email'}
            value={form.email}
            onChange={(event) => handleInputChange(event, InputName.Email)}
            validationError={validationError.email}
            label={ContactSectionConstant.form.email.label}
          />
        </div>
        <div className={styles.textareaContainer}>
          <Textarea
            showSymbolsCounter
            placeholder={ContactSectionConstant.form.message.placeholder}
            onChange={(event) => handleInputChange(event, InputName.Message)}
            value={form.message}
            rows={5}
            maxLength={500}
            id={'message'}
            label={'Message'}
            validationError={validationError.message}
          />
        </div>
      </div>
      <Button className={styles.formButton} label={'Submit'} />
    </form>
  );
};

export default ContactForm;
