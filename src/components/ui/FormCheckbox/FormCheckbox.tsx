'use client';

import { cn } from '@/utils/cn';

import CheckIcon from '~/icons/checkmark.svg';

import { FormFieldProps } from './types';

import css from './FormCheckbox.module.css';
import { TFormData } from '@/components/base/ContactUsForm/schema';

export const FormCheckbox: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  error,
  className,
  // error = { message: 'У тексті має бути не більше 500 символів.' },
}) => (
  <label
    className={cn(
      'relative flex items-center justify-start gap-x-4 hover:cursor-pointer focus:cursor-pointer',
      { 'hover:cursor-default focus:cursor-default': error },
      className,
    )}
  >
    <div className="relative flex size-6 items-center justify-center">
      <input
        className={cn(
          'size-6 shrink-0 appearance-none rounded-[4px] border border-strokeColor bg-transparent outline-none transition-colors checked:bg-accent hover:cursor-pointer focus:cursor-pointer',
          css.checkbox,
          { 'border-red': error },
        )}
        type="checkbox"
        disabled={!!error}
        aria-invalid={error ? 'true' : 'false'}
        {...register(name as keyof TFormData)}
      />
      <CheckIcon
        className="absolute hidden size-4 text-white opacity-0 transition-opacity"
        aria-label="checked"
      />
    </div>
    <p className="font-raleway text-xs/[1.6] text-black/80">{label}</p>
  </label>
);
