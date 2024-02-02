'use client';

type Props = {
  title: string;
};

export const SliderTestCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex size-[100px] items-center justify-center bg-orange-600 ">
      <p>{title}</p>
    </div>
  );
};
