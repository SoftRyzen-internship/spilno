import Link from 'next/link';

import data from '@/data/common.json';

import { MainNavProps } from './types';

export const MainNav: React.FC<MainNavProps> = ({ location, onClick }) => {
  const { navLinks } = data;
  const navClassName = location === 'header' ? 'hidden xl:block' : '';

  return (
    <nav className={navClassName}>
      <ul className="flex flex-col gap-[16px] md:gap-[24px] xl:flex-row xl:gap-[32px] smOnly:items-center">
        {navLinks.map(link => (
          <li className="w-fit" key={link.path}>
            <Link
              className="text-white transition-all hover:text-accent focus:text-accent md:text-[18px]
              xl:font-geologica xl:text-[16px] xl:font-extralight xl:leading-[1.69] mdOnly:text-headline"
              href={link.path}
              onClick={onClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
