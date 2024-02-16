import { cn } from '@/utils/cn';

import Cross from '~/icons/cross.svg';
import BracketsCheck from '~/icons/brackets-check.svg';
import Zap from '~/icons/zap.svg';

import { Props, CardNames } from './types';

import css from './ProblemCard.module.css';

export const ProblemCard: React.FC<Props> = ({
  title,
  text,
  cardName,
  idx,
}) => {
  const icons = [Cross, BracketsCheck, Zap];
  const Icon = icons[idx];

  return (
    <li className="flex w-[242px] flex-col items-center text-center md:w-[212px] xl:w-[360px]">
      <div
        className={cn(
          'mb-4 flex size-[50px] items-center justify-center border-2 border-solid border-lightBlue md:mb-6 xl:mb-12 xl:size-[104px]',
          {
            'rounded-[10px] xl:rounded-[27px]': cardName === CardNames.SOLUTION,
            'rounded-full border-accent bg-accent':
              cardName === CardNames.RESULT,
            [`${css.iconWrap} relative`]:
              cardName === CardNames.PROBLEM || cardName === CardNames.SOLUTION,
          },
        )}
      >
        <Icon
          width="23"
          height="23"
          className={cn('text-accent xl:size-12', {
            'text-white': cardName === CardNames.RESULT,
          })}
        />
      </div>

      <h3
        className={cn(
          'mb-2 font-geologica text-[16px]/[1.25] text-headline md:text-[18px] xl:mb-4 xl:text-[24px]',
          {
            'text-accent': cardName === CardNames.RESULT,
          },
        )}
      >
        {title}
      </h3>

      <p className="leading-[1.5] text-primaryText xl:text-[24px]">{text}</p>
    </li>
  );
};
