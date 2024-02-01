'use client';

import { cn } from '@/utils/cn';

import ControlIcon from '~/icons/arrow-right.svg';

import data from '@/data/common.json';

import css from './SliderControls.module.css';

import { Props, Sections } from './types';

export const SliderControls: React.FC<Props> = ({ section, wrapClassName }) => {
  const {
    sliderControls: { prevBtnAriaLabel, nextBtnAriaLabel },
  } = data;

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
        aria-label={prevBtnAriaLabel}
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
        aria-label={nextBtnAriaLabel}
      >
        <ControlIcon className={css.controlIcon} />
      </button>
    </div>
  );
};