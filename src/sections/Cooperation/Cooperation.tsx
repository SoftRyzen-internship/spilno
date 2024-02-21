'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { SectionTitle, Button, CooperationStageCard } from '@/components/ui';

import { scrollAnimation } from '@/utils/scrollAnimation';

import data from '@/data/business-page.json';

import ArrowIcon from '~/icons/arrow.svg';

export const Cooperation = () => {
  const { ref, entry } = useInView({
    root: null,
    rootMargin: '0%',
    triggerOnce: false,
    threshold: 0.2,
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

  const { title, description, link, cooperationStages } = data.cooperation;

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
            className="absolute left-2 top-0 z-10 block h-[calc(100%-5rem)] w-1 bg-gradient-to-b from-white to-strokeColor to-10% transition-all md:left-1/2 md:-translate-x-1/2 xl:w-[6px]"
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
