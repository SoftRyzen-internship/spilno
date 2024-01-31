import { ErrorMessage } from '@hookform/error-message';

import ErrorIcon from '~/icons/error.svg';

import { FormErrorProps } from './types';

export const FormError: React.FC<FormErrorProps> = ({ name, errors }) => {
  return (
    <div className="flex h-4 w-full items-center justify-start gap-1 text-red">
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <>
            <ErrorIcon className="inline-block size-4" aria-label="alert" />
            <p role="alert" className="text-xs/[1.25] font-medium">
              {message}
            </p>
          </>
        )}
      />
    </div>
  );
};
