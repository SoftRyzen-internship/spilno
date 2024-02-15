import Image from 'next/image';
import Link from 'next/link';

import data from '@/data/cases.json';

import ArrowIcon from '~/icons/arrow.svg';

import { CaseCardType as Props } from '@/types';

export const CaseCard: React.FC<Props> = ({
  slug,
  text,
  alt,
  url,
  tags,
  title,
}) => {
  const { projectDetailsLinkAriaLabel, arrowIconAriaLabel } = data;

  return (
    <div className="group rounded-[10px]">
      <div className="mb-2 h-[264px] overflow-hidden rounded-[10px] xl:mb-4 xl:h-[498px]">
        <Image
          className="size-full object-cover object-center transition-all  group-hover:scale-[1.1]"
          src={url}
          alt={alt}
          width={620}
          height={427}
          blurDataURL={url}
        />
      </div>

      <div className="mb-4 flex items-center justify-between xl:mb-8">
        <div className="flex gap-1 text-[16px]/[1.25] xl:gap-2">
          {tags.map(({ attributes: { name } }) => (
            <p
              key={name}
              className="rounded-full border border-solid border-lightBlue px-4 py-2 text-[10px]/[1.25] text-primaryText xl:px-[22px] xl:py-4 xl:text-[14px]"
            >
              {name}
            </p>
          ))}
        </div>

        <Link
          href={`/${slug}`}
          className="flex size-[40px] items-center justify-center rounded-full border border-solid border-accent text-accent transition-all hover:bg-lightBlue focus-visible:bg-lightBlue md:size-[48px]"
          aria-label={projectDetailsLinkAriaLabel}
        >
          <ArrowIcon className="size-[16px]" aria-label={arrowIconAriaLabel} />
        </Link>
      </div>

      <p className="mb-2 text-start font-geologica text-[18px]/[1.3] text-headline md:text-[20px] xl:mb-4 xl:text-[34px]">
        {title}
      </p>
      <p className="text-start text-[14px]/[1.5] text-headline md:text-[16px] xl:text-[20px]">
        {text}
      </p>
    </div>
  );
};
