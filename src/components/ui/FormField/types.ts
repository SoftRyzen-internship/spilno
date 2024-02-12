import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required: boolean;
  className?: string;
};
