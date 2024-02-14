import { Tabs } from '@/components/ui/Tabs';
import { SectionTitle } from '@/components/ui/SectionTitle';

import staticData from '@/data/faq.json';

import { SectionFAQProps } from './types';

export const FAQ: React.FC<SectionFAQProps> = ({ tags }) => {
  const { title, label, questionsData } = staticData;

  const data = tags
    ? questionsData.filter(({ tag }) => tags.includes(tag))
    : questionsData;

  return (
    <section className="section bg-lightBg">
      <div className="container">
        <Tabs questionsData={data}>
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
  );
};
