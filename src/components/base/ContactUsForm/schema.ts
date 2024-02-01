import * as z from 'zod';

import content from '@/data/contactUs.json';

const { validation } = content.form;
const {
  userName,
  telegram,
  phoneNumber,
  userEmail,
  referralSource,
  projectDecription,
  common,
} = validation;

export const schema = z.object({
  userName: z
    .string({ required_error: common.required })
    .trim()
    .min(userName.minLength.value, userName.minLength.message)
    .max(userName.maxLength.value, userName.maxLength.message)
    .refine(value => RegExp(userName.format.reg).test(value), {
      message: userName.format.message,
    }),
  phoneNumber: z
    .string({ required_error: phoneNumber.message })
    .min(phoneNumber.minLength.value, phoneNumber.minLength.message)
    .max(phoneNumber.maxLength.value, phoneNumber.maxLength.message),
  telegram: z
    .string({ required_error: common.required })
    .max(telegram.maxLength.value, telegram.maxLength.message)
    .refine(value => value.trim() !== '', { message: common.required })
    .refine(value => RegExp(telegram.format.reg).test(value), {
      message: telegram.format.message,
    }),
  userEmail: z
    .string({ required_error: common.required })
    .email(userEmail.format.message),
  referralSource: z
    .string({ required_error: common.required })
    .refine(value => referralSource.options.includes(value), {
      message: referralSource.message,
    }),
  projectDecription: z
    .string({ required_error: common.required })
    .trim()
    .max(projectDecription.maxLength.value, projectDecription.maxLength.message)
    .refine(value => RegExp(projectDecription.format.reg).test(value), {
      message: projectDecription.format.message,
    }),
  agreement: z.boolean().refine(value => value === true, {
    message: common.required,
  }),
});

export type FormValues = z.infer<typeof schema>;
