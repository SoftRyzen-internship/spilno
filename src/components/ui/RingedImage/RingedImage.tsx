import { cn } from '@/utils/cn';

import { RingedImageProps } from './types';

export const RingedImage: React.FC<RingedImageProps> = ({
  variant,
  ringType,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'relative aspect-square',
        {
          "after:absolute after:left-0 after:top-0 after:block after:size-full after:rounded-full after:bg-transparent after:content-['']":
            variant,
        },
        variant === 'right'
          ? 'after:translate-x-1/2'
          : 'after:-translate-x-1/2',
        ringType === 'hero'
          ? 'after:border-[3px] after:border-heroRing'
          : 'after:border-2 after:border-white',
        className,
      )}
    >
      <div
        className={cn('relative aspect-square overflow-hidden rounded-full')}
      >
        {children}
      </div>
    </div>
  );
};
