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
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  className?: string;
};

export type ValidFieldNames = 'agreement';
