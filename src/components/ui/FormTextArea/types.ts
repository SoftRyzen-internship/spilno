import { FieldError, UseFormRegister } from 'react-hook-form';

import { TFormData } from '@/types';

export type FormFieldProps = {
  label: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<TFormData>;
  error: FieldError | undefined;
  className?: string;
};

// export type ValidFieldNames = 'projectDecription';
