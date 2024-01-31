'use client';

import { Fragment } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormField } from '@/components/ui/FormField';
import { FormTextArea } from '@/components/ui/FormTextArea';
import { FormCheckbox } from '@/components/ui/FormCheckbox';
import { FormListbox } from '@/components/ui/FormListbox';

import content from '@/data/contactUs.json';

import { schema } from './schema';

export const ContactUsForm: React.FC = () => {
  const { formName, inputs, textarea, checkbox, select, submitBtn } =
    content.form;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
  });

  useFormPersist(formName, {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    console.log('SUCCESS', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="-mx-4 bg-white px-4 py-8 font-geologica sm:mx-0">
        {inputs.map(input => (
          <Fragment key={input.id}>
            <FormField {...input} register={register} errors={errors} />
          </Fragment>
        ))}
        <FormListbox
          control={control}
          label={select.label}
          placeholder={select.placeholder}
          name={select.name}
          variants={select.options}
          errors={errors}
        />
        <FormTextArea
          label={textarea.label}
          placeholder={textarea.placeholder}
          name={textarea.name}
          register={register}
          errors={errors}
        />
        <FormCheckbox
          label={checkbox.label}
          name={checkbox.name}
          register={register}
          errors={errors}
          className="mb-10"
        />
        <button
          type="submit"
          className="w-full rounded-[48px] bg-accent py-4 text-white"
        >
          {submitBtn.label}
        </button>
      </div>
    </form>
  );
};
