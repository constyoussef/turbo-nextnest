// import { LocalizedMessage } from "./localization";

export type SignInFormSchemaType = {
  name: string;
  password: string;
};

export type SignUpFormSchemaType = {
  name: string;
  email: string;
  password: string;
};

export type VerifyEmailFormSchemaType = {
  verificationCode: string;
};

export type ForgotPasswordFormSchemaType = {
  email: string;
};

export type ResetPasswordFormSchemaType = {
  password: string;
  confirmPassword: string;
};
