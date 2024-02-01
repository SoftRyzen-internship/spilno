import { FieldErrors, FieldValues, Control } from 'react-hook-form';

export type FormPhoneFieldProps = {
  label: string;
  placeholder: string;
  name: string;
  control: Control<FieldValues>;
  errors: FieldErrors;
  className?: string;
};
