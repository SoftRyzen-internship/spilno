'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/Modal';
import { MainNav } from '@/components/ui/MainNav';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { ContactLinks } from '@/components/ui/ContactLinks';
import { Socials } from '@/components/ui/Socials';
import { ModalBtn } from '@/components/ui/ModalBtn';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div className="xl:hidden">
      <ModalBtn
        location="header"
        ariaLabel="Кнопка відкриття меню"
        className="text-white"
        onClick={openModal}
      />

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        backdropStyle="smOnly:bg-darkBg"
        modalStyle="smOnly:container smOnly:mx-auto w-full h-full pt-[24px] pb-[32px] md:ml-auto md:w-[371px] md:bg-white md:px-[42px]"
      >
        <div className="mb-[82px] flex justify-between md:mb-[32px]">
          <Logo location="header" className="md:hidden" />

          <ModalBtn
            location="modal"
            ariaLabel="Кнопка закриття меню"
            className="text-white md:ml-auto md:text-accent"
            onClick={closeModal}
          />
        </div>

        <div className="flex h-full flex-col items-center md:items-start">
          <div className="mb-[92px] flex flex-col gap-[16px] md:mb-[64px] md:gap-[24px]">
            <MainNav location="menu" onClick={closeModal} />

            <Button
              text="Замовити проєкт"
              btnStyle="transparent"
              link="#test"
              onClick={closeModal}
            />
          </div>

          <div className="mb-[64px] flex flex-col gap-[16px] md:mb-[32px] md:gap-[24px] smOnly:items-center">
            <h3 className="font-geologica text-[18px]/[1.3] text-white md:text-[22px]/[1.4] md:text-headline ">
              Контакти
            </h3>

            <ContactLinks location="menu" />
          </div>

          <Socials location="menu" />
        </div>
      </Modal>
    </div>
  );
};
