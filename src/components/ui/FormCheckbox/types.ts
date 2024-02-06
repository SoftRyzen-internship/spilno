import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type FormFieldProps = {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  ariaLabel: string;
  className?: string;
};
