'use client';

import { PatternFormat } from 'react-number-format';
import { Controller } from 'react-hook-form';

import { FormError } from '@/components/ui';

import { cn } from '@/utils/cn';

import { FormPhoneFieldProps } from './types';

export const FormPhoneField: React.FC<FormPhoneFieldProps> = ({
  label,
  placeholder,
  name,
  control,
  errors,
  required = false,
  className = '',
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <label
          className={cn(
            'relative flex flex-col text-sm/[1.3] text-primaryText/70 md:text-base/[1.6]',
            className,
          )}
        >
          <span className="block md:mb-1 smOnly:mb-2">
            {label} {required && <span className="text-accent">*</span>}
          </span>

          <PatternFormat
            type="tel"
            className={cn(
              'relative mb-2 w-full rounded-[10px] border-[1px] border-transparent bg-lightBg p-4 py-[17.5px] text-left text-sm/[1.5] font-light text-primaryText transition placeholder:text-sm/[1.5] placeholder:text-greyText focus:outline-none focus-visible:border-accent smOnly:focus-visible:py-4 smOnly:focus-visible:text-base/[1.5]',
              { 'border-red': errors[name] },
            )}
            placeholder={placeholder}
            aria-invalid={errors[name] ? 'true' : 'false'}
            format="+#############"
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            value={field.value}
          />
          <FormError name={name} errors={errors} />
        </label>
      )}
    />
  );
};
