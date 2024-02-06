'use client';

import { Tab } from '@headlessui/react';

import { Tabs } from '@/components/ui/Tabs';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { SliderControls } from '@/components/ui/SliderControls';
import { Slider } from '@/components/ui/Slider';

import data from '@/data/reviews.json';

export const Reviews: React.FC = () => {
  const { title, label, reviewsData } = data;

  return (
    <section className="section bg-lightBg">
      <div className="container">
        <Tabs title={title} label={label} data={reviewsData}>
          {reviewsData &&
            reviewsData.map(({ reviews }, idx) => (
              <Tab.Panel key={idx} className="xl:h-[688px] xl:w-[596px]">
                <Slider
                  section="reviews"
                  slidesData={reviews}
                  slideComponent={ReviewCard}
                  slideClassName="mb-8 mdOnly:mb-[52px] xl:h-[600px] xl:w-[596px]"
                />

                <SliderControls
                  section="reviews"
                  wrapClassName="justify-center xl:justify-end"
                />
              </Tab.Panel>
            ))}
        </Tabs>
      </div>
    </section>
  );
};
