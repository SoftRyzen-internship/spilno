'use client';

import { cn } from '@/utils/cn';

import CheckIcon from '~/icons/checkmark.svg';

import { FormFieldProps } from './types';
import css from './FormCheckbox.module.css';

export const FormCheckbox: React.FC<FormFieldProps> = ({
  id,
  label,
  name,
  register,
  errors,
  ariaLabel,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-start gap-x-4',
        className,
      )}
    >
      <div className="relative flex size-6 items-center justify-center">
        <input
          id={id}
          className={cn(
            'size-6 shrink-0 cursor-pointer appearance-none rounded-[4px] border border-strokeColor bg-transparent outline-none transition-colors checked:bg-accent',
            css.checkbox,
            { 'border-red': errors[name] },
          )}
          type="checkbox"
          aria-invalid={errors[name] ? 'true' : 'false'}
          {...register(name)}
        />

        <CheckIcon
          className="pointer-events-none absolute hidden size-4 cursor-pointer text-white opacity-0 transition-opacity"
          aria-label={ariaLabel}
        />
      </div>

      <label
        htmlFor={id}
        className="block cursor-pointer font-raleway text-xs/[1.6] text-black/80 md:text-base/[1.6]"
      >
        {label}
      </label>
    </div>
  );
};
