import { PartnersCard, SectionTitle, Slider } from '@/components/ui';

import { getPartners } from '@/actions/getPartners';

import data from '@/data/common.json';

export const Partners: React.FC = async () => {
  const { id, title, desc } = data.partners;

  const partnersList = await getPartners();

  return (
    <section id={id} className="section bg-white">
      <div className="container">
        <div className="mx-auto mb-6 max-w-[448px] md:mb-10 xl:mb-12 xl:max-w-[624px]">
          <SectionTitle className="mb-4 xl:mb-3" isCentered>
            {title}
          </SectionTitle>

          <p className="text-center text-sm/[1.5] md:text-base xl:text-lg/[1.5]">
            {desc}
          </p>
        </div>

        {partnersList && (
          <Slider
            section="partners"
            slidesData={partnersList}
            slideComponent={PartnersCard}
            wrapClassName="smOnly:max-w-[328px] mx-auto"
          />
        )}
      </div>
    </section>
  );
};
