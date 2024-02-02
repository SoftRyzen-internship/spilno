import { PatternFormat } from 'react-number-format';
import { Controller } from 'react-hook-form';

import { cn } from '@/utils/cn';

import { FormPhoneFieldProps } from './types';

export const FormPhoneField: React.FC<FormPhoneFieldProps> = ({
  label,
  placeholder,
  name,
  control,
  errors,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <label
          className={cn(
            'relative flex flex-col text-sm/[1.3] text-primaryText/70 hover:cursor-pointer md:text-base/[1.6]',
            className,
          )}
        >
          <p className="md:mb-1 smOnly:mb-2">
            {label} <span className="text-accent">*</span>
          </p>

          <PatternFormat
            name={field.name}
            type="tel"
            className={cn(
              'relative mb-2 w-full rounded-[10px] border-[1px] border-transparent bg-lightBg px-4 py-[17.5px] text-left text-sm/[1.5] font-light text-primaryText transition-colors placeholder:text-greyText focus:outline-none focus-visible:border-accent',
              { 'border-red': errors[name] },
            )}
            placeholder={placeholder}
            aria-invalid={errors[name] ? 'true' : 'false'}
            format="+############"
            value={field.value}
            onValueChange={values => field.onChange(values.formattedValue)}
          />
        </label>
      )}
    />
  );
};
