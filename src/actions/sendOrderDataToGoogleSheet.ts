import { FieldValues } from 'react-hook-form';

export const sendOrderDataToGoogleSheet = async (data: FieldValues) => {
  try {
    const res = await fetch('/api/google-sheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.status !== 200) throw new Error();
  } catch (e) {
    throw new Error();
  }
};
