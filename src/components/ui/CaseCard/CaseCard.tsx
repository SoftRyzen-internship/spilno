import Image from 'next/image';
import Link from 'next/link';

import data from '@/data/cases.json';

import ArrowIcon from '~/icons/arrow.svg';

import { Props } from './types';

export const CaseCard: React.FC<Props> = ({ src, alt, text, href, tags }) => {
  const { projectDetailsLinkAriaLabel, arrowIconAriaLabel } = data;
  return (
    <div className="group rounded-[10px] smOnly:w-[328px]">
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
            {tags.map(tag => (
              <p
                key={tag}
                className="rounded-full border border-solid border-lightBlue px-[22px] py-4 font-raleway text-[14px]/[1.25]"
              >
                {tag}
              </p>
            ))}
          </div>

          <Link
            href={href}
            className="flex size-[40px] items-center justify-center rounded-full border border-solid border-accent text-accent transition-all hover:bg-lightBlue focus-visible:bg-lightBlue md:size-[48px]"
            aria-label={projectDetailsLinkAriaLabel}
          >
            <ArrowIcon
              className="size-[16px]"
              aria-label={arrowIconAriaLabel}
            />
          </Link>
        </div>

        <p className="max-w-[272px] text-start font-geologica text-[16px]/[1.25] md:max-w-[258px] md:text-[18px] xl:flex xl:max-w-[486px] xl:text-[24px]">
          {text}
        </p>
      </div>
    </div>
  );
};
