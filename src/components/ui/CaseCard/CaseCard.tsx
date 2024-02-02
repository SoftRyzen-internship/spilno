'use client';

import Image from 'next/image';
import Link from 'next/link';

import ArrowIcon from '~/icons/arrow.svg';

import data from '@/data/common.json';

import { Props } from './types';

export const CaseCard: React.FC<Props> = ({ src, alt, text, href }) => {
  const {
    caseCard: {
      tags: { multiPageSite, portfolioWebSite },
    },
  } = data;

  return (
    <li className="group w-[328px] rounded-[10px] md:w-[330px] xl:w-[596px]">
      <div className="mb-4 h-[264px] overflow-hidden rounded-[10px] xl:mb-6 xl:h-[498px]">
        <Image
          className="size-full object-cover object-center transition-all  group-hover:scale-[1.1]"
          src={src}
          alt={alt}
          width={328}
          height={264}
          loading="lazy"
          blurDataURL={src}
        />
      </div>

      <div className="flex flex-row-reverse justify-between xl:flex-col xl:gap-6">
        <div className="xl:flex xl:items-center xl:justify-between">
          <div className="hidden font-geologica text-[16px]/[1.25] xl:flex xl:gap-2">
            <p className="rounded-full border border-solid border-lightBlue px-[22px] py-4 font-raleway text-[14px]/[1.25]">
              {multiPageSite}
            </p>
            <p className="rounded-full border border-solid border-lightBlue px-[22px] py-4 font-raleway text-[14px]/[1.25]">
              {portfolioWebSite}
            </p>
          </div>

          <Link
            href={href}
            className="flex size-[40px] items-center justify-center rounded-full border border-solid border-accent text-accent transition-all hover:bg-lightBlue focus-visible:bg-lightBlue md:size-[48px]"
          >
            <ArrowIcon className="size-[16px]" />
          </Link>
        </div>

        <p className="max-w-[272px] font-geologica text-[16px]/[1.25] md:max-w-[258px] md:text-[18px] xl:flex xl:max-w-[486px] xl:text-[24px]">
          {text}
        </p>
      </div>
    </li>
  );
};
