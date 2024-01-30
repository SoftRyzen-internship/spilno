'use client';

import { useForm } from 'react-hook-form';

import { FormField } from '@/components/ui/FormField';
import { FormData } from '@/components/ui/FormField/types';
import { FormTextArea } from '@/components/ui/FormTextArea';
import { FormCheckbox } from '@/components/ui/FormCheckbox';
import { FormDropdown } from '@/components/ui/FormDropDown';
import { FormListbox } from '@/components/ui/FormListbox';

export const ContactUsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    // setError,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('SUCCESS', data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto bg-white px-4 py-8 font-geologica">
        <FormField
          label="Імя"
          type="text"
          placeholder="Іван Іванов"
          name="name"
          register={register}
          error={errors.name}
        />
        <FormField
          label="Телефон"
          type="text"
          placeholder="+380988888545"
          name="phone"
          register={register}
          error={errors.phone}
        />
        <FormField
          label="Телеграм"
          type="text"
          placeholder="https://t.me/ivanivanov"
          name="telegram"
          register={register}
          error={errors.telegram}
        />
        <FormField
          label="Пошта"
          type="text"
          placeholder="Іван Іванов"
          name="telegram"
          register={register}
          error={errors.email}
        />
        <FormListbox
          label="Звідки ви про нас дізнались?"
          placeholder="Оберіть варіант"
          name="referralSource"
          register={register}
          setValue={setValue}
          error={errors.referralSource}
        />
        {/* <FormDropdown
          label="Звідки ви про нас дізнались?"
          placeholder="Оберіть варіант"
          name="referralSource"
          register={register}
          setValue={setValue}
          error={errors.referralSource}
        /> */}
        <FormTextArea
          label="Опишіть проєкт"
          placeholder="Створити сайт для запису на різні б'юті-послуги, такі як манікюр, педикюр, косметологія. На сайті слід розмістити перелік послуг з цінами, форма для онлайн-запису..."
          name="comments"
          register={register}
          error={errors.comments}
        />
        <FormCheckbox
          label="Даю згоду на обробку персональних даних"
          name="agreement"
          register={register}
          error={errors.agreement}
          className="mb-10"
        />
        <button
          type="submit"
          className="w-full rounded-[48px] bg-accent py-4 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
