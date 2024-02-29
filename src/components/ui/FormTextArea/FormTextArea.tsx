'use client';

import { useEffect, useState } from 'react';

import { FormError } from '@/components/ui';

import { cn } from '@/utils/cn';
import { useViewportSize } from '@/utils/useWindowSize';

import { FormFieldProps } from './types';

export const FormTextArea: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  name,
  register,
  errors,
  required = false,
  className = '',
}) => {
  const { width } = useViewportSize();
  const [formattedPlaceholder, setFormattedPlaceholder] = useState(placeholder);

  useEffect(() => {
    if (width && width < 400) {
      const shortPlaceholder = placeholder
        .split(' ')
        .slice(0, 26)
        .join(' ')
        .concat('...');
      setFormattedPlaceholder(shortPlaceholder);
    } else {
      setFormattedPlaceholder(placeholder);
    }
  }, [width, placeholder]);

  return (
    <label
      className={cn(
        'relative flex flex-col text-sm/[1.3] text-primaryText/70 md:text-base/[1.6]',
        className,
      )}
    >
      <span className="block text-primaryText/70 md:mb-1 smOnly:mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </span>

      <textarea
        className={cn(
          'mb-2 h-[150px] w-full resize-none rounded-[10px] border-[1px] border-transparent bg-lightBg p-4 text-sm/[1.5] font-light text-primaryText transition placeholder:text-sm/[1.5] placeholder:text-greyText focus:outline-none focus-visible:border-accent smOnly:focus-visible:text-base/[1.5]',
          { 'border-red': errors[name] },
        )}
        rows={5}
        placeholder={formattedPlaceholder}
        aria-invalid={errors[name] ? 'true' : 'false'}
        {...register(name)}
      />

      <FormError errors={errors} name={name} />
    </label>
  );
};
