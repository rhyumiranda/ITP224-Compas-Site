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

export interface CreateNewPasswordFormProps {
  password: string
  passwordConfirm: string
}

export interface CreateNewPasswordFormErrorProps {
  emailError: string | null
  passwordError: string | null
  passwordConfirmError: string | null
}

export interface VerifyOtpFormProps {
  otp: string
}

export interface TravelLogProps {
    id: number,
    user_id: string,
    city: string,
    country: string,
    date: string,
    activities: string[],
    information: string[],
    created_at: string,
}