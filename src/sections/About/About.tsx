import Image from 'next/image';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { RingedImage } from '@/components/ui/RingedImage';

import aboutProjectImg from '~/images/about/about@2x.webp';

import data from '@/data/about.json';

export const About = () => {
  const { title, ourGoal, orderBtnText } = data;
  return (
    <section className="overflow-hidden bg-darkBg py-[60px]" id="about">
      <div className="container relative flex flex-col items-center text-center md:items-start">
        <RingedImage
          variant="right"
          className="mb-8 w-[219px] translate-x-[-25%] md:absolute md:right-[-89px] md:top-[54px] md:w-[259px] xl:w-[537px]"
        >
          <Image
            alt="about"
            src={aboutProjectImg}
            fill
            className="object-cover"
            sizes="(max-width: 479px) 100vw,(min-width: 480px) 270px, (min-width: 768px) 259px, (min-width: 1280px) 537px"
          />
        </RingedImage>
        <div className="md:w-[330px]">
          <SectionTitle className="mb-4" isWhite>
            {title}
          </SectionTitle>
          <p className="mb-12 text-[14px]/[1.5] text-white">{ourGoal}</p>
          <Button
            className="w-full md:w-[186px]"
            text={orderBtnText}
            link="#faq"
          />
        </div>
      </div>
    </section>
  );
};
