import { AdvantagesCard } from '@/components/ui/AdvantagesCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

import content from '@/data/advantages.json';

export const Advantages: React.FC = () => {
  const { id, title, desc, features } = content;

  return (
    <section id={id} className="section bg-white">
      <div className="container">
        <SectionTitle className="mb-4 md:mb-7 xl:mb-6" isCentered>
          {title}
        </SectionTitle>
        <p className="mb-8 text-center text-sm/[1.5] md:text-base xl:text-lg/[1.5]">
          {desc}
        </p>
        <ul className="flex">
          {features.map(feature => (
            <li key={feature.idx}>
              <AdvantagesCard data={feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// },
// {
//   "title": "Професійний підхід",
//   "description": "Робота виконується стажерами під менторством досвідчених спеціалістів.",
//   "image": "/images/advantages/advantages-02.svg"
// },
// {
//   "title": "Доступ до талантів",
//   "description": "Взаємодія надає можливість бізнесу співпрацювати з талановитими студентами.",
//   "image": "/images/advantages/advantages-03.svg"
// },
// {
//   "title": "Сприяння освіті",
//   "description": "Бізнес виступає сприячем для освіти та розвитку молодих спеціалістів.",
//   "image": "/images/advantages/advantages-04.svg"
