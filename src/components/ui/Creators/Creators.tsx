import content from '@/data/footer.json';

import GoitLogo from '~/images/footer/logo-goit.svg';
import SoftryzenLogo from '~/images/footer/logo-softryzen.svg';
import GoitSepiaLogo from '~/images/footer/logo-goit-sepia.svg';

export const Creators: React.FC = () => {
  const { label, creators } = content.devs;
  const [goit, softryzen] = creators;

  return (
    <div className="md:flex md:items-center md:justify-center md:gap-8 smOnly:p-4 mdOnly:p-5">
      <p className="text-xs/[1.5] text-white md:text-sm/[1.25] smOnly:mb-2">
        {label}
      </p>
      <ul className="flex h-10 items-center justify-center md:h-14">
        <li className="size-full">
          <a
            href={goit.href}
            title={goit.label}
            className="group relative inline-block transition hover:scale-110 focus:scale-110"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <GoitLogo
              width={129}
              height={56}
              aria-label={goit.ariaLabel}
              className="absolute inset-0 z-10 h-10 w-[91px] opacity-0 transition-all group-hover:scale-110 group-hover:opacity-100 group-focus:scale-110 group-focus:opacity-100 md:h-14 md:w-[129px]"
            />

            <GoitSepiaLogo
              width={129}
              height={56}
              aria-label={goit.ariaLabel}
              className="h-10 w-[91px] opacity-100 transition-all group-hover:opacity-0 group-focus:opacity-0 md:h-14 md:w-[129px]"
            />
          </a>
        </li>
        <li className="size-full">
          <a
            href={softryzen.href}
            title={softryzen.label}
            className="group inline-block transition hover:scale-110 focus:scale-110"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <SoftryzenLogo
              width={208}
              height={56}
              aria-label={softryzen.ariaLabel}
              className="h-10 w-[148px] brightness-[0.89] contrast-[0.85] hue-rotate-[321deg] invert-[0.79] saturate-[0.15] sepia-[0.12] transition group-hover:scale-110 group-hover:filter-none group-focus:scale-110 group-focus:filter-none md:h-14 md:w-[208px]"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
