export type HeroProps = {
  id: string;
  title: string;
  desc: string;
  image: {
    src: string;
    alt: string;
  };
  button: {
    label: string;
    target: string;
  };
  className?: string;
  descClassName?: string;
};
