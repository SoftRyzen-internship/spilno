'use client';

import { cn } from '@/utils/cn';

import ControlIcon from '~/icons/arrow-right.svg';

import data from '@/data/common.json';

import css from './SliderControls.module.css';

import { SliderControlsProps, Sections } from './types';

export const SliderControls: React.FC<SliderControlsProps> = ({
  section,
  wrapClassName,
}) => {
  const {
    sliderControls: {
      prevBtnAriaLabel,
      nextBtnAriaLabel,
      prevIconAriaLabel,
      nextIconAriaLabel,
    },
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
        <ControlIcon
          className={`rotate-180 ${css.controlIcon}`}
          aria-label={prevIconAriaLabel}
        />
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
        <ControlIcon
          className={css.controlIcon}
          aria-label={nextIconAriaLabel}
        />
      </button>
    </div>
  );
};
