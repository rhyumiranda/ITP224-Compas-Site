export interface LoginFormProps {
  email: string
  password: string
}

export interface SignUpFormProps {
  email: string
  password: string
  passwordConfirm: string
}

export interface SignUpFormErrorProps {
  emailError: string | null
  passwordError: string | null
  passwordConfirmError: string | null
}

export interface ForgotPasswordFormProps {
  email: string
}