import * as z from 'zod';

import content from '@/data/contactUs.json';

const { validation } = content.form;
const {
  userName,
  telegram,
  phoneNumber,
  userEmail,
  referralSource,
  projectDescription,
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
    .regex(RegExp(userName.format.reg), userName.format.message),

  phoneNumber: z
    .string(commonMsg)
    .trim()
    .min(phoneNumber.minLength.value, phoneNumber.minLength.message)
    .max(phoneNumber.maxLength.value, phoneNumber.maxLength.message),

  telegram: z
    .union([
      z
        .string(commonMsg)
        .regex(RegExp(telegram.format.linkReg), telegram.format.message)
        .max(telegram.maxLength.value, telegram.maxLength.message),
      z
        .string(commonMsg)
        .regex(RegExp(telegram.format.shortReg), telegram.format.message)
        .max(telegram.maxLength.value, telegram.maxLength.message),
    ])
    .or(z.literal('')),

  userEmail: z
    .string(commonMsg)
    .min(userEmail.minLength.value, userEmail.minLength.message)
    .email(userEmail.format.message)
    .regex(RegExp(userEmail.format.reg), userEmail.format.message),

  referralSource: z
    .string(commonMsg)
    .refine(value => referralSource.options.includes(value), {
      message: referralSource.message,
    }),

  projectDescription: z
    .string(commonMsg)
    .trim()
    .min(
      projectDescription.minLength.value,
      projectDescription.minLength.message,
    )
    .max(
      projectDescription.maxLength.value,
      projectDescription.maxLength.message,
    )
    .regex(
      RegExp(projectDescription.format.reg),
      projectDescription.format.message,
    ),

  agreement: z.boolean().refine(value => value === true, {
    message: common.required,
  }),
});

export type FormValues = z.infer<typeof schema>;
