'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { CooperationStageCard } from '@/components/ui/CooperationStageCard';
import { SectionTitle, Button } from '@/components/ui';

import { scrollAnimation } from '@/utils/scrollAnimation';
import { cn } from '@/utils/cn';

import data from '@/data/cooperation.json';

import ArrowIcon from '~/icons/arrow.svg';

import css from './Cooperation.module.css';

export const Cooperation = () => {
  const { ref, entry } = useInView({
    root: null,
    rootMargin: '0%',
    triggerOnce: false,
    threshold: 0.2,
    delay: 100,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && entry) {
      const animation = function () {
        const options = { entry, isTracking: true };

        window.requestAnimationFrame(function () {
          scrollAnimation(options);
        });
      };

      document.addEventListener('scroll', animation);

      return function () {
        document.removeEventListener('scroll', animation);
      };
    }
  }, [entry]);

  const { title, description, link, cooperationStages } = data;

  return (
    <section className="section" id="cooperation">
      <div className="container relative flex flex-col md:items-center">
        <SectionTitle className="mb-4 xl:mb-6">{title}</SectionTitle>

        <p className="mb-8 leading-[1.5] text-primaryText md:mb-12 md:w-[469px] md:text-center md:text-[16px] xl:mb-16 xl:w-[596px] xl:text-[18px]">
          {description}
        </p>

        <div className="relative mb-12 overflow-hidden pt-12 md:mb-16 md:w-full md:pt-20 xl:pt-[110px] smOnly:max-w-[360px]">
          <div
            ref={ref}
            className={cn(
              'absolute bottom-24 left-2 z-10 block h-full w-1 bg-strokeColor transition-all sm:bottom-24 md:bottom-[68px] md:left-1/2 md:-translate-x-1/2 xl:w-[6px]',
              css.progressBar,
            )}
          />

          <ul className="relative md:space-y-[85px] xl:space-y-[144px] smOnly:space-x-11 smOnly:space-y-24">
            {cooperationStages.map(({ stageName, stageDescription }) => (
              <CooperationStageCard
                key={stageName}
                stageName={stageName}
                stageDescription={stageDescription}
              />
            ))}
          </ul>
        </div>

        <Button
          className="smOnly:w-full"
          text={link.text}
          btnStyle="accent"
          link={link.path}
        >
          <ArrowIcon width="20" height="20" />
        </Button>
      </div>
    </section>
  );
};
