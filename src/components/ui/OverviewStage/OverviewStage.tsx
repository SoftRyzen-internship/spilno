import { cn } from '@/utils/cn';

import CheckIcon from '~/icons/checkmark.svg';

import { OverviewStageProps } from './types';

export const OverviewStage: React.FC<OverviewStageProps> = ({
  title,
  desc,
  keySolutions,
  containerStyle,
}) => {
  return (
    <div className={containerStyle}>
      <h3
        className={cn(
          'font-geologica text-xl/[1.35] text-headline md:w-[212px] md:shrink-0 md:text-2xl/[1.35] xl:w-[485px] xl:text-[42px]/[1.35] smOnly:mb-6',
          { 'smOnly:mb-4': title === 'Рішення' },
          { 'mb-4 md:mx-auto md:text-center xl:mb-6': title === 'Результат' },
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          'text-sm/[1.5] text-primaryText md:text-base xl:text-2xl/[1.5]',
          {
            'max-w-[296px] md:order-last md:text-left md:text-sm/[1.5] xl:max-w-[493px] xl:xl:text-xl/[1.5] smOnly:mb-8':
              title === 'Рішення',
          },
        )}
      >
        {desc}
      </p>

      {keySolutions && (
        <ul className="space-y-6 md:row-span-3 xl:space-y-10">
          {keySolutions.map(keySolution => (
            <li key={keySolution.label} className="relative pl-[34px] xl:pl-14">
              <CheckIcon
                width={20}
                heigth={20}
                className="absolute left-0 top-0 size-5 text-accent md:size-6 xl:size-8"
              />

              <h4 className="mb-2 font-geologica text-base/[1.25] text-headline md:text-lg/[1.25] xl:text-2xl/[1.25]">
                {keySolution.label}
              </h4>

              <p className="text-sm/[1.5] text-primaryText xl:text-xl/[1.5]">
                {keySolution.summary}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
