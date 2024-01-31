import { FieldError, UseFormRegister } from 'react-hook-form';

import { TFormData } from '@/components/base/ContactUsForm/schema';

export type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<TFormData>;
  error: FieldError | undefined;
};
