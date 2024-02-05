import Image from 'next/image';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { RingedImage } from '@/components/ui/RingedImage';

import aboutProjectImg from '~/images/about/about@2x.webp';

import data from '@/data/about.json';

export const About: React.FC = () => {
  const { title, ourGoal, link } = data;
  return (
    <section
      className="overflow-hidden bg-darkBg py-[60px] md:py-[80px] xl:py-[178px]"
      id="about"
    >
      <div className="container relative flex flex-col items-center text-center md:items-start md:text-start">
        <RingedImage
          variant="right"
          className="mb-8 w-[219px] translate-x-[-25%] md:absolute md:right-[-24px] md:top-[54px] md:w-[259px] xl:right-[-195px] xl:top-[-58px] xl:w-[537px]"
        >
          <Image
            alt=""
            src={aboutProjectImg}
            fill
            className="object-cover"
            sizes="(max-width: 479px) 100vw,(min-width: 480px) 270px, (min-width: 768px) 259px, (min-width: 1280px) 537px"
          />
        </RingedImage>
        <div className="md:w-[330px] xl:w-[588px]">
          <SectionTitle
            className="mb-4 text-[18px]/[1.3] md:text-[20px] xl:mb-6 xl:text-[34px]"
            isWhite
          >
            {title}
          </SectionTitle>
          <p className="mb-12 text-[14px]/[1.5] text-white md:text-[16px] xl:text-[20px]">
            {ourGoal}
          </p>
          <Button
            className="w-full md:w-auto"
            text={link.text}
            link={link.path}
          />
        </div>
      </div>
    </section>
  );
};
