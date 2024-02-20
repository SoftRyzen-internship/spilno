import { Logo, MainNav, Button } from '@/components/ui';
import { MobileMenu } from '@/components/base';

import { getContacts } from '@/actions/getContacts';

import data from '@/data/common.json';

export const Header: React.FC = async () => {
  const { mobileMenu } = data;

  const socialList = await getContacts();

  return (
    <header className="absolute top-0 w-full bg-darkBg py-6 xl:py-9">
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

        <MobileMenu socialList={socialList} />
      </div>
    </header>
  );
};
