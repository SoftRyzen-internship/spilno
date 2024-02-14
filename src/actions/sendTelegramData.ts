import { FieldValues } from 'react-hook-form';

import data from '@/data/common.json';

import { FormFields, TelegramRes } from '@/types';

const ENTRY = '<b>Замовлення проєкту:</b>\n';
const EMPTY_FIELD_MESSAGE = 'не заповнено';

export const sendTelegramData = async (formData: FieldValues) => {
  const { formFieldsTranslation } = data;

  const formFields = Object.keys(formFieldsTranslation) as Array<
    keyof FormFields
  >;

  const telegramMessage = formFields.reduce(
    (acc, fieldName) =>
      (acc += `${formFieldsTranslation[fieldName]}: ${formData[fieldName] ? formData[fieldName] : EMPTY_FIELD_MESSAGE}\n`),
    ENTRY,
  );

  try {
    const res: TelegramRes = await fetch('/api/telegram', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: telegramMessage,
      }),
    }).then(r => r.json());

    if (res.code !== 200) throw new Error();
  } catch (error) {
    throw new Error();
  }
};
