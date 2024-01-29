'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/Modal';

export const ModalTest: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        type="button"
        className="m-8 rounded-lg bg-slate-200 px-8 py-4"
        onClick={toggleModal}
      >
        OPEN
      </button>

      <Modal
        isOpen={isOpen}
        onClose={toggleModal}
        modalStyle="h-[400px] w-full rounded-[10px] bg-white"
        backdropStyle="px-4 flex items-center justify-center"
      >
        <button
          type="button"
          className="m-8 rounded-lg bg-slate-200 px-8 py-4"
          onClick={toggleModal}
        >
          CLOSE
        </button>
      </Modal>
    </>
  );
};
