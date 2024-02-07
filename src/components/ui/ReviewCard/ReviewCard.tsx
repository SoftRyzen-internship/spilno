'use client';

import { useState } from 'react';

import { ReviewerInfoCard } from '../ReviewerInfoCard';
import { Modal } from '../Modal';

import { cn } from '@/utils/cn';

import CloseIcon from '~/icons/cross.svg';
import PlayIcon from '~/icons/play.svg';

import commonData from '@/data/common.json';

import { ReviewProps } from './types';

import styles from './ReviewCard.module.css';

export const ReviewCard: React.FC<ReviewProps> = ({
  review,
  video,
  author,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    console.log('click');
    setIsOpen(false);
  };

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
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalStyle={cn(
          'relative w-full max-w-[448px] rounded-[10px] bg-white p-4',
          'md:w-[684px] md:max-w-full md:p-12',
          'xl:w-[1010px]',
          !video && styles.quoteUpIcon,
        )}
        modalWrapStyle="container flex items-center xl:justify-center"
      >
        <button
          type="button"
          className="mb-6 ml-auto block text-greyText md:mb-10"
          onClick={closeModal}
          aria-label={commonData.reviewCard.closeBtn.closeBtnAriaLabel}
        >
          <CloseIcon
            width={36}
            height={36}
            className="ml-auto size-6 md:size-8 xl:size-12"
            aria-label={commonData.reviewCard.closeBtn.closeBtnIconAriaLabel}
          />
        </button>

        {!video ? (
          <div>
            <p className="mb-10 font-raleway text-[14px] font-normal leading-[1.5] text-primaryText md:mb-6 md:text-[16px] xl:mb-8 xl:text-[24px]">
              {review}
            </p>

            <div className={cn('relative', styles.quoteDownIcon)}>
              <ReviewerInfoCard author={author} video={video} />
            </div>
          </div>
        ) : (
          <div>
            <p>React.Player will be here soon</p>
          </div>
        )}
      </Modal>
    </>
  );
};
