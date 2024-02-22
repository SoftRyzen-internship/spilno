import Image from 'next/image';

import { cn } from '@/utils/cn';

import defaultImg from '~/images/reviews/photo.png';

import { ReviewerInfoCardProps } from './types';

export const ReviewerInfoCard: React.FC<ReviewerInfoCardProps> = ({
  author: { name, position, company, avatar },
  className,
  isVideoReview,
}) => {
  const avatarImg = avatar ?? defaultImg;

  return (
    <div
      className={cn(
        'flex items-center gap-6',
        { 'absolute bottom-4 left-4 md:bottom-8 md:left-8': isVideoReview },
        className,
      )}
    >
      {!isVideoReview && (
        <div className="size-[66px] overflow-hidden rounded-full md:size-[71px] xl:size-[91px]">
          <Image src={avatarImg} width={91} height={91} alt={`Фото ${name}`} />
        </div>
      )}

      <div
        className={cn(
          'font-raleway text-[12px] font-normal leading-[1.5] text-primaryText',
          'md:text-[14px] md:leading-[1.25]',
          { 'text-white': isVideoReview },
        )}
      >
        <p
          className={cn(
            'mb-2 font-geologica text-[16px] font-normal leading-[1.25] text-headline md:text-[18px] xl:text-[22px] xl:leading-[1.4]',
            { 'text-white': isVideoReview },
          )}
        >
          {name}
        </p>
        <p className="mb-0.5 last:mb-0 md:mb-1 xl:mb-2">{position}</p>
        {company && <p>{company}</p>}
      </div>
    </div>
  );
};
