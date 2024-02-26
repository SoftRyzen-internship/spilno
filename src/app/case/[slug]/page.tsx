import { Metadata } from 'next';

import { getOnePage } from '@/actions/getOnePage';
import { getAllPagesSlug } from '@/actions/getAllPagesSlug';

import { ContactUs, Overview } from '@/sections';

export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const onePageData = await getOnePage(slug);

  return {
    title: onePageData?.title,
    description: onePageData?.description,
    alternates: {
      canonical: `/case/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const pages = await getAllPagesSlug();

  const staticParams =
    pages?.map(page => {
      return {
        slug: page.attributes.slug.data.attributes.slug,
      };
    }) || [];

  return staticParams;
}

export default async function CasePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const onePageData = await getOnePage(slug);

  return (
    <>
      {/* <CaseHero />  */}

      <Overview data={onePageData} />

      {/* <Cases /> */}

      {/* <CaseReview /> */}

      <ContactUs />
    </>
  );
}
