import { ValidityObj } from "./ValidityObj";

/**
 * validateText checks to see if string is not empty
 * @param text
 */

export function validateText(
  text: string,
): ValidityObj {
  if (!text.trim()) {
    return {
      isValid: false,
      error: "This field cannot be empty.",
    };
  }

  return {
    isValid: true,
  };
}