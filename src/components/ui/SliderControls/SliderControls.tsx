'use client';
/* eslint-disable tailwindcss/no-custom-classname */

import { cn } from '@/utils/cn';

import ControlIcon from '~/icons/arrow-right.svg';

import data from '@/data/common.json';

import css from './SliderControls.module.css';

import { Props, Sections } from './types';

const {
  sliderControls: { prevBtnArialabel, nextBtnArialabel },
} = data;

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
        aria-label={prevBtnArialabel}
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
        aria-label={nextBtnArialabel}
      >
        <ControlIcon className={css.controlIcon} />
      </button>
    </div>
  );
};
