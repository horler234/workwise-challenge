import { ValidityObj } from "./ValidityObj";

/**
 * validatePhoneNumber checks if string is a valid phone number
 * @param phoneNumber
 */

export const validatePhoneNumber = (phoneNumber: string): ValidityObj => {
  // only digits
  const phone = phoneNumber.replace(/\D/g, "");
  // only normal 11 digit phones number
  if (phone.trim().length === 11) {
    return {
      isValid: true,
    };
  }

  return {
    isValid: false,
    error: "Enter a valid phone number",
  };
};
