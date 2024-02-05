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
      className="section bg-darkBg md:pb-[181px] md:pt-[121px] xl:pb-[130px] xl:pt-[50px]"
    >
      <div className="max-md:h-[466px] max-md:justify-end container flex flex-col md:flex-row-reverse md:items-center md:justify-between">
        <div className="mx-auto mb-7 flex w-full max-w-[406px] flex-col items-start justify-center sm:-mt-5 sm:mb-10 md:m-0 md:w-[248px] xl:w-[537px]">
          <RingedImage
            variant="right"
            ringType="hero"
            className="max-md:w-2/3 md:w-full"
          >
            <Image
              src={image.src}
              width={588}
              height={588}
              alt={image.alt}
              className="size-[270px] object-cover md:size-[248px] xl:size-[537px]"
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
            <IconArrow
              className="size-5 [&>path]:stroke-[3px]"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
