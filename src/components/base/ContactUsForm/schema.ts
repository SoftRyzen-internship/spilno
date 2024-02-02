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

const commonMsg = {
  required_error: common.required,
  invalid_type_error: common.required,
};

export const schema = z.object({
  userName: z
    .string(commonMsg)
    .trim()
    .min(userName.minLength.value, userName.minLength.message)
    .max(userName.maxLength.value, userName.maxLength.message)
    .refine(value => RegExp(userName.format.reg).test(value), {
      message: userName.format.message,
    }),

  phoneNumber: z
    .string(commonMsg)
    .trim()
    .min(phoneNumber.minLength.value, phoneNumber.minLength.message)
    .max(phoneNumber.maxLength.value, phoneNumber.maxLength.message),

  telegram: z
    .string(commonMsg)
    .max(telegram.maxLength.value, telegram.maxLength.message)
    .refine(value => value.trim() !== '', { message: common.required })
    .refine(value => RegExp(telegram.format.reg).test(value), {
      message: telegram.format.message,
    }),

  userEmail: z
    .string(commonMsg)
    .email(userEmail.format.message)
    .refine(value => RegExp(userEmail.format.reg).test(value), {
      message: userEmail.format.message,
    }),

  referralSource: z
    .string(commonMsg)
    .refine(value => referralSource.options.includes(value), {
      message: referralSource.message,
    }),

  projectDecription: z
    .string(commonMsg)
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
