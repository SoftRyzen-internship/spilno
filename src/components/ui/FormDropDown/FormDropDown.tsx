import { useState, useEffect } from 'react';

import { cn } from '@/utils/cn';

import ErrorIcon from '~/icons/error.svg';
import ArrowIcon from '~/icons/arrow-down.svg';

import { FormDropdownProps } from './types';

const selectOptions = ['Друзі', 'Лінкедін', 'Телеграм', 'Тікток', 'Інстаграм'];

export const FormDropdown: React.FC<FormDropdownProps> = ({
  label,
  placeholder,
  name,
  register,
  setValue,
  error,
  //   error = { message: 'Введена адреса електронної пошти недійсна. ' },
}) => {
  const [isOpen, SetIsOpen] = useState(false);
  const [option, SetOption] = useState<string | undefined>(undefined);

  const handleOption = (option: string) => {
    SetOption(option);
    setValue(option);
    SetIsOpen(false);
  };

  return (
    <label className="relative flex flex-col pb-4 text-sm/[1.3] text-primaryText/70">
      <p className="mb-[9px]">
        {label} <span className="text-accent">*</span>
      </p>
      <input name={name} type="checkbox" className="hidden" {...register} />
      <div className="relative">
        <button
          className={cn(
            'mb-2 flex w-full items-center justify-between rounded-[10px] border-[1px] border-transparent bg-lightBg px-4 py-[18.5px] text-left text-sm/[1.5] font-light  placeholder:text-greyText',
            { 'border-red': error },
          )}
          onClick={() => SetIsOpen(!isOpen)}
        >
          {option || placeholder}
          <ArrowIcon
            className={cn('size-4 text-primaryText transition-transform', {
              'rotate-180': isOpen,
            })}
            aria-label="open"
          />
        </button>

        {isOpen && (
          <ul className="flex w-full flex-col bg-lightBg">
            {selectOptions.map(option => (
              <li key={option} className="p-4">
                <button
                  type="button"
                  onClick={() => {
                    handleOption(option);
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
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
};
