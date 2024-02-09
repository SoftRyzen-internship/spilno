import { cn } from '@/utils/cn';

import data from '@/data/common.json';

import { ContactLinksProps } from './types';

export const ContactLinks: React.FC<ContactLinksProps> = ({ location }) => {
  const { contactLinks } = data;
  const { email, telegram } = contactLinks;
  const linkClassName = location === 'menu' ? ' md:text-primaryText' : '';

  return (
    <ul className="flex flex-col gap-[16px] smOnly:items-center">
      <li className="w-fit">
        <a
          className={cn(
            'text-white transition-colors hover:text-accent focus:text-accent md:text-[18px]',
            linkClassName,
          )}
          href={`mailto:${email.path}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {email.path}
        </a>
      </li>

      <li className="w-fit">
        <a
          className={cn(
            'text-white transition-colors hover:text-accent focus:text-accent md:text-[18px]',
            linkClassName,
          )}
          href={telegram.path}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {telegram.label}
        </a>
      </li>
    </ul>
  );
};
