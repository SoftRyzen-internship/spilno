import { Props } from './types';

export const CaseHero: React.FC<Props> = ({ title, description, tags }) => {
  return (
    <section className="bg-darkBg pb-8 pt-[146px] md:pb-[42px] md:pt-[151px] xl:pb-[64px] xl:pt-[235px]">
      <div className="container md:flex md:items-end md:justify-between">
        <div className="md:w-[327px] xl:w-[533px]">
          <h1 className="mb-4 font-geologica text-2xl/[1.15] font-light text-white md:text-[32px] xl:mb-6 xl:text-[56px]">
            {title}
          </h1>

          <p className="text-xs/[1.5] text-white md:text-[14px] xl:text-[18px] smOnly:mb-8">
            {description}
          </p>
        </div>

        <div className="flex gap-1 xl:gap-2">
          {tags.map(({ attributes: { name } }) => (
            <p
              className="rounded-full border border-lightBlue px-4 py-2 text-[10px]/[1.25] text-white xl:px-[22px] xl:py-4 xl:text-[14px]"
              key={name}
            >
              {name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
