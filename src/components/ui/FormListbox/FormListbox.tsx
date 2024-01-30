'use client';

import { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import { Listbox, Transition } from '@headlessui/react';

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
  error = { message: 'Введена адреса електронної пошти недійсна.' },
  // error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="smOnly:mb-6">
          <Listbox
            value={field.value}
            onChange={field.onChange}
            name={field.name}
          >
            <Listbox.Label className="text-sm/[1.3] text-primaryText/70">
              <p className="mb-[9px]">
                {label} <span className="text-accent">*</span>
              </p>
            </Listbox.Label>
            <div className="relative">
              <Listbox.Button
                className={cn(
                  'relative w-full cursor-pointer rounded-[10px] border-[1px] border-transparent bg-lightBg px-4 py-[18.5px] text-left text-sm/[1.5] font-light focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-accent',
                  { 'border-red': error },
                )}
              >
                {({ open }) => (
                  <>
                    <span
                      className={cn('block', {
                        'text-primaryText/70': !field.value,
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
                  </>
                )}
              </Listbox.Button>

              <Transition
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute top-0 z-10 mt-0 w-full overflow-auto rounded-[10px] border-[1px] border-accent bg-lightBg ring-0 focus:outline-none focus-visible:border-accent">
                  <Listbox.Option
                    key={placeholder}
                    className="relative cursor-pointer select-none px-4 py-[18.5px] text-sm/[1.5] font-light"
                    value={field.value || placeholder}
                  >
                    <>
                      <span className={cn('block text-primaryText')}>
                        {field.value || placeholder}
                      </span>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primaryText">
                        <ArrowIcon
                          className="size-4 rotate-180"
                          aria-hidden="true"
                        />
                      </span>
                    </>
                  </Listbox.Option>

                  {variants.map((option, idx) => (
                    <Listbox.Option
                      key={idx}
                      className={({ active }) =>
                        cn(
                          'relative cursor-pointer select-none px-4 py-[18.5px] text-sm/[1.5] font-light',
                          { 'text-accent': active },
                        )
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={cn('block text-primaryText/70', {
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
          </Listbox>
        </div>
      )}
    />
  );
};
