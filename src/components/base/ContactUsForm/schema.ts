import * as Yup from 'yup';

import content from '@/data/form.json';

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

export const schema = Yup.object().shape({
  userName: Yup.string()
    .trim()
    .required(common.required)
    .matches(RegExp(userName.format.reg), userName.format.message)
    .min(userName.minLength.value, userName.minLength.message)
    .max(userName.maxLength.value, userName.maxLength.message),
  phoneNumber: Yup.string()
    .trim()
    .required(common.required)
    .transform(value => {
      if (value != null) {
        return value.startsWith('+') ? value : `+${value}`;
      }
      return value;
    })
    .matches(RegExp(phoneNumber.format.reg), {
      message: phoneNumber.format.message,
      excludeEmptyString: true,
    })
    .min(phoneNumber.minLength.value, phoneNumber.minLength.message)
    .max(phoneNumber.maxLength.value, phoneNumber.maxLength.message),
  telegram: Yup.string()
    .required(common.required)
    .matches(RegExp(telegram.format.reg), telegram.format.message)
    .max(telegram.maxLength.value, telegram.maxLength.message),
  userEmail: Yup.string()
    .required(common.required)
    .email(userEmail.format.message),
  // .matches(RegExp(userEmail.format.reg), userEmail.format.message),
  referralSource: Yup.string().oneOf(referralSource.options).required(),
  projectDecription: Yup.string()
    .required(common.required)
    .matches(RegExp(projectDecription.format.reg), {
      message: projectDecription.format.message,
      excludeEmptyString: true,
    })
    .max(
      projectDecription.maxLength.value,
      projectDecription.maxLength.message,
    ),
  agreement: Yup.boolean().required(common.required),
});

export type TFormData = Yup.InferType<typeof schema>;
