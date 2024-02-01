'use client';

import { Tab } from '@headlessui/react';

import { cn } from '@/utils/cn';

import ArrowIcon from '~/icons/arrow-down.svg';

import { AccordeonFAQItemProps } from './types';

import styles from './AccordeonFAQItem.module.css';

export const AccordeonFAQItem: React.FC<AccordeonFAQItemProps> = ({
  data,
  index,
  aria,
}) => {
  return (
    <Tab
      key={`${data.question}${index}`}
      as={'li'}
      className={'mb-2 outline-none last:mb-0 md:mb-0 xl:w-[596px]'}
    >
      {({ selected }) => (
        <div
          className={cn(
            'relative flex justify-between gap-x-8 py-4',
            'md:gap-x-6 md:py-6',
            styles.line,
          )}
        >
          <div
            className={cn(
              {
                'max-h-[364px] md:max-h-[255px] xl:max-h-[281px]': selected,
                'max-h-[66px] md:max-h-[54px]': !selected,
              },
              'ui-selected:outline-none duration-800 transition-all',
            )}
          >
            <h3
              className={cn(
                'cursor-pointer font-geologica text-base font-normal leading-[1.35] text-headline',
                'md:text-[20px]',
                { 'mb-6': selected },
              )}
            >
              {data.question}
            </h3>

            {selected && (
              <p
                className={cn(
                  'font-raleway text-[14px] font-normal leading-[1.6] text-primaryText',
                  'md:text-[16px]',
                  {
                    'max-h-[264px] md:max-h-[156px] xl:max-h-[182px]': selected,
                  },
                  'transition duration-300',
                  '[@media(max-width:320px)]:overflow-y-auto',
                  styles.fade,
                )}
              >
                {data.answer}
              </p>
            )}
          </div>

          <ArrowIcon
            className={cn(
              {
                'rotate-[180deg]': selected,
              },
              'transition-all',
              'h-4 w-4 flex-shrink-0 md:h-5 md:w-5',
            )}
            aria-label={aria}
          />
        </div>
      )}
    </Tab>
  );
};