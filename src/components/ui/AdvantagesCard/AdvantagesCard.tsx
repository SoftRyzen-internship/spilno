import IconAdvantage01 from '~/images/advantages/advantages-01.svg';
import IconAdvantage02 from '~/images/advantages/advantages-02.svg';
import IconAdvantage03 from '~/images/advantages/advantages-03.svg';
import IconAdvantage04 from '~/images/advantages/advantages-04.svg';

import { AdvantagesCardProps } from './types';

export const AdvantagesCard: React.FC<AdvantagesCardProps> = ({ data }) => {
  let Icon;

  if (data.idx === 'f-01') {
    Icon = IconAdvantage01;
  }
  if (data.idx === 1) {
    Icon = IconAdvantage02;
  }
  if (data.idx === 2) {
    Icon = IconAdvantage03;
  }
  if (data.idx === 3) {
    Icon = IconAdvantage04;
  }

  return (
    <div className="w-full text-center">
      {/* <div className="relative size-[90px] md:size-[130px] xl:size-[152px]"> */}
      <Icon
        width={90}
        height={90}
        alt={data.title}
        // fill
        className="mx-auto mb-8 size-[90px] rounded-full md:size-[130px] xl:size-[152px]"
        // sizes=''
      />
      {/* </div> */}
      <h3 className="mb-3">{data.title}</h3>
      <p className="">{data.description}</p>
    </div>
  );
};
