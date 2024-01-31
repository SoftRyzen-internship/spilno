'use client';

import { cn } from '@/utils/cn';

import ErrorIcon from '~/icons/error.svg';

import { FormFieldProps } from './types';
import { TFormData } from '@/components/base/ContactUsForm/schema';

export const FormTextArea: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  name,
  register,
  error,
  className,
  // error = { message: 'У тексті має бути не більше 500 символів.' },
}) => (
  <label
    className={cn(
      'relative flex flex-col pb-4 text-sm/[1.3] text-primaryText/70',
      className,
    )}
  >
    <p className="mb-[9px] text-primaryText/70">
      {label} <span className="text-accent">*</span>
    </p>
    <textarea
      className={cn(
        'max-md:h-[150px] mb-2 w-full resize-none rounded-[10px] border-[1px] border-transparent bg-lightBg p-4 text-sm/[1.5] font-light outline-none transition-colors placeholder:text-greyText',
        { 'border-red': error },
      )}
      rows={5}
      placeholder={placeholder}
      aria-invalid={error ? 'true' : 'false'}
      {...register(name as keyof TFormData)}
    />
    {error && (
      <div className="flex items-center justify-start gap-1 text-red">
        <ErrorIcon className="inline-block size-4" aria-label="alert" />
        <p role="alert" className="text-xs/[1.25] font-medium">
          {error.message}
        </p>
      </div>
    )}
  </label>
);
