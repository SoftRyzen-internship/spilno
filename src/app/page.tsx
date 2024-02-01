import { SliderTest } from '@/components/base/SliderTest/SliderTest';
import { Logo } from '@/components/ui/Logo';
import { MainNav } from '@/components/ui/MainNav';
import { MobileMenu } from '@/components/base/MobileMenu';

import { Accordeon } from '@/components/base/Accordeon';
import {
  FAQItemsType,
  OfferItemsType,
} from '@/components/base/Accordeon/types';
import { AccordeonFAQItem } from '@/components/ui/AccordeonFAQItem';
import { AccordeonOfferItem } from '@/components/ui/AccordeonOfferItem';

import dataFAQ from '@/data/faq.json';
import dataOffer from '@/data/offer.json';

export default function Home() {
  return (
    <div>
      <div className="container">
        <SliderTest />
      </div>

      <div className=" container bg-darkBg">
        <div className="container flex items-center justify-between bg-darkBg">
          <Logo location="header" />
          <MainNav location="header" />
          <MobileMenu />
        </div>
      </div>

      <div className="container relative">
        <Accordeon>
          {dataOffer.items.map((item: OfferItemsType, index: number) => (
            <AccordeonOfferItem
              key={`${item.title}${index}`}
              data={item}
              index={index}
              aria={dataOffer.aria}
            />
          ))}
        </Accordeon>
      </div>

      <div className="container bg-lightBg">
        <Accordeon>
          {dataFAQ.questions.map((item: FAQItemsType, index: number) => (
            <AccordeonFAQItem
              key={`${item.question}${index}`}
              data={item}
              index={index}
              aria={dataFAQ.aria}
            />
          ))}
        </Accordeon>
      </div>
    </div>
  );
}
