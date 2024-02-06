import SpinnerIcon from '~/icons/spinner.svg';

export const Spinner: React.FC = () => (
  <SpinnerIcon
    width={24}
    height={24}
    className="size-5 animate-spin md:size-6"
  />
);
