import { FieldError, UseFormRegister } from 'react-hook-form';

import { TFormData } from '@/types';

export type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<TFormData>;
  error: FieldError | undefined;
};

// export type ValidFieldNames = 'userName' | 'phone' | 'telegram' | 'userEmail';
