export type ModalBtnProps = {
  location: 'header' | 'modal';
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};
