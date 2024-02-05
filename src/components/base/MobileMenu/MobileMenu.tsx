'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/Modal';
import { MainNav } from '@/components/ui/MainNav';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { ContactLinks } from '@/components/ui/ContactLinks';
import { Socials } from '@/components/ui/Socials';
import { ModalBtn } from '@/components/ui/ModalBtn';

import data from '@/data/common.json';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mobileMenu } = data;

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div className="xl:hidden">
      <ModalBtn
        location="header"
        ariaLabel={mobileMenu.openBtnAriaLabel}
        className="text-white transition-colors hover:text-accent focus:text-accent"
        onClick={openModal}
      />

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        backdropStyle="smOnly:bg-darkBg"
        modalStyle="smOnly:container smOnly:mx-auto w-full h-full pt-[24px] pb-[32px] md:ml-auto md:w-[371px] md:bg-white md:px-[42px] md:pb-[48px]"
      >
        <div className="mb-[82px] flex justify-between md:mb-[32px]">
          <Logo location="header" className="md:hidden" />

          <ModalBtn
            location="modal"
            ariaLabel={mobileMenu.closeBtnAriaLabel}
            className="text-white transition-colors hover:text-accent focus:text-accent md:ml-auto md:text-accent md:hover:text-darkBlue md:focus:text-darkBlue"
            onClick={closeModal}
          />
        </div>

        <div className="mb-[92px] flex flex-col items-center gap-[16px] md:mb-[64px] md:items-start md:gap-[24px]">
          <MainNav location="menu" onClick={closeModal} />

          <Button
            text={mobileMenu.link.text}
            btnStyle="transparent"
            link={mobileMenu.link.path}
            onClick={closeModal}
          />
        </div>

        <div className="mb-[64px] flex flex-col gap-[16px] md:mb-[32px] md:gap-[24px] smOnly:items-center">
          <h3 className="font-geologica text-[18px]/[1.3] text-white md:text-[22px]/[1.4] md:text-headline ">
            {mobileMenu.title}
          </h3>

          <ContactLinks location="menu" />
        </div>

        <Socials location="menu" />
      </Modal>
    </div>
  );
};
