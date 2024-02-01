'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/Modal';

export const ModalTest: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <button
        type="button"
        className="m-8 rounded-lg bg-slate-200 px-8 py-4"
        onClick={openModal}
      >
        OPEN
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalStyle="h-[400px] w-full rounded-[10px] bg-white"
        backdropStyle="px-4 flex items-center justify-center"
      >
        <div className="h-[400px] w-full rounded-[10px] bg-white">
          <button
            type="button"
            className="m-8 rounded-lg bg-slate-200 px-8 py-4"
            onClick={closeModal}
          >
            CLOSE
          </button>
        </div>
      </Modal>
    </>
  );
};
