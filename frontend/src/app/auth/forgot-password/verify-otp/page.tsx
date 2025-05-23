import React from 'react'
import VerifyOtpForm from '@/components/verify-otp-form'

export default function VerifyOtp() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <VerifyOtpForm/>
      </div>
    </div>
  )
}
