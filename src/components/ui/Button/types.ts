export type ButtonProps = {
  link?: string | undefined;
  text: string;
  children?: React.ReactNode;
  btnStyle?: 'primary' | 'accent' | 'transparent' | 'submit';
  className?: string;
};
