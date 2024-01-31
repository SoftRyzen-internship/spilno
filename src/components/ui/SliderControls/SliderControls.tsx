'use client';
/* eslint-disable tailwindcss/no-custom-classname */

import { cn } from '@/utils/cn';

import ControlIcon from '~/icons/arrow-right.svg';

import css from './SliderControls.module.css';

import { Props, Sections } from './types';

export const SliderControls: React.FC<Props> = ({ section, wrapClassName }) => {
  return (
    <div
      className={cn(
        'flex gap-6',
        { ['xl:hidden']: section === Sections.ADVANTAGES },
        wrapClassName,
      )}
    >
      <button
        className={cn(
          `slider-prev-btn-${section}`,
          'ctrlSliderBtn',
          css.controls,
        )}
        type="button"
      >
        <ControlIcon className={`rotate-180 ${css.controlIcon}`} />
      </button>
      <button
        className={cn(
          `slider-next-btn-${section}`,
          'ctrlSliderBtn',
          css.controls,
        )}
        type="button"
      >
        <ControlIcon className={css.controlIcon} />
      </button>
    </div>
  );
};
