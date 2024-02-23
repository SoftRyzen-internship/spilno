import { ContactUs, Overview, Cases } from '@/sections';

import casePageData from '@/data/case-page.json';

export default function CasePage() {
  const { cases } = casePageData;

  return (
    <>
      {/* <CaseHero /> */}

      <Overview />

      <Cases {...cases} />

      {/* <CaseReview /> */}

      <ContactUs />
    </>
  );
}
