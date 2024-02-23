import { BusinessClientCard, SectionTitle } from '@/components/ui';

import data from '@/data/business-page.json';

export const BusinessClients: React.FC = () => {
  const { id, title, desc, clients } = data.businessClients;

  return (
    <section id={id} className="section bg-lightBg">
      <div className="container xl:grid xl:grid-cols-2">
        <div className="mb-8 text-center xl:mb-0 xl:max-w-[493px] xl:text-left">
          <SectionTitle className="mb-4 xl:mb-6 xl:text-left" isCentered>
            {title}
          </SectionTitle>

          <p className="max-xl:max-w-[448px] max-xl:mx-auto text-sm/[1.5] md:text-base xl:text-lg/[1.5] ">
            {desc}
          </p>
        </div>

        <ul className="md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-20 xl:gap-x-6 xl:gap-y-12 smOnly:space-y-12">
          {clients.map(client => (
            <li key={client.id}>
              <BusinessClientCard {...client} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
