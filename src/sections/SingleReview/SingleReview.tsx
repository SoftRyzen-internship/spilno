// import { SectionTitle, SingleReviewCard } from '@/components/ui';
import { SectionTitle } from '@/components/ui';

import { getReviews } from '@/actions/getReviews';

import staticData from '@/data/common.json';

import { SingleReviewProps } from './types';

export const SingleReview: React.FC<SingleReviewProps> = async ({ slug }) => {
  const { title, label } = staticData.reviewSection;

  const reviewsData = await getReviews();

  const businessReview = reviewsData?.filter(({ label }) => {
    if (label !== 'Від бізнесу') return;

    return true;
  })[0].data;

  console.log('businessReview', businessReview);

  const review = businessReview?.find(
    ({ author: { company } }) => company === slug || company === 'sulaieva.com',
  );
  console.log('review', review);

  return (
    <>
      {reviewsData && (
        <section className="section bg-lightBg">
          <div className="container">
            <SectionTitle className="mb-4 xl:mb-6">{title}</SectionTitle>

            <p
              className="mb-8 font-raleway text-[14px] font-normal leading-[1.5] text-primaryText md:w-[448px]
              md:text-[16px] xl:mb-0 xl:text-[18px] smOnly:mr-10"
            >
              {label}
            </p>
          </div>
          {/* <SingleReviewCard review={review} /> */}
        </section>
      )}
    </>
  );
};
