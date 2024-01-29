'use client';

type Props = {
  slide: {
    title: string;
  };
};

export const SliderTestCard: React.FC<Props> = ({ slide: { title } }) => {
  return (
    <div className="flex size-[50px] items-center justify-center bg-orange-600 ">
      <p>{title}</p>
    </div>
  );
};
