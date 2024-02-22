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
      className="section relative bg-white !pt-[280px] md:!pt-[353px] xl:!pt-[780px]"
    >
      <div className="container">
        <h2 className="hidden">{title}</h2>

        <Image
          src={primaryImage.src}
          alt={primaryImage.alt}
          width={1400}
          height={700}
          priority
          sizes="(max-width: 1399px) 100vw, (min-width: 1400px) 1400px"
          className="absolute left-1/2 top-0 h-[220px] -translate-x-1/2 object-cover md:h-[373px] xl:h-[700px] xl:max-w-[1400px] smOnly:w-full"
        />

        <OverviewStage
          title={problem.title}
          desc={problem.desc}
          containerStyle="text-left smOnly:mb-[60px]"
        />

        <div className="smOnly:mb-[60px]">
          <Image
            src={problem.wideImage.src}
            alt={problem.wideImage.alt}
            width={677}
            height={500}
            loading="lazy"
            className="h-[238px] rounded-[10px] object-cover smOnly:mb-4 smOnly:w-full"
          />

          <Image
            src={problem.squareImage.src}
            alt={problem.squareImage.alt}
            width={500}
            height={500}
            loading="lazy"
            className="h-[238px] rounded-[10px] object-cover smOnly:w-full"
          />
        </div>

        <OverviewStage
          title={analysis.title}
          desc={analysis.desc}
          containerStyle="text-left smOnly:mb-[60px]"
        />

        <Image
          src={analysis.image.src}
          alt={analysis.image.alt}
          width={1216}
          height={550}
          loading="lazy"
          className="h-[210px] rounded-[10px] object-cover smOnly:mb-[60px] smOnly:w-full"
        />

        <OverviewStage
          title={decision.title}
          desc={decision.desc}
          keySolutions={decision.keySolutions}
          containerStyle="text-left smOnly:mb-[60px]"
        />

        <div className="smOnly:mb-[60px] smOnly:space-y-4">
          <Image
            src={conclusion.overviewImg.src}
            alt={conclusion.overviewImg.alt}
            width={1216}
            height={480}
            loading="lazy"
            className="h-[169px] rounded-[10px] object-cover smOnly:w-full"
          />

          <Image
            src={conclusion.squareImg.src}
            alt={conclusion.squareImg.alt}
            width={500}
            height={500}
            loading="lazy"
            className="h-[328px] rounded-[10px] object-cover smOnly:w-full"
          />

          <Image
            src={conclusion.wideImg.src}
            alt={conclusion.wideImg.alt}
            width={677}
            height={500}
            loading="lazy"
            className="h-[244px] rounded-[10px] object-cover md:h-[282px] smOnly:w-full"
            sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 378px, (min-width: 1280px) 500px"
          />
        </div>

        <OverviewStage
          title={conclusion.title}
          desc={conclusion.desc}
          containerStyle="text-center mb-8"
        />

        <Button
          text={button.label}
          btnStyle="accent"
          className="max-md:flex w-full md:max-w-[274px] xl:max-w-[338px]"
          link={button.target}
        >
          <IconArrow className="size-5 xl:size-6" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
};
