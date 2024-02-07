'use client';

import Image from 'next/image';

import { PartnersCardProps } from './types';

export const PartnersCard: React.FC<PartnersCardProps> = ({ image }) => (
  <div className="size-[96px] rounded-full border-strokeColor md:size-[120px] xl:size-[182px]">
    <Image
      src={image.src}
      width={182}
      height={182}
      alt={image.alt}
      loading="lazy"
      className="size-[94px] md:size-[118px] xl:size-[180px]"
    />
  </div>
);
