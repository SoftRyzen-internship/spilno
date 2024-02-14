'use client';

import { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';
import { FormCheckbox } from '@/components/ui/FormCheckbox';
import { FormListbox } from '@/components/ui/FormListbox';
import { FormPhoneField } from '@/components/ui/FormPhoneField';
import { FormPopup } from '@/components/ui/FormPopup';
import { Spinner } from '@/components/ui/Spinner';
import { FormTextArea } from '@/components/ui/FormTextArea';

import { cn } from '@/utils/cn';
import content from '@/data/contactUs.json';

import { sendTelegramData } from '@/actions/sendTelegramData';

import IconArrow from '~/icons/arrow.svg';

import { schema } from './schema';
import { sendOrderDataToGoogleSheet } from '@/actions/sendOrderDataToGoogleSheet';

export const ContactUsForm: React.FC = () => {
  const { formName, inputs, textarea, checkbox, select, submitBtn } =
    content.form;

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const closePopup = () => setIsOpenPopup(false);
  const openPopup = () => setIsOpenPopup(true);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  useFormPersist(formName, {
    watch,
    setValue,
    exclude: [checkbox.name],
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
       Promise.all([
         await sendTelegramData(data),
         await sendOrderDataToGoogleSheet(data),
       ]);
      console.log(data);
      setIsSuccess(true);
      reset();
    } catch {
      setIsSuccess(false);
    }

    openPopup();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="-mx-4 bg-white font-geologica sm:mx-auto sm:rounded-[10px] md:w-[624px] md:p-12 smOnly:px-4 smOnly:py-8">
          <div className="md:mb-4 md:grid md:grid-cols-2 md:gap-4">
            {inputs.map(input => {
              if (input.type === 'tel') {
                return (
                  <FormPhoneField
                    key={input.id}
                    control={control}
                    {...input}
                    errors={errors}
                    className="smOnly:mb-4"
                  />
                );
              }
              return (
                <FormField
                  key={input.id}
                  {...input}
                  register={register}
                  errors={errors}
                  className={cn('smOnly:mb-4', {
                    'md:order-last md:col-span-2': input.type === 'email',
                  })}
                />
              );
            })}

            <FormListbox
              control={control}
              {...select}
              errors={errors}
              className="smOnly:mb-6"
            />
          </div>

          <FormTextArea
            {...textarea}
            register={register}
            errors={errors}
            className="md:mb-6 smOnly:mb-4"
          />

          <FormCheckbox
            {...checkbox}
            register={register}
            errors={errors}
            className="md:mb-8 smOnly:mb-10"
          />

          <Button
            text={submitBtn.label}
            className="mx-auto flex w-full md:max-w-[338px] xl:inline-flex"
            btnStyle="submit"
          >
            {isSubmitting ? (
              <Spinner />
            ) : (
              <IconArrow className="size-5 md:size-6" />
            )}
          </Button>
        </div>
      </form>

      {isOpenPopup && (
        <FormPopup
          isOpen={isOpenPopup}
          onClose={closePopup}
          isSuccess={isSuccess}
        />
      )}
    </>
  );
};
