import { TFormData } from '@/components/base/ContactUsForm/schema';
import { FieldError, Control } from 'react-hook-form';

export type FormListboxProps = {
  label: string;
  placeholder: string;
  variants: string[];
  name: string;
  control: Control<TFormData>;
  error: FieldError | undefined;
};
