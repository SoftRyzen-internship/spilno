'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';

import { cn } from '@/utils/cn';

import { Accordion } from '@/components/base/Accordion';
import { FAQItemsType } from '@/components/base/Accordion/types';
import { Slider } from '@/components/ui/Slider';
import { SliderControls } from '@/components/ui/SliderControls';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { AccordionFAQItem } from '@/components/ui/AccordionFAQItem';

import { TabsProps } from './types';

export const Tabs: React.FC<TabsProps> = ({
  children,
  reviewsData,
  questionsData,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const dataForTablist = reviewsData || questionsData;

  return (
    <Tab.Group manual selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <div className="xl:flex xl:justify-between">
        <div className="mb-8 md:mb-12 xl:mb-0 xl:flex xl:flex-col xl:justify-between">
          <div>{children}</div>

          {dataForTablist && dataForTablist.length > 1 && (
            <Tab.List as={'ul'} className={'flex gap-4 md:gap-8'}>
              {dataForTablist &&
                dataForTablist.map(({ label }, idx) => (
                  <Tab
                    className={'relative outline-none'}
                    key={`${label}${idx}`}
                    as={'li'}
                  >
                    {({ selected }) => (
                      <button
                        type="button"
                        className={cn(
                          'pb-2 text-[16px] font-normal leading-[1.25] transition-colors hover:text-accent focus:text-accent',
                          'md:pb-3 md:text-[20px] md:leading-[1.3]',
                          'xl:text-[24px] xl:leading-[1.25]',
                          {
                            'text-accent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-accent':
                              selected,
                            'text-greyText': !selected,
                          },
                        )}
                      >
                        {label}
                      </button>
                    )}
                  </Tab>
                ))}
            </Tab.List>
          )}
        </div>

        <Tab.Panels>
          <>
            {reviewsData &&
              reviewsData.map(({ data }, idx) => (
                <Tab.Panel key={idx} className="xl:h-[688px] xl:w-[596px]">
                  <Slider
                    section="reviews"
                    slidesData={data}
                    slideComponent={ReviewCard}
                    slideClassName="mb-8 mdOnly:mb-[52px] xl:h-[600px] xl:w-[596px]"
                  />

                  <SliderControls
                    section="reviews"
                    wrapClassName="justify-center xl:justify-end"
                  />
                </Tab.Panel>
              ))}

            {questionsData &&
              questionsData.map(({ questions, aria }, index: number) => (
                <Tab.Panel key={index} className="pt-4 md:pt-0">
                  <Accordion type="faq">
                    {questions.map((item: FAQItemsType, index: number) => (
                      <AccordionFAQItem
                        key={`${item.question}${index}`}
                        data={item}
                        index={index}
                        aria={aria}
                      />
                    ))}
                  </Accordion>
                </Tab.Panel>
              ))}
          </>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};
