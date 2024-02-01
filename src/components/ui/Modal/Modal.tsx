'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { cn } from '@/utils/cn';

import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  modalStyle,
  backdropStyle,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div />
        </Transition.Child>

        <div
          className={cn(
            'fixed inset-0 bg-backdropBg/25 backdrop-blur-md',
            backdropStyle,
          )}
          aria-hidden="true"
        >
          <div className="fixed inset-0 w-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cn('overflow-hidden transition-all', modalStyle)}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
