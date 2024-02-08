'use client';

import { useState } from 'react';

import { ReviewerInfoCard } from '../ReviewerInfoCard';
import { ReviewModal } from '../ReviewModal';

import { cn } from '@/utils/cn';

import PlayIcon from '~/icons/play.svg';

import commonData from '@/data/common.json';

import { ReviewProps } from './types';

export const ReviewCard: React.FC<ReviewProps> = ({
  review,
  video,
  author,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <div
        className={cn(
          'h-[395px] rounded-[10px] bg-white p-6 md:h-[485px] md:w-[330px] xl:h-[600px] xl:w-[596px] xl:p-12',
          {
            'relative flex items-center justify-center bg-cover': video,
            'md:flex  md:flex-col md:justify-between': !video,
          },
        )}
        style={{
          backgroundImage: video
            ? `linear-gradient(191deg, rgba(13, 10, 25, 0.00) 42.8%, #0D0A19 117.17%), url(${video.preview})`
            : undefined,
        }}
      >
        {!video && (
          <p
            className="mb-12 line-clamp-[9] text-ellipsis font-raleway text-[14px] font-normal leading-[1.5] text-primaryText 
          md:mb-0 md:line-clamp-[11] md:text-[16px] xl:line-clamp-[8] xl:text-[24px]"
          >
            {review}
          </p>
        )}

        <div>
          {!video ? (
            <button
              className="mb-4 text-left font-raleway text-[14px] font-normal leading-[1.5] text-accent underline md:mb-8 xl:mb-12 xl:text-[18px]"
              onClick={openModal}
              type="button"
            >
              {commonData.reviewCard.readMoreBtn.label}
            </button>
          ) : (
            <button
              className="mb-4 font-raleway text-[14px] font-normal leading-[1.5] text-accent underline"
              onClick={openModal}
              type="button"
            >
              <PlayIcon
                width={74}
                height={74}
                className="block size-[74px] rounded-full bg-accent/40 backdrop-blur-[20px]"
              />
            </button>
          )}
          <ReviewerInfoCard author={author} video={video} />
        </div>
      </div>

      <ReviewModal
        isOpen={isOpen}
        closeModal={closeModal}
        data={{ video, author, review }}
      />
    </>
  );
};
