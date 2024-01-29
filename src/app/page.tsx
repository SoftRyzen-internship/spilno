import { SectionTitle } from '@/components/ui/SectionTitle';
import { Logo } from '@/components/ui/Logo';
import { ModalTest } from '@/components/base/ModalTest';
import { RingedImageTest } from '@/components/base/RingedImageTest';
import { MainNav } from '@/components/ui/MainNav';

export default function Home() {
  return (
    <div>
      <div className="container bg-darkBg">
        <Logo location="header" />
      </div>

      <div className="container bg-darkBg mdOnly:bg-white">
        <MainNav location="header" />
        <MainNav location="menu" />
      </div>

      <div className="container">
        <SectionTitle
        // Стили, для того, чтобы проверить отбражение в секции About
        // className="text-[18px]/[1.3] md:text-[20px]/[1.3] xl:text-[34px]/[1.3]"
        >
          Хочеш розширити свій бізнес у віртуальному просторі?
        </SectionTitle>
      </div>

      <div className="container space-y-6 overflow-hidden bg-darkBg">
        <ModalTest />

        <RingedImageTest />
      </div>
    </div>
  );
}
