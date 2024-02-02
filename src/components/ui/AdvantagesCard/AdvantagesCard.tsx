'use client';

import IconAdvantages01 from '~/images/advantages/advantages-01.svg';
import IconAdvantages02 from '~/images/advantages/advantages-02.svg';
import IconAdvantages03 from '~/images/advantages/advantages-03.svg';
import IconAdvantages04 from '~/images/advantages/advantages-04.svg';

import { AdvantagesCardProps } from './types';

export const AdvantagesCard: React.FC<AdvantagesCardProps> = ({
  id,
  title,
  description,
}) => {
  const icons = [
    IconAdvantages01,
    IconAdvantages02,
    IconAdvantages03,
    IconAdvantages04,
  ];

  const Icon = icons[Number(id) - 1];

  return (
    <div className="w-full text-center md:text-left">
      <Icon
        width={90}
        height={90}
        className="mx-auto mb-8 size-[90px] md:mb-10 md:ml-0 md:mr-auto md:size-[130px] xl:size-[152px]"
      />

      <h3 className="mb-3 font-geologica text-base/5 text-headline md:text-lg/[1.25] xl:text-2xl/[1.25]">
        {title}
      </h3>

      <p className="text-sm/[1.5] md:text-base xl:text-xl/[1.5]">
        {description}
      </p>
    </div>
  );
};
