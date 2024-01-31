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
      'relative mb-4 flex flex-col text-sm/[1.3] text-primaryText/70',
      className,
    )}
  >
    <p className="mb-[9px] text-primaryText/70">
      {label} <span className="text-accent">*</span>
    </p>
    <textarea
      className={cn(
        'max-md:h-[150px] mb-2 w-full resize-none rounded-[10px] border-[1px] border-transparent bg-lightBg p-4 text-sm/[1.5] font-light text-primaryText outline-none transition-colors placeholder:text-greyText',
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
