import { ContactUsForm } from '@/components/base/ContactUsForm';
import { SectionTitle } from '@/components/ui/SectionTitle';

import content from '@/data/contactUs.json';

export const ContactUs: React.FC = () => {
  const { id, title, desc } = content;

  return (
    <section id={id} className="section bg-darkBg">
      <div className="container xl:flex xl:justify-between">
        <div className="md:mb-12 xl:w-[486px] smOnly:mb-[60px] mdOnly:mx-auto mdOnly:max-w-[448px]">
          <SectionTitle className="mb-4 xl:text-left" isWhite isCentered>
            {title}
          </SectionTitle>
          <p className="text-center text-sm/[1.5] text-white md:text-base xl:mb-16 xl:text-left xl:text-lg/[1.5]">
            {desc}
          </p>
        </div>
        <ContactUsForm />
      </div>
    </section>
  );
};
