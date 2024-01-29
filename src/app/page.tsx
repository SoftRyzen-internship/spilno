import { SectionTitle } from '@/components/ui/SectionTitle';

export default function Home() {
  return (
    <div>
      <div className="container">
        <SectionTitle
        // Стили, для того, чтобы проверить отбражение в секции About
        // className="text-[18px]/[1.3] md:text-[20px]/[1.3] xl:text-[34px]/[1.3]"
        >
          Хочеш розширити свій бізнес у віртуальному просторі?
        </SectionTitle>
      </div>
    </div>
  );
}
