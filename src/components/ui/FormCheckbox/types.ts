import { FieldError, UseFormRegister } from 'react-hook-form';

import { TFormData } from '@/components/base/ContactUsForm/schema';

export type FormFieldProps = {
  label: string;
  name: string;
  register: UseFormRegister<TFormData>;
  error: FieldError | undefined;
  className?: string;
};
