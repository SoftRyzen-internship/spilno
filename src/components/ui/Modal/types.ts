export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalStyle?: string;
  backdropStyle?: string;
  modalWrapStyle?: string;
};
