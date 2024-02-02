'use client';

import IconAdvantages01 from '~/images/advantages/advantages-01.svg';
import IconAdvantages02 from '~/images/advantages/advantages-02.svg';
import IconAdvantages03 from '~/images/advantages/advantages-03.svg';
import IconAdvantages04 from '~/images/advantages/advantages-04.svg';

import { AdvantagesCardProps } from './types';

export const AdvantagesCard: React.FC<AdvantagesCardProps> = ({ data }) => {
  const icons = [
    IconAdvantages01,
    IconAdvantages02,
    IconAdvantages03,
    IconAdvantages04,
  ];
  console.log(data, 'DATA');
  const Icon = icons[Number(data.idx) - 1];

  return (
    <div className="w-full text-center">
      {/* <div className="relative size-[90px] md:size-[130px] xl:size-[152px]"> */}
      <Icon
        width={90}
        height={90}
        className="mx-auto mb-8 size-[90px] rounded-full md:size-[130px] xl:size-[152px]"
      />
      {/* </div> */}
      <h3 className="mb-3">{data.title}</h3>
      <p className="">{data.description}</p>
    </div>
  );
};
