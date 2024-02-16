import { Tabs, SectionTitle } from '@/components/ui';

import { getReviews } from '@/actions/getReviews';

import staticData from '@/data/common.json';

export const Reviews: React.FC = async () => {
  const { title, label } = staticData.reviewSection;

  const reviewsData = await getReviews();

  return (
    <>
      {reviewsData && (
        <section className="section bg-lightBg">
          <div className="container">
            <Tabs reviewsData={reviewsData}>
              <SectionTitle className="mb-4 xl:mb-6">{title}</SectionTitle>

              <p
                className="mb-8 font-raleway text-[14px] font-normal leading-[1.5] text-primaryText md:w-[448px]
              md:text-[16px] xl:mb-0 xl:text-[18px] smOnly:mr-10"
              >
                {label}
              </p>
            </Tabs>
          </div>
        </section>
      )}
    </>
  );
};
