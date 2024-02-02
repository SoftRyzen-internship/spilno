import { cn } from '@/utils/cn';

import MenuIcon from '~/icons/menu.svg';
import CrossIcon from '~/icons/cross.svg';

import { ModalBtnProps } from './types';

export const ModalBtn: React.FC<ModalBtnProps> = ({
  location,
  ariaLabel,
  onClick,
  className = '',
  iconClassName = '',
}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {location === 'header' ? (
        <MenuIcon className="size-[30px] md:size-[32px]" />
      ) : (
        <CrossIcon
          className={cn('size-[30px] md:size-[32px]', iconClassName)}
        />
      )}
    </button>
  );
};
