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
    .string()
    .trim()
    .min(userName.minLength.value, userName.minLength.message)
    .max(userName.maxLength.value, userName.maxLength.message)
    .refine(value => value.trim() !== '', { message: common.required })
    .refine(value => RegExp(userName.format.reg).test(value), {
      message: userName.format.message,
    }),
  phoneNumber: z
    .string()
    .trim()
    .min(phoneNumber.minLength.value, phoneNumber.minLength.message)
    .max(phoneNumber.maxLength.value, phoneNumber.maxLength.message)
    .refine(value => value.trim() !== '', { message: common.required })
    .refine(value => RegExp(phoneNumber.format.reg).test(value), {
      message: phoneNumber.format.message,
    })
    .transform(value => {
      if (value != null) {
        return value.startsWith('+') ? value : `+${value}`;
      }
      return value;
    }),
  telegram: z
    .string()
    .max(telegram.maxLength.value, telegram.maxLength.message)
    .refine(value => value.trim() !== '', { message: common.required })
    .refine(value => RegExp(telegram.format.reg).test(value), {
      message: telegram.format.message,
    }),
  userEmail: z.string().email(userEmail.format.message),
  // .matches(RegExp(userEmail.format.reg), userEmail.format.message),
  referralSource: z
    .string()
    .refine(value => value.trim() !== '', { message: common.required })
    .refine(value => referralSource.options.includes(value), {
      message: referralSource.message,
    }),
  projectDecription: z
    .string()
    .max(projectDecription.maxLength.value, projectDecription.maxLength.message)
    .refine(value => value.trim() !== '', { message: common.required })
    .refine(value => RegExp(projectDecription.format.reg).test(value), {
      message: projectDecription.format.message,
    }),
  agreement: z.boolean().refine(value => value === true, {
    message: common.required,
  }),
});

export type FormValues = z.infer<typeof schema>;
// import { TFormData } from './types';
// url()
// .includes("github.com", { message: "Invalid GitHub URL" }),
