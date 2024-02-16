import { ContactLinks } from '@/components/ui/ContactLinks';
import { Creators } from '@/components/ui/Creators';
import { Logo } from '@/components/ui/Logo';
import { Socials } from '@/components/ui/Socials';

import { getContacts } from '@/actions/getContacts';

import content from '@/data/footer.json';

export const Footer: React.FC = async () => {
  const { policy, copyrights } = content;

  const socialList = await getContacts();

  return (
    <footer className="md:delimiter overflow-hidden bg-darkBg pt-[60px] text-center text-white md:pt-20 md:after:bg-accent xl:pt-16">
      <div className="container mx-auto">
        <div className="md:flex md:items-center md:justify-between xl:mb-20 smOnly:mb-8 smOnly:space-y-8 mdOnly:mb-16 mdOnly:flex-wrap mdOnly:gap-16">
          <div className="mdOnly:w-full">
            <Logo location="footer" className="mx-auto inline-block" />
          </div>

          <ContactLinks location="footer" />

          {socialList && <Socials location="footer" socialList={socialList} />}
        </div>

        <div className="delimiter text-xs/[1.5] md:text-sm/[1.25] xl:flex xl:items-center xl:justify-between xl:py-5">
          <Creators />

          <div className="delimiter md:flex md:items-center md:justify-between xl:gap-[76px] xl:after:hidden smOnly:py-4 mdOnly:py-8">
            <a
              href={policy.href}
              className="inline-block transition-colors hover:text-accent focus:text-accent smOnly:mx-auto smOnly:mb-6"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <p>{policy.label}</p>
            </a>

            <p>{copyrights.label}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
