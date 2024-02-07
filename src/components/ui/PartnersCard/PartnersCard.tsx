'use client';

import Image from 'next/image';

import { PartnersCardProps } from './types';

export const PartnersCard: React.FC<PartnersCardProps> = ({ image }) => (
  <div className="rounded-full border-[1px] border-strokeColor">
    <Image
      src={image.src}
      width={182}
      height={182}
      alt={image.alt}
      className="size-[94px] md:size-[118px] xl:size-[180px]"
    />
  </div>
);
