import { cn } from '@/utils/cn';

import { FormError } from '@/components/ui/FormError';

import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  placeholder,
  name,
  register,
  errors,
}) => (
  <label className="relative mb-4 flex flex-col text-sm/[1.3] text-primaryText/70">
    <p className="mb-[9px]">
      {label} <span className="text-accent">*</span>
    </p>
    <input
      className={cn(
        'relative mb-2 w-full cursor-pointer rounded-[10px] border-[1px] border-transparent bg-lightBg px-4 py-[17.5px] text-left text-sm/[1.5] font-light text-primaryText transition-colors placeholder:text-greyText focus:outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-offset-accent',
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
