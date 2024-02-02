import { cn } from '@/utils/cn';

import data from '@/data/common.json';

import Facebook from '~/icons/facebook.svg';
import Instagram from '~/icons/instagram.svg';
import Linkedin from '~/icons/linkedin.svg';

import { SocialsProps } from './types';

export const Socials: React.FC<SocialsProps> = ({ location }) => {
  const { socialLinks } = data;
  const linkClassName =
    location === 'menu'
      ? 'bg-accent hover:bg-darkBlue focus:bg-darkBlue'
      : 'border border-accent hover:bg-accent focus:bg-accent';

  return (
    <ul className="flex gap-[20px]">
      {socialLinks.map(({ path, ariaLabel, label }) => (
        <li key={path}>
          <a
            className={cn(
              'flex size-[40px] items-center justify-center rounded-full  text-white transition-colors',
              linkClassName,
            )}
            href={path}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={ariaLabel}
          >
            {label === 'facebook' && <Facebook className="size-[24px]" />}

            {label === 'instagram' && <Instagram className="size-[24px]" />}

            {label === 'linkedin' && <Linkedin className="size-[24px]" />}
          </a>
        </li>
      ))}
    </ul>
  );
};
