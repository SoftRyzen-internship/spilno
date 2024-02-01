'use client';

import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Controller } from 'react-hook-form';

import { cn } from '@/utils/cn';

import ArrowIcon from '~/icons/arrow-down.svg';
import CheckIcon from '~/icons/checkmark.svg';

import { FormListboxProps } from './types';

export const FormListbox: React.FC<FormListboxProps> = ({
  label,
  name,
  placeholder,
  variants,
  control,
  errors,
  className = '',
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={className}>
          <Listbox
            value={field.value}
            onChange={field.onChange}
            name={field.name}
          >
            {({ open }) => (
              <>
                <Listbox.Label className="text-sm/[1.3] text-primaryText/70 md:text-base/[1.6]">
                  <p className="md:mb-1 smOnly:mb-2">
                    {label} <span className="text-accent">*</span>
                  </p>
                </Listbox.Label>
                <div className={cn('relative')}>
                  <Listbox.Button
                    className={cn(
                      'relative z-10 w-full cursor-pointer rounded-[10px] border-[1px] border-transparent bg-lightBg px-4 py-[17.5px] text-left text-sm/[1.5] font-light text-primaryText transition-all duration-300 focus:outline-none focus-visible:border-accent',
                      { 'border-red': errors[name] },
                      {
                        'border-transparent bg-transparent outline-transparent':
                          open,
                      },
                    )}
                  >
                    <span
                      className={cn('block text-primaryText', {
                        'text-greyText': !field.value,
                      })}
                    >
                      {field.value || placeholder}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <ArrowIcon
                        className={cn(
                          'size-4 text-primaryText transition-transform',
                          {
                            '-rotate-180': open,
                          },
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute top-0 z-[1] w-full overflow-auto rounded-[10px] border-[1px] border-accent bg-lightBg pt-[58px] focus:outline-none focus-visible:border-accent">
                      {variants.map((option, idx) => (
                        <Listbox.Option
                          key={idx}
                          className={({ active }) =>
                            cn(
                              'relative cursor-pointer select-none p-4 text-sm/[1.5] font-light text-primaryText/70 hover:text-accent',
                              { 'text-accent': active },
                            )
                          }
                          value={option}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={cn('block ', {
                                  'text-accent': selected,
                                })}
                              >
                                {option}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-accent">
                                  <CheckIcon
                                    className="size-4"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      )}
    />
  );
};
