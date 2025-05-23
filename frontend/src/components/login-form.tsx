"use client";

import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { LoginFormProps } from "@/lib/types";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { EyeOff, Eye } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormProps>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [lockTimeLeft, setLockTimeLeft] = useState(0);

  useEffect(() => {
    if (!formData.email) return;
    
    const checkLockStatus = () => {
      const emailKey = `lockUntil_${formData.email}`;
      const attemptsKey = `attempts_${formData.email}`;
      
      const lockUntil = localStorage.getItem(emailKey);
      const attempts = localStorage.getItem(attemptsKey);
      
      if (lockUntil) {
        const lockTime = parseInt(lockUntil);
        const now = Date.now();
        
        if (now < lockTime) {
          setIsLocked(true);
          setLockTimeLeft(Math.ceil((lockTime - now) / 1000));
        } else {
          // Lock expired
          localStorage.removeItem(emailKey);
          localStorage.removeItem(attemptsKey);
          setIsLocked(false);
          setAttemptsLeft(5);
          setLockTimeLeft(0);
        }
      } else if (attempts) {
        setAttemptsLeft(5 - parseInt(attempts));
      } else {
        setAttemptsLeft(5);
      }
    };
    
    checkLockStatus();
    
    let interval: NodeJS.Timeout | undefined;
    if (isLocked) {
      interval = setInterval(checkLockStatus, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [formData.email, isLocked]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    
    const emailKey = `lockUntil_${formData.email}`;
    const attemptsKey = `attempts_${formData.email}`;
    
    const lockUntil = localStorage.getItem(emailKey);
    if (lockUntil && Date.now() < parseInt(lockUntil)) {
      setIsLoading(false);
      setIsLocked(true);
      const timeLeft = Math.ceil((parseInt(lockUntil) - Date.now()) / 1000);
      setLockTimeLeft(timeLeft);
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      setErrorMsg(`Account locked for ${minutes}:${seconds.toString().padStart(2, '0')}`);
      return;
    }
    
    setTimeout(() => {
      axios.post("http://localhost/api/login.php", formData)
        .then(response => {
          if (response.data && response.data.status == 1) {
            toast("You have logged in succesfully", {
              description: "Welcome back to Compas"
            }) 
            localStorage.removeItem(attemptsKey);
            localStorage.removeItem(emailKey);
            setAttemptsLeft(5);
            setIsLocked(false);
            setIsLoading(false);
            localStorage.setItem("user_id", response.data.user?.id);
            router.push("/dashboard");
          } else {
            // Failed login
            let attempts = parseInt(localStorage.getItem(attemptsKey) || "0") + 1;
            localStorage.setItem(attemptsKey, attempts.toString());
            
            const attemptsRemaining = 5 - attempts;
            setAttemptsLeft(attemptsRemaining);
            
            if (attempts >= 5) {
              // Lock account for 15 minutes
              const lockDuration = 15 * 60 * 1000; // 15 minutes in milliseconds
              const lockUntilTime = Date.now() + lockDuration;
              localStorage.setItem(emailKey, lockUntilTime.toString());
              setIsLocked(true);
              setLockTimeLeft(lockDuration / 1000);
              setErrorMsg(`Account locked for 15 minutes due to too many failed attempts.`);
            } else {
              setErrorMsg(`Incorrect email or password. ${attemptsRemaining} attempts left before account is locked.`);
            }
            setIsLoading(false);
          }
        })
        .catch(error => {
          console.error("Login error:", error);
          setErrorMsg("Network error. Please try again.");
          setIsLoading(false);
        });
    }, 1000);
  };

  // Format time for display
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
              <span className="sr-only">Compas.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Compas</h1>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/auth/signup" className="underline underline-offset-4">
                Register
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrorMsg(""); // Clear error when email changes
                }}
                autoComplete="email"
                autoFocus
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button
                  variant="link"
                  className="px-0 font-normal h-auto"
                  asChild
                >
                  <Link href="/auth/forgot-password">Forgot password?</Link>
                </Button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Eye className="h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Login"
              )}
            </Button>
            {errorMsg && (
              <div className="text-red-500 text-center text-sm">
                {errorMsg}
              </div>
            )}
            {isLocked && (
              <div className="text-red-500 text-center text-sm">
                Account locked. Try again in {formatTime(lockTimeLeft)}.
              </div>
            )}
            {/* {!isLocked && attemptsLeft < 5 && (
              <div className="text-amber-500 text-center text-sm">
                {attemptsLeft} attempts remaining before account is locked.
              </div>
            )} */}
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-1">
            <Button variant="outline" type="button" className="w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="/legal/terms-privacy">Terms of Service</a>{" "}
        and <a href="/legal/terms-privacy">Privacy Policy</a>.
      </div>
    </div>
  );
}