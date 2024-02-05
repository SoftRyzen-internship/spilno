import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  className?: string;
};
