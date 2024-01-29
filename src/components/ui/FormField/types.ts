import { FieldError, UseFormRegister } from 'react-hook-form';

export type FormData = {
  name: string;
  phone: string;
  telegram: string;
  email: string;
  referralSource: string;
  comments: string;
  agreement: boolean;
};

export type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export type ValidFieldNames =
  | 'name'
  | 'phone'
  | 'telegram'
  | 'email'
  | 'referralSource'
