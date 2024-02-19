'use client';

import { SectionTitle, Button } from '@/components/ui';

import { cn } from '@/utils/cn';

import ArrowIcon from '~/icons/arrow.svg';

import data from '@/data/cooperation.json';

import css from './Cooperation.module.css';

import TrackImpression from '@/components/ui/Observer';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const initialColor = 'white';
const fillColor = 'blue';

export const Cooperation = () => {
  const [progress, setProgress] = useState(75);
  console.log('🚀 ~ Cooperation ~ progress:', `0.${progress.toFixed(0)}`);

  const { ref, entry } = useInView({
    root: null,
    rootMargin: '0%',
    triggerOnce: false,
    threshold: 0.2,
    delay: 100,
  });

  useEffect(() => {
    const colorize = () => {
      if (typeof window !== 'undefined' && entry) {
        const halfScreenHeight = window.innerHeight / 2;
        const rect = entry.target.getBoundingClientRect();
        const depthPx = rect.bottom - halfScreenHeight;
        const depthPercent = (depthPx * 100) / rect.height;
        const element = entry.target as HTMLElement;

        // setProgress(depthPercent);
        // ELEMENT CROSS THE CENTER VIEW
        if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
          // setActive(true);
          // element.style.background = 'linear-gradient(to top, '
          //   .concat(initialColor, ' ')
          //   .concat(String(depthPercent), '%, ')
          //   .concat(fillColor, ' ')
          //   .concat(String(depthPercent), '% 100%)');
          // element.style.transform = 'translateZ(0)';
        }
        // ELEMENT HAVE CROSSED THE CENTER VIEW
        if (rect.bottom < halfScreenHeight) {
          console.log('ELEMENT HAVE CROSSED THE CENTER VIEW');

          // element.style.background = fillColor;
          // element.style.transform = 'unset';
          // setActive(true);
        }
        // ELEMENT HAVE NOT CROSSED THE CENTER VIEW
        if (rect.top > halfScreenHeight) {
          // setActive(false);
          console.log('ELEMENT HAVE NOT CROSSED THE CENTER VIEW');
          // element.style.background = initialColor;
        }
      }
    };
    const animation = function () {
      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(function () {
          colorize();
        });
      }
    };
    document.addEventListener('scroll', animation);
    return function () {
      document.removeEventListener('scroll', animation);
    };
  }, [entry]);

  const { title, description, link, cooperationStages } = data;
  return (
    <section className="py-[60px]  md:py-[80px] xl:py-[120px]" id="cooperation">
      <div className="container relative flex flex-col md:items-center">
        <SectionTitle className="mb-4 xl:mb-6">{title}</SectionTitle>
        <p className="mb-20 leading-[1.5] text-primaryText md:mb-[123px] md:w-[469px] md:text-center md:text-[16px] xl:mb-[174px] xl:w-[596px] xl:text-[18px]">
          {description}
        </p>
        {/* <TrackImpression /> */}
        <ul
          ref={ref}
          className={cn(
            `relative mb-12 ml-[44px] flex h-[1228px] flex-col justify-between md:mb-[64px] md:ml-[100px] md:h-auto md:gap-[85px] xl:ml-[140px] xl:gap-[146px]`,
            css.progressBar,
            progress > 0
              ? 'after:!scale-y-[0.'.concat(progress.toFixed(0))
              : `after:!scale-y-50`,
            // { [`after:!scale-y-[0.${progress.toFixed(0)}]`]: progress > 0 },
          )}
        >
          {cooperationStages.map(({ stageName, stageDescription }) => {
            return (
              <li
                className=" flex flex-col gap-6 md:flex-row md:justify-end md:gap-[116px] xl:gap-[324px]"
                key={stageName}
              >
                <h3
                  className={cn(
                    'relative h-fit font-geologica text-[18px]/[1.3] text-greyText md:text-[20px] xl:text-[34px]',
                  )}
                >
                  {stageName}
                </h3>
                <p className="text-[12px]/[1.5] text-primaryText md:w-[250px] md:text-[14px] xl:w-[390px] xl:text-[16px]">
                  {stageDescription}
                </p>
              </li>
            );
          })}
        </ul>
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
