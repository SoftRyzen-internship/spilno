'use client';

import { useState } from 'react';
import Image from 'next/image';

import { ReviewModal } from '@/components/base';
import { ReviewerInfoCard } from '@/components/ui';

import { cn } from '@/utils/cn';

import PlayIcon from '~/icons/play.svg';

import commonData from '@/data/common.json';

import { SingleReviewCardProps } from './types';

import styles from './SingleReviewCard.module.css';

export const SingleReviewCard: React.FC<SingleReviewCardProps> = ({
  review: { type, text, video, author },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = () => {
    setIsOpen(false);
  };
  const onOpenModal = () => {
    setIsOpen(true);
  };

  const isVideoReview = type === 'video';

  const url = video?.url ? video.url : '';

  return (
    <>
      {!isVideoReview && (
        <div
          className={cn(
            'relative rounded-[10px] bg-white p-4 md:p-12',
            styles.quoteUpIcon,
          )}
        >
          <div className="pt-12 md:pt-[72px] xl:pt-[88px]">
            <p className="mb-10 font-raleway text-[14px] font-normal leading-[1.5] text-primaryText md:mb-6 md:text-[16px] xl:mb-8 xl:text-[20px]">
              {text}
            </p>

            <div className={cn('relative', styles.quoteDownIcon)}>
              <ReviewerInfoCard author={author} isVideoReview={isVideoReview} />
            </div>
          </div>
        </div>
      )}

      {isVideoReview && (
        <div
          className={cn(
            'h-[388px] w-full overflow-hidden rounded-[10px] bg-white  md:h-[485px] md:w-[330px] xl:h-[600px] xl:w-[596px]',
            {
              'relative flex items-center justify-center': isVideoReview,
              'flex flex-col justify-between p-6 xl:p-12': !isVideoReview,
            },
          )}
        >
          {video?.preview && (
            <div className={styles.gradientBgImage}>
              <Image
                width={596}
                height={600}
                src={video.preview}
                alt={author.name}
                className={cn('block size-full object-cover')}
              />
            </div>
          )}

          <div>
            <button
              className="absolute left-1/2 top-1/2 mb-4 -translate-x-1/2 -translate-y-1/2 font-raleway text-[14px] font-normal leading-[1.5] text-accent underline"
              onClick={onOpenModal}
              type="button"
              aria-label={commonData.reviewCard.playBtnAriaLabel}
            >
              <PlayIcon
                width={74}
                height={74}
                className="block size-[74px] rounded-full bg-accent/40 backdrop-blur-[20px] transition-all hover:bg-accent/60 focus:bg-accent/60"
                aria-label={commonData.reviewCard.playIconAriaLabel}
              />
            </button>

            <ReviewerInfoCard author={author} isVideoReview={isVideoReview} />
          </div>
        </div>
      )}

      <ReviewModal
        isOpen={isOpen}
        closeModal={onCloseModal}
        isVideoReview={isVideoReview}
        data={{ url, author, text }}
      />
    </>
  );
};
