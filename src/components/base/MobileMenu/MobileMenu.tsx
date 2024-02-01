'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/Modal';
import { MainNav } from '@/components/ui/MainNav';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';

import MenuIcon from '~/icons/menu.svg';
import CrossIcon from '~/icons/cross.svg';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="text-white"
        onClick={openModal}
        aria-label="Кнопка відкриття меню"
      >
        <MenuIcon className="size-[30px] md:size-[32px]" />
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        backdropStyle="smOnly:bg-darkBg"
        modalStyle="smOnly:container smOnly:mx-auto w-full h-full pt-[24px] pb-[32px] md:ml-auto md:w-[371px] md:bg-white md:px-[42px]"
      >
        <div className="mb-[82px] flex justify-between md:mb-[32px]">
          <Logo location="header" className="md:hidden" />

          <button
            type="button"
            className="text-white md:ml-auto md:text-accent"
            onClick={closeModal}
            aria-label="Кнопка закриття меню"
          >
            <CrossIcon className="ml-auto size-[30px] md:size-[36px]" />
          </button>
        </div>

        <div className="flex h-full flex-col items-center gap-[92px] md:items-start">
          <div className="flex flex-col gap-[16px] md:gap-[24px]">
            <MainNav location="menu" onClick={closeModal} />
            <Button
              text="Замовити проєкт"
              btnStyle="transparent"
              link="#test"
              onClick={closeModal}
            />
          </div>

          <div className="flex flex-col gap-[16px] md:gap-[24px]">
            <h3 className="text-[18px]/[1.3] text-white">Контакти</h3>
          </div>
        </div>
      </Modal>
    </div>
  );
};
