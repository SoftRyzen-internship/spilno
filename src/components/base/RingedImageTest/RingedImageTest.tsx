import Image from 'next/image';

import { RingedImage } from '@/components/ui/RingedImage';

export const RingedImageTest = () => {
  return (
    <>
      <h3 className="text-white">HERO</h3>

      <RingedImage
        variant="right"
        ringType="hero"
        className="w-[219px] md:w-[248px] xl:w-[537px]"
      >
        <Image
          alt="hero"
          src={`/images/hero/hero@2x.webp`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 479px) 100vw,(min-width: 480px) 270px, (min-width: 768px) 248px, (min-width: 1280px) 537px"
        />
      </RingedImage>

      <h3 className="text-white">ABOUT</h3>

      <RingedImage
        variant="right"
        className="w-[219px] md:w-[259px] xl:w-[537px]"
      >
        <Image
          alt="about"
          src={`/images/about/about@2x.webp`}
          fill
          className="object-cover"
          sizes="(max-width: 479px) 100vw,(min-width: 480px) 270px, (min-width: 768px) 259px, (min-width: 1280px) 537px"
        />
      </RingedImage>

      <h3 className="text-white">FORM</h3>

      <RingedImage variant="left" className="hidden xl:block xl:w-[469px]">
        <Image
          alt="contact-us"
          src={`/images/contact-us/contact-us@2x.webp`}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 50vw,(min-width: 768px) 33vw, (min-width: 1280px) 469px"
        />
      </RingedImage>
    </>
  );
};
