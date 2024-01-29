import Image from 'next/image';

import { cn } from '@/utils/cn';

import { ImageWithCircleProps } from './types';
import css from './ImageWithCircle.module.css';

export const ImageWithCircle: React.FC<ImageWithCircleProps> = ({
  width,
  type,
  src,
  alt,
  className,
}) => {
  console.log(type);
  return (
    <div
      className={cn(
        'relative aspect-square rounded-full',
        `w-[${width}px]`,
        css.circle,
        className,
      )}
      //   style={{ width: `${width}px` }}
    >
      <Image
        alt={alt}
        src={src}
        fill
        className="object-cover"
        sizes="(max-width: 767px) 100vw,(min-width: 768px) 592px, (min-width: 1280px) 548px"
      />
    </div>
  );
};
