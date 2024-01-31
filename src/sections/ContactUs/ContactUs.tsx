import { ContactUsForm } from '@/components/base/ContactUsForm';
import { SectionTitle } from '@/components/ui/SectionTitle';

import content from '@/data/contactUs.json';

export const ContactUs: React.FC = () => {
  const { id, title, desc } = content;

  return (
    <section id={id} className="section bg-darkBg">
      <div className="container">
        <SectionTitle className="mb-4 " isWhite isCentered>
          {title}
        </SectionTitle>
        <p className="mb-[60px] text-center text-sm/[1.5] text-white">{desc}</p>
        <ContactUsForm />
      </div>
    </section>
  );
};
