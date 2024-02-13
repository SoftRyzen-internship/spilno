import data from '@/data/common.json';

import { TelegramData, TelegramRes } from '@/types';

const ENTRY = '<b>Замовлення проєкту:</b>\n';

export const sendTelegramData = async (formData: TelegramData) => {
  const { telegramFieldNames } = data;

  const customerData = Object.values(formData);
  const telegramMessage = telegramFieldNames.reduce(
    (acc, field, idx) => (acc += `${field}: ${customerData[idx]}\n`),
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
