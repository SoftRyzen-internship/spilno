import { FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export type FormData = {
  name: string;
  phone: string;
  telegram: string;
  email: string;
  referralSource: string;
  comments: string;
  agreement: boolean;
};

export type FormDropdownProps = {
  label: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  error: FieldError | undefined;
};

export type ValidFieldNames = 'referralSource';
