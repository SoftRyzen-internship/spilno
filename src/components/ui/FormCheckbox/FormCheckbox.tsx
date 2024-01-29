import { cn } from '@/utils/cn';

import { FormFieldProps } from './types';
import css from './FormCheckbox.module.css';

export const FormCheckbox: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  error,
  className,
  // error = { message: 'У тексті має бути не більше 500 символів.' },
}) => (
  <label
    className={cn(
      'relative flex items-center justify-start gap-x-4 hover:cursor-pointer focus:cursor-pointer',
      { 'hover:cursor-default focus:cursor-default': error },
      className,
    )}
  >
    <div className="relative size-6 ">
      <input
        className={cn(
          'size-6 shrink-0 appearance-none rounded-[4px] border border-strokeColor bg-transparent outline-none transition-colors checked:bg-accent',
          css.checkbox,
          { 'border-red': error },
        )}
        type="checkbox"
        disabled={!!error}
        aria-invalid={error ? 'true' : 'false'}
        {...register(name)}
      />
    </div>
    <p className="font-raleway text-xs/[1.6] text-black/80">{label}</p>
  </label>
);
