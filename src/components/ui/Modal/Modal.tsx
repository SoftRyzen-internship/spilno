'use client';

import { useState, useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/utils/cn';

import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  modalStyle,
  backdropStyle,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose && onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClickBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };

  return !mounted
    ? null
    : createPortal(
        <div
          className={cn(
            'z-80 fixed inset-0 flex items-center justify-center backdrop-blur-md transition-all duration-300',
            { 'visible bg-backdropBg/25 opacity-100': isOpen },
            { 'invisible opacity-0': !isOpen },
            backdropStyle,
          )}
          onClick={handleClickBackdrop}
        >
          <div
            className={cn(
              'transition-all duration-300',
              { 'scale-100 opacity-100': isOpen },
              { 'scale-125 opacity-0': !isOpen },
              modalStyle,
            )}
          >
            {children}
          </div>
        </div>,
        document.getElementById('modal-portal') as HTMLElement,
      );
};
