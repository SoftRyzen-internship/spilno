import Image from 'next/image';

import { cn } from '@/utils/cn';

import { ReviewerInfoCardProps } from './types';

export const ReviewerInfoCard: React.FC<ReviewerInfoCardProps> = ({
  author: { name, activity, project, photo },
  className,
  video,
}) => {
  return (
    <div
      className={cn(
        'flex gap-6',
        { 'absolute bottom-6 left-6 xl:bottom-12 xl:left-12': video },
        className,
      )}
    >
      {!video && (
        <div className="size-[66px] overflow-hidden rounded-full md:size-[71px] xl:size-[91px]">
          <Image src={photo} width={91} height={91} alt={`Фото ${name}`} />
        </div>
      )}

      <div
        className={cn(
          'font-raleway text-[12px] font-normal leading-[1.5] text-primaryText',
          'md:text-[14px] md:leading-[1.25]',
          { 'text-white': video },
        )}
      >
        <p
          className={cn(
            'mb-2 font-geologica text-[16px] font-normal leading-[1.25] text-headline md:text-[18px] xl:mb-4 xl:text-[22px] xl:leading-[1.4]',
            { 'text-white': video },
          )}
        >
          {name}
        </p>
        <p className="mb-0.5 md:mb-1 xl:mb-2">{activity}</p>
        <p>{project}</p>
      </div>
    </div>
  );
};
