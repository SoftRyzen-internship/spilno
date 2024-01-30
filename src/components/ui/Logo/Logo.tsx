import Link from 'next/link';

import data from '@/data/common.json';

import LogoIcon from '~/icons/logo.svg';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ location }) => {
  const { logo } = data;

  const logoClassName =
    location === 'header'
      ? 'h-[30px] w-[98px] md:h-[36px] md:w-[116px] xl:h-[50px] xl:w-[165px]'
      : 'h-[36px] w-[117px] md:h-[60px] md:w-[194px]';

  return (
    <Link href={logo.path} aria-label={logo.ariaLabel}>
      <LogoIcon className={logoClassName} />
    </Link>
  );
};
