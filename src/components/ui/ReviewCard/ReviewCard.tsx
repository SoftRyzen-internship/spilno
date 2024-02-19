'use client';

import { useEffect, useRef, useState } from 'react';

import { ReviewerInfoCard } from '@/components/ui';
import { ReviewModal } from '@/components/base';

import { cn } from '@/utils/cn';
import { useViewportSize } from '@/utils/useWindowSize';

import PlayIcon from '~/icons/play.svg';

import commonData from '@/data/common.json';

import { ReviewProps } from './types';

export const ReviewCard: React.FC<ReviewProps> = ({
  text,
  video,
  author,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const isVideoReview = type === 'video';

  const url =
    isVideoReview && video && video.url !== null
      ? video.url
      : 'https://youtu.be/SxjSRV6v7ck';

  const { width } = useViewportSize();

  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const textElement = textRef.current;
    console.log('textElement', textElement);
    if (textElement) {
      const isOverflowing = textElement.scrollHeight > textElement.clientHeight;
      setShowBtn(isOverflowing);
    }
  }, [width]);

  return (
    <>
      <div
        className={cn(
          'h-[395px] rounded-[10px] bg-white p-6 md:h-[485px] md:w-[330px] xl:h-[600px] xl:w-[596px] xl:p-12',
          {
            'relative flex items-center justify-center bg-cover': isVideoReview,
            'flex flex-col justify-between': !isVideoReview,
          },
        )}
        style={{
          backgroundImage:
            type === 'video'
              ? `linear-gradient(191deg, rgba(13, 10, 25, 0.00) 42.8%, #0D0A19 117.17%), url(${video?.preview})`
              : undefined,
        }}
      >
        {!isVideoReview && (
          <p
            ref={textRef}
            className="mb-12 line-clamp-[9] text-ellipsis font-raleway text-[14px] font-normal leading-[1.5] text-primaryText 
          md:mb-0 md:line-clamp-[11] md:text-[16px] xl:line-clamp-[10] xl:text-[20px]"
          >
            {text}
          </p>
        )}

        <div>
          {!isVideoReview ? (
            showBtn && (
              <button
                className="mb-4 text-left font-raleway text-[14px] font-normal leading-[1.5] text-accent underline md:mb-8 xl:mb-12 xl:text-[18px]"
                onClick={openModal}
                type="button"
              >
                {commonData.reviewCard.readMoreBtn.label}
              </button>
            )
          ) : (
            <button
              className="mb-4 font-raleway text-[14px] font-normal leading-[1.5] text-accent underline"
              onClick={openModal}
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
          )}

          <ReviewerInfoCard author={author} isVideoReview={isVideoReview} />
        </div>
      </div>

      <ReviewModal
        isOpen={isOpen}
        closeModal={closeModal}
        isVideoReview={isVideoReview}
        data={{ url, author, text }}
      />
    </>
  );
};
