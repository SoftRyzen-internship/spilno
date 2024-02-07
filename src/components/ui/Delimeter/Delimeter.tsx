import { cn } from '@/utils/cn';

import { DelimeterProps } from './types';

export const Delimeter: React.FC<DelimeterProps> = ({ className = '' }) => {
  return (
    <div
      className={cn(
        'absolute left-0 h-[1px] w-screen bg-delimeterGrey',
        className,
      )}
    />
  );
};
