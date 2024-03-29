import { FormError } from '@/components/ui';

import { cn } from '@/utils/cn';

import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  placeholder,
  name,
  register,
  errors,
  required = false,
  className = '',
}) => (
  <label
    className={cn(
      'relative flex flex-col text-sm/[1.3] text-primaryText/70 md:text-base/[1.6]',
      className,
    )}
  >
    <span className="block md:mb-1 smOnly:mb-2">
      {label} {required && <span className="text-accent">*</span>}
    </span>

    <input
      className={cn(
        'relative mb-2 w-full rounded-[10px] border-[1px] border-transparent bg-lightBg px-4 py-[17.5px] text-left text-sm/[1.5] font-light text-primaryText transition placeholder:text-sm/[1.5] placeholder:text-greyText focus:outline-none focus-visible:border-accent smOnly:focus-visible:py-4 smOnly:focus-visible:text-base/[1.5]',
        { 'border-red': errors[name] },
      )}
      type={type}
      placeholder={placeholder}
      aria-invalid={errors[name] ? 'true' : 'false'}
      {...register(name)}
    />

    <FormError name={name} errors={errors} />
  </label>
);
