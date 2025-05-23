"use client";

import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ForgotPasswordFormProps } from "@/lib/types";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ForgotPasswordFormProps>({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form submitted:", formData);


    setTimeout(async () => {
      await axios.post("http://localhost/api/forgot-password.php", formData)
      await toast.success("Check your email for the reset link", {
        description: "If the email is registered, you will receive a reset link shortly."
      });
      await setLoading(false);
      await router.push("/auth/forgot-password/verify-otp");
    }, 1000)
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <Compass className="size-6" />
              </div>
              <span className="sr-only">Compadsadss.</span>
            </a>
            <h1 className="text-xl font-bold">Forgot Password</h1>
            <p className="text-muted-foreground text-sm">
              Enter your email to reset your password
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                autoComplete="email"
                autoFocus
                required
              />
            </div>
            <Button type="submit" className="w-full cursor-pointer">
              {loading ? 
                <LoaderCircle className="animate-spin"/>
                : 
              'Send Reset Link'
              }
            </Button>
            <div className="text-center text-sm">
              Did you remember your password?{" "}
              <a href="/auth/login" className="underline underline-offset-4">
                Back to login
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
