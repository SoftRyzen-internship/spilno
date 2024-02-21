import Image from 'next/image';

import { SectionTitle, Button, RingedImage } from '@/components/ui';

import aboutProjectImg from '~/images/about/about@2x.webp';

import data from '@/data/main-page.json';

export const About: React.FC = () => {
  const { title, ourGoal, link, aboutProjectImgAlt } = data.about;

  return (
    <section
      className="overflow-hidden bg-darkBg py-[60px] md:py-[80px] xl:py-[178px]"
      id="about"
    >
      <div className="xl:relative xl:mx-auto xl:max-w-[1400px]">
        <div className="container flex flex-col items-center text-center md:flex-row-reverse md:justify-end md:gap-24 md:text-start">
          <RingedImage
            variant="right"
            className="w-[219px] md:w-[259px] xl:absolute xl:right-0 xl:top-[-58px] xl:w-[537px] smOnly:mb-8 smOnly:translate-x-[-25%]"
          >
            <Image
              alt={aboutProjectImgAlt}
              src={aboutProjectImg}
              fill
              className="object-cover"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 270px, (min-width: 768px) 259px, (min-width: 1280px) 537px"
              loading="lazy"
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
              className="smOnly:w-full"
              text={link.text}
              link={link.path}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
