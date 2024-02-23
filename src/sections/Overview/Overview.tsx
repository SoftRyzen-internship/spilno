import Image from 'next/image';

import { Button, OverviewStage } from '@/components/ui';

import data from '@/data/overview.json';

import IconArrow from '~/icons/arrow.svg';

export const Overview: React.FC = async () => {
  const {
    id,
    title,
    primaryImage,
    button,
    problem,
    analysis,
    decision,
    conclusion,
  } = data;

  return (
    <section
      id={id}
      className="relative bg-white pb-[60px] after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-screen after:-translate-x-1/2 after:bg-strokeColor after:content-[''] md:pb-20"
    >
      <Image
        src={primaryImage.src}
        alt={primaryImage.alt}
        width={1400}
        height={700}
        priority
        sizes="(max-width: 1399px) 100vw, (min-width: 1400px) 1400px"
        className="mx-auto aspect-[1.64] w-full object-cover md:aspect-[2.06] xl:aspect-[2/1] xl:max-w-[1400px]"
      />

      <div className="container md:space-y-20 smOnly:space-y-[60px]">
        <h2 className="hidden">{title}</h2>

        <OverviewStage
          title={problem.title}
          desc={problem.desc}
          containerStyle="text-left md:flex md:gap-[10px] xl:gap-8"
        />

        <ul className="md:flex md:h-[278px] md:gap-6 xl:h-[500px] xl:gap-10 smOnly:space-y-4">
          <li>
            <Image
              src={problem.wideImage.src}
              alt={problem.wideImage.alt}
              width={677}
              height={500}
              loading="lazy"
              className="rounded-[10px] object-cover md:h-full smOnly:w-full"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 382px, (min-width: 1280px) 677px"
            />
          </li>
          <li>
            <Image
              src={problem.squareImage.src}
              alt={problem.squareImage.alt}
              width={500}
              height={500}
              loading="lazy"
              className="rounded-[10px] object-cover md:h-full smOnly:w-full"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 278px, (min-width: 1280px) 500px"
            />
          </li>
        </ul>

        <OverviewStage
          title={analysis.title}
          desc={analysis.desc}
          containerStyle="text-left md:flex md:gap-[10px]"
        />

        <Image
          src={analysis.image.src}
          alt={analysis.image.alt}
          width={1216}
          height={550}
          loading="lazy"
          className="w-full rounded-[10px] object-cover smOnly:h-[210px]"
          sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 684px, (min-width: 1280px) 1216px"
        />

        <OverviewStage
          title={decision.title}
          desc={decision.desc}
          keySolutions={decision.keySolutions}
          containerStyle="text-left md:grid md:gap-4 md:grid-cols-2 xl:gap-6"
        />

        <ul className="md:flex md:flex-wrap md:justify-between md:gap-y-6 xl:gap-y-10 smOnly:space-y-4">
          <li className="md:basis-full">
            <Image
              src={conclusion.overviewImg.src}
              alt={conclusion.overviewImg.alt}
              width={1216}
              height={480}
              loading="lazy"
              className="w-full rounded-[10px] object-cover xl:h-[480px] smOnly:h-[169px]"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 684px, (min-width: 1280px) 1216px"
            />
          </li>

          <li className="md:h-[282px] xl:h-[500px]">
            <Image
              src={conclusion.squareImg.src}
              alt={conclusion.squareImg.alt}
              width={500}
              height={500}
              loading="lazy"
              className="w-full rounded-[10px] object-cover md:h-full"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 282px, (min-width: 1280px) 500px"
            />
          </li>

          <li className="md:h-[282px] xl:h-[500px]">
            <Image
              src={conclusion.wideImg.src}
              alt={conclusion.wideImg.alt}
              width={677}
              height={500}
              loading="lazy"
              className="w-full rounded-[10px] object-cover md:h-full"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 378px, (min-width: 1280px) 677px"
            />
          </li>
        </ul>

        <div>
          <OverviewStage
            title={conclusion.title}
            desc={conclusion.desc}
            containerStyle="text-center mb-8 md:max-w-[538px] md:mx-auto md:mb-10 xl:max-w-[804px] xl:mb-12"
          />

          <Button
            text={button.label}
            btnStyle="accent"
            className="flex w-full md:mx-auto md:max-w-[223px] xl:max-w-[338px]"
            link={button.target}
          >
            <IconArrow className="size-5 xl:size-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};
