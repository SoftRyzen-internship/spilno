'use client';

import { FormError } from '@/components/ui/FormError';

import { cn } from '@/utils/cn';

import { FormFieldProps } from './types';

export const FormTextArea: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  name,
  register,
  errors,
  className,
}) => (
  <label
    className={cn(
      'relative flex flex-col text-sm/[1.3] text-primaryText/70 hover:cursor-pointer md:text-base/[1.6]',
      className,
    )}
  >
    <p className="text-primaryText/70 md:mb-1 smOnly:mb-2">
      {label} <span className="text-accent">*</span>
    </p>
    <textarea
      className={cn(
        'mb-2 h-[150px] w-full resize-none rounded-[10px] border-[1px] border-transparent bg-lightBg p-4 text-sm/[1.5] font-light text-primaryText transition-colors placeholder:text-greyText focus:outline-none focus-visible:border-accent',
        { 'border-red': errors[name] },
      )}
      rows={5}
      placeholder={placeholder}
      aria-invalid={errors[name] ? 'true' : 'false'}
      {...register(name)}
    />
    <FormError errors={errors} name={name} />
  </label>
);
