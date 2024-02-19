'use client';

import { useState } from 'react';

import {
  Modal,
  MainNav,
  Logo,
  Button,
  ContactLinks,
  Socials,
  ModalBtn,
} from '@/components/ui';

import data from '@/data/common.json';

import { MobileMenuProps } from './types';

export const MobileMenu: React.FC<MobileMenuProps> = ({ socialList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openBtnAriaLabel, closeBtnAriaLabel, link, title } = data.mobileMenu;

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div className="xl:hidden">
      <ModalBtn
        location="header"
        ariaLabel={openBtnAriaLabel}
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
            ariaLabel={closeBtnAriaLabel}
            className="text-white transition-colors hover:text-accent focus:text-accent md:ml-auto md:text-accent md:hover:text-darkBlue md:focus:text-darkBlue"
            onClick={closeModal}
          />
        </div>

        <div className="mb-[92px] flex flex-col items-center gap-[16px] md:mb-[64px] md:items-start md:gap-[24px]">
          <MainNav location="menu" onClick={closeModal} />

          <Button
            text={link.text}
            btnStyle="transparent"
            link={link.path}
            onClick={closeModal}
          />
        </div>

        <div className="mb-[64px] flex flex-col gap-[16px] md:mb-[32px] md:gap-[24px] smOnly:items-center">
          <h3 className="font-geologica text-[18px]/[1.3] text-white md:text-[22px]/[1.4] md:text-headline ">
            {title}
          </h3>

          <ContactLinks location="menu" />
        </div>

        {socialList && <Socials location="menu" socialList={socialList} />}
      </Modal>
    </div>
  );
};
