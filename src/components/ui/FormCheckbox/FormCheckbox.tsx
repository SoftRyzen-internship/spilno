'use client';

import { cn } from '@/utils/cn';
import content from '@/data/contactUs.json';

import CheckIcon from '~/icons/checkmark.svg';

import { FormFieldProps } from './types';
import css from './FormCheckbox.module.css';

export const FormCheckbox: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  errors,
  className = '',
}) => {
  const { ariaLabel } = content.form.checkbox;
  return (
    <label
      className={cn(
        'relative flex items-center justify-start gap-x-4 hover:cursor-pointer focus:cursor-pointer',
        className,
      )}
    >
      <div className="relative flex size-6 items-center justify-center">
        <input
          className={cn(
            'size-6 shrink-0 appearance-none rounded-[4px] border border-strokeColor bg-transparent outline-none transition-colors checked:bg-accent hover:cursor-pointer focus:cursor-pointer',
            css.checkbox,
            { 'border-red': errors[name] },
          )}
          type="checkbox"
          aria-invalid={errors[name] ? 'true' : 'false'}
          {...register(name)}
        />

        <CheckIcon
          className="absolute hidden size-4 text-white opacity-0 transition-opacity"
          aria-label={ariaLabel}
        />
      </div>

      <span className="block font-raleway text-xs/[1.6] text-black/80 md:text-base/[1.6]">
        {label}
      </span>
    </label>
  );
};
