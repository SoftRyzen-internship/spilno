'use client';

import { Fragment, useState } from 'react';
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

import IconArrow from '~/icons/arrow.svg';

import { schema } from './schema';

export const ContactUsForm: React.FC = () => {
  const {
    formName,
    inputs,
    textarea,
    checkbox,
    select,
    submitBtn,
    defaultValues,
  } = content.form;

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
    defaultValues: defaultValues,
  });

  useFormPersist(formName, {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    console.log('FORM_DATA', data);
    setIsSuccess(true);
    reset();
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
                  <Fragment key={input.id}>
                    <FormPhoneField
                      control={control}
                      {...input}
                      errors={errors}
                      className="smOnly:mb-4"
                    />
                  </Fragment>
                );
              }
              return (
                <Fragment key={input.id}>
                  <FormField
                    {...input}
                    register={register}
                    errors={errors}
                    className={cn('smOnly:mb-4', {
                      'md:order-last md:col-span-2': input.type === 'email',
                    })}
                  />
                </Fragment>
              );
            })}

            <FormListbox
              control={control}
              label={select.label}
              placeholder={select.placeholder}
              name={select.name}
              variants={select.options}
              errors={errors}
              className="smOnly:mb-6"
            />
          </div>

          <FormTextArea
            label={textarea.label}
            placeholder={textarea.placeholder}
            name={textarea.name}
            register={register}
            errors={errors}
            className="md:mb-6 smOnly:mb-4"
          />

          <FormCheckbox
            label={checkbox.label}
            name={checkbox.name}
            register={register}
            errors={errors}
            className="md:mb-8 smOnly:mb-10"
          />

          <Button
            text={submitBtn.label}
            className="mx-auto w-full max-w-[338px] smOnly:flex"
            btnStyle="submit"
          >
            {isSubmitting ? (
              <Spinner />
            ) : (
              <IconArrow className="size-5 [&>path]:stroke-[3px]" />
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
