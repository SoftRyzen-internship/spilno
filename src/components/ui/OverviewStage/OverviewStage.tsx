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
      <h3 className="font-geologica text-2xl text-headline smOnly:mb-6">
        {title}
      </h3>

      <p
        className={cn('text-sm/[1.5] text-primaryText', {
          'smOnly:mb-8': keySolutions,
        })}
      >
        {desc}
      </p>

      {keySolutions && (
        <ul className="space-y-6">
          {keySolutions.map(keySolution => (
            <li key={keySolution.label} className="relative pl-[34px]">
              <CheckIcon
                width={20}
                heigth={20}
                className="absolute left-0 top-0 size-5 text-accent"
              />

              <h4 className="mb-2 font-geologica text-base/[1.25] text-headline">
                {keySolution.label}
              </h4>

              <p className="text-sm/[1.5] text-primaryText">
                {keySolution.summary}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
