'use client';

import Link from 'next/link';

import { cn } from '@/utils/cn';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  link,
  text,
  children,
  btnStyle = 'primary',
  className,
  onClick,
}) => {
  const btnClass = cn(
    'inline-flex justify-center items-center gap-4 rounded-[48px] font-geologica text-[16px] font-medium leading-[1.5] xl:text-[20px] xl:leading-[1.35] transition-all',
    {
      'bg-white text-accent py-4 px-6 xl:py-5 xl:px-8 hover:bg-darkBlue focus:bg-darkBlue hover:text-white focus:text-white':
        btnStyle === 'primary',
      'bg-accent text-white py-4 pr-5 pl-6 xl:py-5 xl:pr-6 xl:pl-8 hover:bg-darkBlue focus:bg-darkBlue':
        btnStyle === 'accent',
      'bg-transparent text-white mdOnly:text-accent border border-[0.5px] border-[0.5px] border-solid border-accent text-[14px] xl:text-[16px] py-3 px-6 leading-[1.71] xl:leading-[1.5] hover:bg-accent/10 focus:bg-accent/10':
        btnStyle === 'transparent',
      'bg-accent text-white text-[16px] md:text-[20px] py-4 pr-5 pl-6 md:pl-8 md:py-5 md:pr-6 leading-[1.5] md:leading-[1.35] hover:bg-darkBlue focus:bg-darkBlue':
        btnStyle === 'submit',
    },
    className,
  );

  return (
    <>
      {!link && (
        <button className={btnClass} type="submit">
          <span>{text}</span>

          <span>{children}</span>
        </button>
      )}

      {link && (
        <Link href={link} className={btnClass} onClick={onClick}>
          <span>{text}</span>
          {children}
        </Link>
      )}
    </>
  );
};
