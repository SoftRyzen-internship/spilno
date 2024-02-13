'use client';

import IconFOP from '~/images/businessClients/fop-business.svg';
import IconSmallBusiness from '~/images/businessClients/small-business.svg';
import IconMediumBusiness from '~/images/businessClients/medium-business.svg';
import IconStartup from '~/images/businessClients/startup.svg';

import { BusinessClientCardProps } from './types';
import { cn } from '@/utils/cn';

export const BusinessClientCard: React.FC<BusinessClientCardProps> = ({
  id,
  title,
  description,
}) => {
  const icons = [IconFOP, IconSmallBusiness, IconMediumBusiness, IconStartup];

  const Icon = icons[Number(id) - 1];

  return (
    <div className="mx-auto w-full text-center xl:m-0 xl:max-w-[284px] xl:text-left smOnly:max-w-[288px] mdOnly:max-w-[244px]">
      <div className="mx-auto mb-6 flex size-[79px] items-center justify-center rounded-full bg-lightBg md:mb-8 xl:ml-0 xl:mr-auto">
        <Icon
          width={40}
          height={40}
          className={cn('size-10 text-accent', {
            'size-8': Number(id) === 1 || Number(id) === 4,
          })}
        />
      </div>

      <h3 className="mb-3 font-geologica text-base/5 text-headline md:mb-2 md:text-lg/[1.25] xl:text-2xl/[1.25]">
        {title}
      </h3>

      <p className="text-sm/[1.5] md:text-base xl:text-base/[1.6]">
        {description}
      </p>
    </div>
  );
};
