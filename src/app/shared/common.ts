import { FormControl } from "@angular/forms";
export const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const LINKEDIN_REGEXP =/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm
export function validateEmailFormControl(c: FormControl) {
  // tslint:disable:max-line-length
  // tslint:disable:prefer-const

  if (c.value) {
    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: false
    };
  }
  return null;
}
