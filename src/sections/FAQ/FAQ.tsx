'use client';

import { Tab } from '@headlessui/react';

import { Accordion } from '@/components/base/Accordion';

import { Tabs } from '@/components/ui/Tabs';
import { AccordionFAQItem } from '@/components/ui/AccordionFAQItem';

import data from '@/data/faq.json';

import { FAQItemsType } from '@/components/base/Accordion/types';

export const FAQ: React.FC = () => {
  const { title, label, questionsData } = data;

  return (
    <section className="section bg-lightBg">
      <div className="container">
        <Tabs title={title} label={label} data={questionsData}>
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
        </Tabs>
      </div>
    </section>
  );
};
