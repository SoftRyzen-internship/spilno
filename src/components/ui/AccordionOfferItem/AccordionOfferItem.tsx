'use client';

import Image from 'next/image';
import { Tab, Transition } from '@headlessui/react';

import { RingedImage } from '../RingedImage';
import { cn } from '@/utils/cn';

import ArrowIcon from '~/icons/arrow.svg';

import { AccordionOfferItemProps } from './types';

import styles from './AccordionOfferItem.module.css';

export const AccordionOfferItem: React.FC<AccordionOfferItemProps> = ({
  data,
  index,
  aria,
}) => {
  return (
    <Tab
      key={`${data.title}${index}`}
      as={'li'}
      className={
        'mb-6 outline-none last:mb-0 md:w-[329px] xl:mb-8 xl:w-[493px]'
      }
    >
      {({ selected }) => (
        <>
          <div
            className={cn(
              {
                'max-h-[140px] md:max-h-[178px] xl:max-h-[192px]': selected,
                'max-h-[40px]': !selected,
              },
              'ui-selected:outline-none duration-800 transition-all',
            )}
          >
            <h3
              className={cn(
                'relative flex justify-between pb-4',
                'mb-6 cursor-pointer font-geologica text-base font-light leading-[1.25] text-headline',
                'md:mb-0 md:inline-block md:p-0 md:text-[20px] md:leading-[1.2] md:text-greyText',
                'last:mb-0 xl:text-[28px]',
                styles.line,
                {
                  'pb-2 text-accent after:bg-accent last:mb-0 md:mb-6 md:pb-2.5 md:text-accent md:after:block xl:pb-3.5':
                    selected,
                },
              )}
            >
              {data.title}

              <ArrowIcon
                className={cn(
                  'md:hidden',
                  {
                    'rotate-[180deg]': !selected,
                  },
                  'text-accent transition-all',
                  'h-6 w-6 flex-shrink-0 md:h-5 md:w-5',
                )}
                aria-label={aria}
              />
            </h3>

            {selected && (
              <p
                className={cn(
                  'font-raleway text-[14px] font-normal leading-[1.5] text-primaryText md:text-[16px] xl:text-[20px]',
                  { 'max-h-[84px] md:max-h-[120px]': selected },
                  'transition duration-300',
                  styles.fade,
                )}
              >
                {data.description}
              </p>
            )}
          </div>
          <Transition
            show={selected}
            enter="transition duration-1000"
            enterFrom="opacity-0"
            enterTo=" opacity-100"
            leave="transition duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {selected && (
              <RingedImage
                variant="right"
                className="absolute right-0 top-1/2 hidden -translate-y-1/2 after:hidden md:block"
              >
                <Image
                  src={data.image}
                  width={596}
                  height={596}
                  alt={data.title}
                  loading="lazy"
                  className="md:size-[330px] xl:size-[596px]"
                />
              </RingedImage>
            )}
          </Transition>
        </>
      )}
    </Tab>
  );
};
