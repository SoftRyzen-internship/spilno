import Image from 'next/image';

import { Button, OverviewStage } from '@/components/ui';

import content from '@/data/single-page.json';

import IconArrow from '~/icons/arrow.svg';

import { OverviewProps } from './types';

export const Overview: React.FC<OverviewProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const { title, button } = content.overview;

  const { url, alt, problems, analysis, decision, result } = data;

  return (
    <section className="relative overflow-hidden bg-white pb-[60px] after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-screen after:-translate-x-1/2 after:bg-strokeColor after:content-[''] md:pb-20">
      <Image
        src={url}
        alt={alt}
        width={1400}
        height={700}
        priority
        sizes="(max-width: 1399px) 100vw, (min-width: 1400px) 1400px"
        className="mx-auto aspect-[1.64] w-full object-cover md:aspect-[2.06] xl:aspect-[2/1] xl:max-w-[1400px]"
      />

      <div className="container md:space-y-20 smOnly:space-y-[60px]">
        <h2 className="sr-only">{title}</h2>

        <OverviewStage title={problems.title} desc={problems.description} />

        <ul className="md:flex md:h-[278px] md:gap-6 xl:h-[500px] xl:gap-10 smOnly:space-y-4">
          <li>
            <Image
              src={problems.problemsImgFirst.data.attributes.url}
              alt={problems.altFirst}
              width={677}
              height={500}
              loading="lazy"
              className="rounded-[10px] object-cover md:h-full smOnly:w-full"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 382px, (min-width: 1280px) 677px"
            />
          </li>
          <li>
            <Image
              src={problems.problemsImgSecond.data.attributes.url}
              alt={problems.altSecond}
              width={500}
              height={500}
              loading="lazy"
              className="rounded-[10px] object-cover md:h-full smOnly:w-full"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 278px, (min-width: 1280px) 500px"
            />
          </li>
        </ul>

        <OverviewStage title={analysis.title} desc={analysis.description} />

        <Image
          src={analysis.img.data.attributes.url}
          alt={analysis.alt}
          width={1216}
          height={550}
          loading="lazy"
          className="w-full rounded-[10px] object-cover"
        />

        <OverviewStage
          title={decision.title}
          desc={decision.description}
          keySolutions={decision.decisionList}
        />

        <ul className="md:flex md:flex-wrap md:justify-between md:gap-y-6 xl:gap-y-10 smOnly:space-y-4">
          <li className="md:basis-full">
            <Image
              src={decision.decisionImgFirst.data.attributes.url}
              alt={decision.altFirst}
              width={1216}
              height={480}
              loading="lazy"
              className="w-full rounded-[10px] object-cover xl:h-[480px] smOnly:aspect-[1.94]"
            />
          </li>

          <li className="md:h-[282px] xl:h-[500px]">
            <Image
              src={decision.decisionImgSecond.data.attributes.url}
              alt={decision.altSecond}
              width={500}
              height={500}
              loading="lazy"
              className="w-full rounded-[10px] object-cover md:h-full"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 282px, (min-width: 1280px) 500px"
            />
          </li>

          <li className="md:h-[282px] xl:h-[500px]">
            <Image
              src={decision.decisionImgThird.data.attributes.url}
              alt={decision.altThird}
              width={677}
              height={500}
              loading="lazy"
              className="w-full rounded-[10px] object-cover md:h-full"
              sizes="(max-width: 479px) 100vw,(min-width: 480px) 448px, (min-width: 768px) 378px, (min-width: 1280px) 677px"
            />
          </li>
        </ul>

        <div>
          <OverviewStage title={result.title} desc={result.description} />

          <Button
            text={button.label}
            btnStyle="accent"
            className="flex w-full md:mx-auto md:max-w-[223px] xl:max-w-[338px]"
            link={result.link}
          >
            <IconArrow className="size-5 xl:size-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};
