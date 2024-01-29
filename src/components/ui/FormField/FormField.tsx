import { cn } from '@/utils/cn';

import ErrorIcon from '~/icons/error.svg';

import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  placeholder,
  name,
  register,
  error,
  //   error = { message: 'Введена адреса електронної пошти недійсна. ' },
}) => (
  <label className="relative flex flex-col pb-4 text-sm/[1.3] text-primaryText/70">
    <p className="mb-[9px]">
      {label} <span className="text-accent">*</span>
    </p>
    <input
      className={cn(
        'mb-2 rounded-[10px] border-[1px] border-transparent bg-lightBg px-4 py-[18.5px] text-sm/[1.5] font-light transition-colors placeholder:text-greyText',
        { 'border-red': error },
      )}
      type={type}
      placeholder={placeholder}
      aria-invalid={error ? 'true' : 'false'}
      {...register(name)}
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
