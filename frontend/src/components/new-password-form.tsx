"use client";

import { Compass } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { passwordResetSchema } from "@/schemas/passwordResetSchemas";
import { useState } from "react";
import { EyeOff, Eye, LoaderCircle } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { VerifyOtpFormProps } from "@/lib/types";
import { toast } from "sonner";

export function NewPasswordForm({ otp }: VerifyOtpFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    otp: otp,
    password: "",
    passwordConfirm: "",
  });

  const [formDataError, setFormDataError] = useState({
    passwordError: "",
    passwordConfirmError: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordConfirm: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("First Breakpoint");

    const result = passwordResetSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors = result.error.format();

      setFormDataError((prev) => ({
        ...prev,
        passwordError: formattedErrors.password?._errors?.join(" ") || "",
        passwordConfirmError:
          formattedErrors.passwordConfirm?._errors?.join(" ") || "",
      }));

      setIsLoading(false);
      return;
    }

    console.log("Second Breakpoint");

    const requestData = {
      otp: formData.otp,
      password: formData.password,
    };

    console.log("Sending data:", requestData);

    axios.post("http://localhost/api/reset-password.php", requestData)
    .then(function(res) {
      toast.success("Password reset successfully", {
        description: "You can now log in with your new password.",
      });
      console.log("Response:", res.data);
      setIsLoading(false);
      router.push('/auth/login')
    })
    .catch(function(error) {
      console.log("Error:", error);
      setIsLoading(false);
    });
  };

  return (
    <div className={cn("flex flex-col gap-6")}>
      <form onSubmit={handleCreateNewPassword}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <Compass className="size-6" />
              </div>
              <span className="sr-only">Compas.</span>
            </a>
            <h1 className="text-xl font-bold">Create a New Password</h1>
            <div className="text-center text-sm text-gray-600">
              Choose a strong password you haven&apos;t used before to keep your
              account secure.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="password">New Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword.password ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      password: !prev.password,
                    }))
                  }
                  className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
                >
                  {showPassword.password ? (
                    <EyeOff className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Eye className="h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
              </div>

              {formDataError.passwordError != "" &&
                formData.password != formData.passwordConfirm && (
                  <div className="text-red-500 text-sm">
                    {formDataError.passwordError}
                  </div>
                )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showPassword.passwordConfirm ? "text" : "password"}
                  value={formData.passwordConfirm}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      passwordConfirm: e.target.value,
                    })
                  }
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      passwordConfirm: !prev.passwordConfirm,
                    }))
                  }
                  className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
                >
                  {showPassword.passwordConfirm ? (
                    <EyeOff className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Eye className="h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
              </div>
              {formDataError.passwordConfirmError != "" && (
                <div className="text-red-500 text-sm">
                  {formDataError.passwordConfirmError}
                </div>
              )}
            </div>
            <Button type="submit" className="w-full cursor-pointer">
              {isLoading ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                "Create Account"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
