'use client';

import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/utils/cn';
import { scrollAnimation } from '@/utils/scrollAnimation';

import css from './CooperationStageCard.module.css';

import { CooperationStageCardProps } from './types';

export const CooperationStageCard: React.FC<CooperationStageCardProps> = ({
  stageName,
  stageDescription,
}) => {
  const [active, setActive] = useState(false);

  const { ref, entry } = useInView({
    root: null,
    rootMargin: '0%',
    triggerOnce: false,
    threshold: 0.2,
    delay: 100,
  });

  const onActive = useCallback((status: boolean) => {
    setActive(status);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && entry) {
      const animation = function () {
        const options = { entry, isTracking: false, onActive };
        window.requestAnimationFrame(function () {
          scrollAnimation(options);
        });
      };
      document.addEventListener('scroll', animation);
      return function () {
        document.removeEventListener('scroll', animation);
      };
    }
  }, [entry, onActive]);

  return (
    <li
      className={cn(
        'relative flex flex-col transition-colors last:z-20 md:flex-row md:items-start md:justify-center md:gap-[116px] xl:gap-[324px] smOnly:gap-6 smOnly:first:ml-11',
        css.marker,
        { 'after:!border-accent': active },
      )}
      key={stageName}
      ref={ref}
    >
      <h3
        className={cn(
          'idx relative h-fit font-geologica text-[18px]/[1.3] text-greyText transition-colors md:basis-1/2 md:text-right md:text-[20px] xl:text-[34px]',
          { 'text-accent': active },
        )}
      >
        {stageName}
      </h3>
      <p className="text-[12px]/[1.5] text-primaryText md:w-[250px] md:basis-1/2 md:pt-[5px] md:text-left md:text-[14px] xl:w-[390px] xl:text-[16px]">
        {stageDescription}
      </p>
    </li>
  );
};
