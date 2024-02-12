import { getContacts } from '@/actions/getContacts';

import { cn } from '@/utils/cn';

import data from '@/data/common.json';

import Facebook from '~/icons/facebook.svg';
import Instagram from '~/icons/instagram.svg';
import Linkedin from '~/icons/linkedin.svg';

import { SocialsProps } from './types';

export const Socials: React.FC<SocialsProps> = async ({ location }) => {
  const { ariaLabel } = data.socialLinks;

  const socialList = await getContacts();

  if (!socialList || typeof socialList !== 'object') {
    return null;
  }

  const linkClassName =
    location === 'menu'
      ? 'bg-accent hover:bg-darkBlue focus:bg-darkBlue'
      : 'border border-accent hover:bg-accent focus:bg-accent';

  return (
    <ul className="flex gap-[20px] smOnly:justify-center">
      {Object.keys(socialList).map(contact => (
        <li key={contact}>
          <a
            className={cn(
              'flex size-[40px] items-center justify-center rounded-full  text-white transition-colors',
              linkClassName,
            )}
            href={socialList[contact as keyof typeof socialList]}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={ariaLabel.concat(' ', contact)}
          >
            {contact === 'facebook' && <Facebook className="size-[24px]" />}

            {contact === 'instagram' && <Instagram className="size-[24px]" />}

            {contact === 'linkedin' && <Linkedin className="size-[24px]" />}
          </a>
        </li>
      ))}
    </ul>
  );
};
