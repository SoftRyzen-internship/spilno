import { cn } from '@/utils/cn';

import { SectionTitleProps } from './types';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = '',
  isWhite = false,
  isCentered = false,
}) => {
  return (
    <h2
      className={cn(
        'font-geologica text-[20px]/[1.35] text-headline md:text-[24px] xl:text-[42px]',
        {
          'text-white': isWhite,
          'text-center': isCentered,
        },
        className,
      )}
    >
      {children}
    </h2>
  );
};
