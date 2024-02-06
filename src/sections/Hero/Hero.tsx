import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { RingedImage } from '@/components/ui/RingedImage';

import content from '@/data/hero.json';

import IconArrow from '~/icons/arrow.svg';

export const Hero: React.FC = () => {
  const { id, title, desc, image, button } = content;

  return (
    <section
      id={id}
      className="overflow-hidden bg-darkBg pb-[60px] pt-28 sm:pt-24 md:py-[180px] xl:py-56"
    >
      <div className="xl:relative xl:mx-auto xl:max-w-[1400px]">
        <div className="container md:flex md:items-center md:justify-between xl:justify-start">
          <div className="mb-7 flex w-full flex-col items-start justify-center sm:mb-10 md:order-2 md:m-0 md:w-[248px] xl:absolute xl:right-0 xl:w-[537px] smOnly:mx-auto smOnly:max-w-[406px]">
            <RingedImage
              variant="right"
              ringType="hero"
              className="md:w-full smOnly:w-2/3"
            >
              <Image
                src={image.src}
                width={588}
                height={588}
                alt={image.alt}
                priority
                className="w-[270px] object-cover md:w-[248px] xl:w-[537px]"
              />
            </RingedImage>
          </div>

          <div className="md:w-[414px] xl:w-[596px]">
            <h1 className="mb-4 text-left font-geologica text-2xl/[1.15] font-light text-white md:text-[32px] xl:mb-8 xl:text-[56px]">
              {title}
            </h1>

            <p className="mb-8 text-sm/[1.5] text-white md:text-sm/[1.4] xl:mb-16 xl:text-[22px]/[1.4]">
              {desc}
            </p>

            <Button
              text={button.label}
              btnStyle="accent"
              className="max-md:flex w-full md:max-w-[274px] xl:max-w-[338px]"
              link={button.target}
            >
              <IconArrow className="size-5 xl:size-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
