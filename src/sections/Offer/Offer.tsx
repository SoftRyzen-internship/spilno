import { Accordion } from '@/components/base';
import { AccordionOfferItem, SectionTitle } from '@/components/ui';

import data from '@/data/main-page.json';

import { OfferItemsType } from './types';

export const Offer = () => {
  const { title, items, aria } = data.offer;

  return (
    <section className="section bg-lightBg">
      <div className="container">
        <div className="relative xl:flex xl:h-[596px] smOnly:flex smOnly:h-[325px] smOnly:items-center smOnly:justify-center">
          <div className="xl:flex xl:flex-col xl:justify-center">
            <SectionTitle className="mb-6 md:mb-8 md:w-[329px] xl:mb-16 xl:w-[485px]">
              {title}
            </SectionTitle>

            <Accordion className="md:h-[274px] xl:h-[324px]">
              {items.map((item: OfferItemsType, index: number) => (
                <AccordionOfferItem
                  key={`${item.title}${index}`}
                  data={item}
                  index={index}
                  aria={aria}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
