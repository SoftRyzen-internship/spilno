'use client';

import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormField } from '@/components/ui/FormField';
import { FormTextArea } from '@/components/ui/FormTextArea';
import { FormCheckbox } from '@/components/ui/FormCheckbox';
import { FormListbox } from '@/components/ui/FormListbox';

import content from '@/data/form.json';

import { schema, TFormData } from './schema';
// url()
// .includes("github.com", { message: "Invalid GitHub URL" }),

export const ContactUsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });

  //   useForm<TFormData>({
  //   defaultValues: { phone: '+489-79-87-9-78', referralSource: undefined },
  // });

  const { inputs, textarea, checkbox, select, submitBtn } = content.form;

  //  useFormPersist(LOCAL_STORAGE_KEY, {
  //     watch,
  //     setValue,
  //     storage: typeof window !== 'undefined' && window.localStorage,
  //   });

  const onSubmit = async (data: TFormData) => {
    console.log('SUCCESS', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto bg-white px-4 py-8 font-geologica">
        {inputs.map(input => (
          <Fragment key={input.id}>
            <FormField
              {...input}
              register={register}
              error={errors[input.name as keyof TFormData]}
            />
          </Fragment>
        ))}
        <FormListbox
          label={select.label}
          placeholder={select.placeholder}
          name={select.name as keyof TFormData}
          variants={select.options}
          error={errors[select.name as keyof TFormData]}
          control={control}
        />
        <FormTextArea
          label={textarea.label}
          placeholder={textarea.placeholder}
          name={textarea.name as keyof TFormData}
          register={register}
          error={errors[textarea.name as keyof TFormData]}
        />
        <FormCheckbox
          label={checkbox.label}
          name={checkbox.name as keyof TFormData}
          register={register}
          error={errors[checkbox.name as keyof TFormData]}
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
