import { Modal } from '../Modal';
import { ReviewerInfoCard } from '../ReviewerInfoCard';
import { VideoPlayer } from '../VideoPlayer';

import { cn } from '@/utils/cn';

import CloseIcon from '~/icons/cross.svg';

import commonData from '@/data/common.json';

import { ReviewModalProps } from './type';

import styles from './ReviewModal.module.css';

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  closeModal,
  data: { video, author, review },
}) => {
  return (
    <>
      {!video && (
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

          <div>
            <p className="mb-10 font-raleway text-[14px] font-normal leading-[1.5] text-primaryText md:mb-6 md:text-[16px] xl:mb-8 xl:text-[24px]">
              {review}
            </p>

            <div className={cn('relative', styles.quoteDownIcon)}>
              <ReviewerInfoCard author={author} video={video} />
            </div>
          </div>
        </Modal>
      )}

      {video && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          modalStyle={'w-full '}
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
              className="ml-auto size-6 text-white md:size-8 xl:size-12"
              aria-label={commonData.reviewCard.closeBtn.closeBtnIconAriaLabel}
            />
          </button>

          <VideoPlayer video={video} />
        </Modal>
      )}
    </>
  );
};
