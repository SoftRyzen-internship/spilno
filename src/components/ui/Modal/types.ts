export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalStyle?: string;
  backdropStyle?: string;
};

export type KeyboardEvent = {
  key: string;
};
