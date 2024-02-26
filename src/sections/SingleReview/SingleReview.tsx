import { SectionTitle, SingleReviewCard } from '@/components/ui';

import { cn } from '@/utils/cn';

import staticData from '@/data/common.json';

import { SingleReviewProps } from './types';

export const SingleReview: React.FC<SingleReviewProps> = async ({ review }) => {
  const { title, label } = staticData.singleReviewSection;

  const isVideoReview = review.type === 'video';

  return (
    <>
      <section className="section bg-lightBg">
        <div className="container">
          <div className={cn({ 'md:flex md:justify-between': isVideoReview })}>
            <div
              className={cn(
                { 'md:w-[330px] xl:w-[492px]': isVideoReview },
                {
                  'md:mb-12 md:flex md:items-center md:justify-between xl:mb-16':
                    !isVideoReview,
                },
              )}
            >
              <SectionTitle
                className={cn(
                  { 'mb-4 xl:mb-6': isVideoReview },
                  { 'mb-4 md:mb-0 md:w-[319px] xl:w-[583px]': !isVideoReview },
                )}
              >
                {title}
              </SectionTitle>

              <p
                className={cn(
                  'mb-8 font-raleway text-[14px] font-normal leading-[1.5] text-primaryText md:mb-0 md:text-[16px] xl:mb-0 xl:text-[18px]',

                  { 'md:w-[286px] xl:w-[492px]': !isVideoReview },
                )}
              >
                {label}
              </p>
            </div>

            <SingleReviewCard review={review} />
          </div>
        </div>
      </section>
    </>
  );
};
