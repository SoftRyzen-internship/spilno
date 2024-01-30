'use client';
/* eslint-disable tailwindcss/no-custom-classname */

import { cn } from '@/utils/cn';

import ControlIcon from '~/icons/arrow-right.svg';

import css from './SliderControls.module.css';

import { Props } from './types';

export const SliderControls: React.FC<Props> = ({ section, wrapClassName }) => {
  return (
    <div className={cn('flex gap-6', wrapClassName)}>
      <button
        className={cn(
          `slider-prev-btn-${section}`,
          'ctrlSliderBtn',
          css.controls,
        )}
        type="button"
      >
        <ControlIcon className="size-[16px] rotate-180 md:size-[24px]" />
      </button>
      <button
        className={cn(
          `slider-next-btn-${section}`,
          'ctrlSliderBtn',
          css.controls,
        )}
        type="button"
      >
        <ControlIcon className="size-[16px] md:size-[24px]" />
      </button>
    </div>
  );
};
