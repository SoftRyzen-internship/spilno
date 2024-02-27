import { CasesSlider } from '@/components/base';
import { SectionTitle, Button, SliderControls } from '@/components/ui';

import { getMainPageCases } from '@/actions/getMainPageCases';

import data from '@/data/common.json';

import ArrowIcon from '~/icons/arrow.svg';

import { CasesProps } from './types';

export const Cases: React.FC<CasesProps> = async ({
  title,
  showAllProjectsLinkText,
  slug,
}) => {
  const { showAllProjectsLinkPath, arrowIconAriaLabel } = data.cases;

  const slidesData = await getMainPageCases();

  const finalSlidesData = slug
    ? slidesData?.filter(({ slug: s }) => s !== slug)
    : slidesData;

  return (
    <>
      {finalSlidesData && (
        <section className="section" id="cases">
          <div className="container relative text-center">
            <SectionTitle
              className="mb-8 w-[258px] text-start md:mb-12 md:w-[448px] xl:mb-16 xl:w-[596px]"
              isCentered={false}
            >
              {title}
            </SectionTitle>

            <CasesSlider slidesData={finalSlidesData} />
            <SliderControls
              wrapClassName="mb-8 flex justify-center md:absolute md:top-[4px] right-[42px] md:mb-0 xl:right-[32px] xl:top-[29px]"
              section="cases"
            />

            <Button
              btnStyle="accent"
              className="smOnly:w-full"
              link={showAllProjectsLinkPath}
              text={showAllProjectsLinkText}
            >
              <ArrowIcon
                className="xl:w-6"
                width="20"
                height="20"
                aria-label={arrowIconAriaLabel}
              />
            </Button>
          </div>
        </section>
      )}
    </>
  );
};
