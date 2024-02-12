import { TelegramData, TelegramRes } from '@/types';

const ENTRY = '<b>Замовлення проєкту:</b>\n';

export const sendTelegramData = async (data: TelegramData) => {
  try {
    const formFields = Object.keys(data);
    const telegramMessage = formFields.reduce(
      (acc, field) => (acc += `${field}: ${data[field]}\n`),
      ENTRY,
    );

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
