"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { NewPasswordForm } from "./new-password-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Mail } from "lucide-react";
import axios from "axios";
import { useState } from "react";

const FormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  })
  .regex(/^\d+$/, {
      message: "PIN must contain only digits from 0-9.",
  }),
});

export default function VerifyOtpForm() {

  const [isVerified, setIsVerified] = useState(false);
  const [pin, setPin] = useState({
    otp: ''
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
    mode: "onChange",
  });

  function handleSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    axios.post("http://localhost/api/verify-otp.php", data)
    .then(function (res) {
      if (res.data && res.data.status == 1) {
        setIsVerified(true);
        setPin(data);
        console.log("success")
      } else{
        console.log("Invalid PIN!")
      }
    })
  }

  return (
    <>
    {!isVerified ? (
      <Form {...form}>
        <div
          className={"flex flex-col gap-6 justify-content-center items-center"}
        >
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-2/3 space-y-6"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <Link
                  href="#"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <div className="flex size-8 items-center justify-center rounded-md">
                    <Mail className="size-6" />
                  </div>
                  <span className="sr-only">Compas.</span>
                </Link>
                <h1 className="text-xl font-bold">We Emailed You a Code!</h1>
                <p className="text-muted-foreground text-sm text-center">
                  Check your inbox and enter the 6-digit code to continue.
                </p>
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-center items-center">
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP
                          maxLength={6}
                          value={field.value}
                          onChange={field.onChange}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription className="text-center">
                        Please enter the one-time password sent to your phone.
                      </FormDescription>
                      <FormMessage className="text-center" />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit">Verify Pin</Button>
            </div>
          </form>
        </div>
      </Form>
    ) : (
      <NewPasswordForm otp={pin.otp}/>
    )}
  </>
  )
  ;
}
