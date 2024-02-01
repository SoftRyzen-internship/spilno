'use client';

import { Fragment, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormField } from '@/components/ui/FormField';
import { FormTextArea } from '@/components/ui/FormTextArea';
import { FormCheckbox } from '@/components/ui/FormCheckbox';
import { FormListbox } from '@/components/ui/FormListbox';
import { FormPopup } from '@/components/ui/FormPopup';

import { cn } from '@/utils/cn';

import content from '@/data/contactUs.json';

import { schema } from './schema';

export const ContactUsForm: React.FC = () => {
  const { formName, inputs, textarea, checkbox, select, submitBtn } =
    content.form;

  const [isOpenPopup, setIsOpenPopup] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const closePopup = () => setIsOpenPopup(false);
  const openPopup = () => setIsOpenPopup(true);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
    control,
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  useFormPersist(formName, {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      //submit to telegram bot
      console.log('FORM_DATA', data);
      //
      setIsSuccess(true);
    } catch {
      setIsSuccess(false);
    } finally {
      reset();
      openPopup();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="-mx-4 bg-white font-geologica sm:mx-auto sm:rounded-[10px] md:w-[624px] md:p-12 smOnly:px-4 smOnly:py-8">
          <div className="md:mb-4 md:grid md:grid-cols-2 md:gap-4">
            {inputs.map(input => (
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
            ))}

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

          <button
            type="submit"
            className="w-full rounded-[48px] bg-accent py-4 text-white md:h-[67px]"
          >
            {submitBtn.label}
          </button>
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
