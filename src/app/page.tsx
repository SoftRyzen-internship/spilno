import { SectionTitle } from '@/components/ui/SectionTitle';
import { Logo } from '@/components/ui/Logo';
import { ModalTest } from '@/components/base/ModalTest';
import { RingedImageTest } from '@/components/base/RingedImageTest';
import { MainNav } from '@/components/ui/MainNav';

import { Button } from '@/components/ui/Button';

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

      <>
        <div className="h-[1000px]  bg-slate-500">
          <Button text="Детальніше для бізнесу" btnStyle="transparent">
            Icon2
          </Button>
          <Button text="Детальніше для бізнесу" btnStyle="accent">
            Icon
          </Button>
          <Button text="Детальніше для бізнесу" link="#test" btnStyle="primary">
            link
          </Button>
          <Button text="Детальніше для бізнесу" btnStyle="submit">
            S-t
          </Button>
          <Button text="Детальніше для бізнесу" btnStyle="submit">
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="none"
            >
              <path
                fill="url(#a)"
                fillRule="evenodd"
                d="M12.5 24.5c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm0-2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
                clipRule="evenodd"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M23.282 10.102a1 1 0 0 1 1.12.864 12 12 0 0 1 .099 1.535 1 1 0 1 1-2 0c0-.428-.028-.855-.082-1.28a1 1 0 0 1 .863-1.119Z"
                clipRule="evenodd"
              />

              <defs>
                <radialGradient
                  id="a"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientTransform="matrix(12 0 0 12 12.5 12.5)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" stopOpacity={0} />
                  <stop offset={0.01} stopColor="#fff" stopOpacity={0} />
                  <stop offset={1} stopColor="#fff" />
                  <stop offset={1} stopColor="#fff" />
                </radialGradient>
              </defs>
            </svg>
          </Button>

          <Button text="Детальніше для бізнесу">primary-def</Button>
        </div>
        <div>
          <div className="h-[1000px] w-full bg-yellow-600"></div>
          <section id="test">section</section>
        </div>
      </>
    </div>
  );
}
