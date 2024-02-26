import React from 'react';

export const SingleReviewCard = () => {
  return <div>SingleReviewCard</div>;
};

// 'use client';

// import { Modal } from '@/components/ui/Modal';
// import { ReviewerInfoCard } from '@/components/ui/ReviewerInfoCard';
// import { VideoPlayer } from '@/components/ui/VideoPlayer';

// import { cn } from '@/utils/cn';

// import CloseIcon from '~/icons/cross.svg';

// import commonData from '@/data/common.json';

// import { SingleReviewCardProps } from './types';

// import styles from './SingleReviewCard.module.css';
// import { useState } from 'react';

// export const SingleReviewCard: React.FC<SingleReviewCardProps> = ({
//   type,
//   text = 'test',
//   url = 'http://test',

//   isVideoReview,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const onClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {!isVideoReview && (
//         <Modal
//           isOpen={isOpen}
//           onClose={onClose}
//           modalStyle={cn(
//             'relative w-full max-w-[448px] rounded-[10px] bg-white p-4',
//             'md:w-[684px] md:max-w-full md:p-12',
//             'xl:w-[1010px]',
//             !isVideoReview && styles.quoteUpIcon,
//           )}
//           modalWrapStyle="container flex items-center xl:justify-center"
//         >
//           <button
//             type="button"
//             className="mb-6 ml-auto block text-greyText md:mb-10"
//             onClick={onClose}
//             aria-label={commonData.reviewCard.closeBtn.closeBtnAriaLabel}
//           >
//             <CloseIcon
//               width={36}
//               height={36}
//               className="ml-auto size-6 md:size-8 xl:size-12"
//               aria-label={commonData.reviewCard.closeBtn.closeBtnIconAriaLabel}
//             />
//           </button>

//           <div>
//             <p className="mb-10 font-raleway text-[14px] font-normal leading-[1.5] text-primaryText md:mb-6 md:text-[16px] xl:mb-8 xl:text-[20px]">
//               {text}
//             </p>

//             <div className={cn('relative', styles.quoteDownIcon)}>
//               {/* <ReviewerInfoCard author={author} isVideoReview={isVideoReview} /> */}
//             </div>
//           </div>
//         </Modal>
//       )}

//       {isVideoReview && (
//         <Modal
//           isOpen={isOpen}
//           onClose={onClose}
//           modalStyle={'w-full pb-6'}
//           modalWrapStyle="container flex items-center"
//         >
//           <button
//             type="button"
//             className="mb-6 ml-auto block text-greyText md:mb-6"
//             onClick={onClose}
//             aria-label={commonData.reviewCard.closeBtn.closeBtnAriaLabel}
//           >
//             <CloseIcon
//               width={36}
//               height={36}
//               className="ml-auto size-6 text-white md:size-8 xl:size-12"
//               aria-label={commonData.reviewCard.closeBtn.closeBtnIconAriaLabel}
//             />
//           </button>

//           <VideoPlayer url={url} />
//         </Modal>
//       )}
//     </>
//   );
// };
