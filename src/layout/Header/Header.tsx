import { Logo } from '@/components/ui/Logo';
import { MainNav } from '@/components/ui/MainNav';
import { MobileMenu } from '@/components/base/MobileMenu';
import { Button } from '@/components/ui/Button';

import data from '@/data/common.json';

export const Header: React.FC = () => {
  const { mobileMenu } = data;

  return (
    <header className="absolute top-0 w-full bg-transparent pt-6 xl:pt-9">
      <div className="container mx-auto flex items-center justify-between">
        <Logo location="header" />

        <div className="hidden items-center gap-[48px] xl:flex">
          <MainNav location="header" />

          <Button
            text={mobileMenu.link.text}
            btnStyle="transparent"
            link={mobileMenu.link.path}
          />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};
