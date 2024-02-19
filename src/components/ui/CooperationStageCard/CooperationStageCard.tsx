'use client';

import React from 'react';

import { cn } from '@/utils/cn';

import css from './Cooperation.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CooperationStageCardProps = any;

export const CooperationStageCard: React.FC<CooperationStageCardProps> = ({
  stageName,
  stageDescription,
  isLast,
}) => {
  return (
    <li
      className=" flex flex-col gap-6 md:flex-row md:justify-end md:gap-[116px] xl:gap-[324px]"
      key={stageName}
    >
      <h3
        className={cn(
          'relative h-fit font-geologica text-[18px]/[1.3] text-greyText md:text-[20px] xl:text-[34px]',
          css.stageTitle,

          { [css.lastStageTitle]: isLast },
        )}
      >
        {stageName}
      </h3>
      <p className="text-[12px]/[1.5] text-primaryText md:w-[250px] md:text-[14px] xl:w-[390px] xl:text-[16px]">
        {stageDescription}
      </p>
    </li>
  );
};
