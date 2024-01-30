import { FieldError, Control } from 'react-hook-form';

import { TFormData } from '@/types';

export type FormListboxProps = {
  label: string;
  placeholder: string;
  variants: string[];
  name: string;
  control: Control<TFormData>;
  error: FieldError | undefined;
};

// export type ValidFieldNames = 'referralSource';
