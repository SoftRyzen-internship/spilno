import { SliderTest } from '@/components/base/SliderTest/SliderTest';
import { Logo } from '@/components/ui/Logo';
import { MainNav } from '@/components/ui/MainNav';
import { MobileMenu } from '@/components/base/MobileMenu';

export default function Home() {
  return (
    <div>
      <div className="container">
        <SliderTest />
      </div>

      <div className=" container bg-darkBg">
        <div className="container flex items-center justify-between bg-darkBg">
          <Logo location="header" />
          <MainNav location="header" />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
