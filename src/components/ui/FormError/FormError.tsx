import { ErrorMessage } from '@hookform/error-message';

import content from '@/data/contactUs.json';

import ErrorIcon from '~/icons/error.svg';

import { FormErrorProps } from './types';

export const FormError: React.FC<FormErrorProps> = ({ name, errors }) => {
  const { ariaLabel } = content.form.error;

  return (
    <div className="flex h-4 w-full items-center justify-start gap-1 text-red">
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <>
            <ErrorIcon
              className="inline-block size-4 shrink-0"
              aria-label={ariaLabel}
            />

            <p
              role="alert"
              className="!self-center font-raleway text-xs/4 font-medium"
            >
              {message}
            </p>
          </>
        )}
      />
    </div>
  );
};
