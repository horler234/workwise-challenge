import { validateEmail } from "./validateEmail";
import { validateText } from "./validateText";
import { validatePhoneNumber } from "./validatePhoneNumber";

type ValidateContactFormProps = {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  message: string;
};

type ContactFormValidityObj = {
  isValid: boolean;
  error?: {
    name?: string;
    email?: string;
    phoneNumber?: string;
    companyName?: string;
    message?: string;
  };
};

/**
 * validateContactForm checks if all fields in contact form to see if they are valid.
 *
 * Returns object with error messages for fields that contain errors.
 *
 */
export function validateContactForm({
  name,
  email,
  phoneNumber,
  companyName,
  message,
}: ValidateContactFormProps) {
  const e = validateEmail(email);
  const n = validateText(name);
  const p = validatePhoneNumber(phoneNumber);
  const c = validateText(companyName);
  const m = validateText(message);

  const v: ContactFormValidityObj = {
    isValid: true,
    error: undefined,
  };

  if (!e.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      email: e.error,
    };
  }

  if (!n.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      name: n.error,
    };
  }

  if (!p.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      phoneNumber: p.error,
    };
  }

  if (!c.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      companyName: c.error,
    };
  }

  if (!m.isValid) {
    v.isValid = false;
    v.error = {
      ...v.error,
      message: m.error,
    };
  }

  return v;
}
