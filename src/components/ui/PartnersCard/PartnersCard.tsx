'use client';

import Image from 'next/image';

import { PartnersCardProps } from './types';

export const PartnersCard: React.FC<PartnersCardProps> = ({ url, alt }) => (
  <div className="size-[96px] rounded-full border-strokeColor md:size-[120px] xl:size-[182px]">
    <Image
      src={url}
      width={182}
      height={182}
      alt={alt}
      loading="lazy"
      className="size-[94px] md:size-[118px] xl:size-[180px]"
    />
  </div>
);
