import { SectionTitle } from '@/components/ui';
import { Button } from '@/components/ui';

import { cn } from '@/utils/cn';

import ArrowIcon from '~/icons/arrow.svg';

import data from '@/data/cooperation.json';

import css from './Cooperation.module.css';

export const Cooperation = () => {
  const { title, description, link, cooperationStages } = data;
  return (
    <section className="py-[60px]  md:py-[80px] xl:py-[120px]" id="cooperation">
      <div
        className={`container relative flex flex-col md:items-center ${css.line}`}
      >
        <SectionTitle className="mb-4 xl:mb-6">{title}</SectionTitle>
        <p className="mb-20 leading-[1.5] text-primaryText md:mb-[123px] md:w-[469px] md:text-center md:text-[16px] xl:mb-[174px] xl:w-[596px] xl:text-[18px]">
          {description}
        </p>

        <ul
          className={`mb-12 ml-[44px] flex h-[1228px] flex-col justify-between md:mb-[64px] md:ml-[100px] md:h-auto md:gap-[85px] xl:ml-[140px] xl:gap-[146px] ${css.stagesList}`}
        >
          {cooperationStages.map(
            ({ stageName, stageDescription }, idx, arr) => {
              const isLast = idx === arr.length - 1;

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
            },
          )}
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
