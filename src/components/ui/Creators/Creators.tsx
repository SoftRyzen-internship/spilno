import { cn } from '@/utils/cn';
import data from '@/data/common.json';

import GoitLogo from '~/images/footer/logo-goit.svg';
import SoftryzenLogo from '~/images/footer/logo-softryzen.svg';

import css from './Creators.module.css';

export const Creators: React.FC = () => {
  const { label, creators } = data.footer.devs;
  const [goit, softryzen] = creators;

  return (
    <div className="md:flex md:items-center md:justify-center md:gap-8 smOnly:p-4 mdOnly:p-5">
      <p className="text-xs/[1.5] text-white md:text-sm/[1.25] smOnly:mb-2">
        {label}
      </p>
      <ul className="flex h-10 items-center justify-center md:h-14 smOnly:mx-auto smOnly:max-w-[240px]">
        <li className="size-full">
          <a
            href={goit.href}
            title={goit.label}
            className="group relative inline-block transition duration-500 hover:scale-110  focus:scale-110"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={goit.ariaLabel}
          >
            <GoitLogo
              width={129}
              height={56}
              aria-label={goit.ariaLabel}
              className={cn(
                'h-10 w-[91px] transition duration-500 group-hover:scale-110 group-focus:scale-110 md:h-14 md:w-[129px]',
                css.creatorsLogo,
              )}
            />
          </a>
        </li>
        <li className="size-full">
          <a
            href={softryzen.href}
            title={softryzen.label}
            className="group inline-block transition duration-500 hover:scale-110 focus:scale-110"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={softryzen.ariaLabel}
          >
            <SoftryzenLogo
              width={208}
              height={56}
              aria-label={softryzen.ariaLabel}
              className="h-10 w-[148px] brightness-[0.9] contrast-[0.85] hue-rotate-[321deg] invert-[0.3] saturate-[0.15] sepia-[0.1] transition duration-500 group-hover:scale-110 group-hover:filter-none group-focus:scale-110 group-focus:filter-none md:h-14 md:w-[208px]"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
