export type ButtonProps = {
  link?: string | undefined;
  text: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | undefined;
  disabled?: boolean;
  actionHandler?: () => void;
  btnStyle?: 'primary' | 'accent' | 'transparent' | 'submit';
  iconWrapStyles?: string;
  textStyle?: string;
  classNames?: string;
};
