"use client";
import { LoadingButton } from "@/components/shared/loading-button";
import { PasswordInput } from "@/components/shared/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFormSchema } from "@/lib/schema/auth";
import { SignInFormSchemaType } from "@/types/validation";
// import { useCreateAuthSchema } from "@/hooks/use-createAuthSchema";
// import { authService } from "@/lib/auth/authService";
// import { LocalizedMessage } from "@/types/localization";
// import { SignInFormSchemaType } from "@/types/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LogIn } from "lucide-react";
// import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);

  const form = useForm<SignInFormSchemaType>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  return (
    <FormProvider {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3"
        aria-live="polite"
      >
        <div className="flex flex-col gap-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    type="text"
                    {...field}
                    className="h-12"
                    aria-label="Name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter your password"
                    {...field}
                    className="h-12"
                    aria-label="Password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Forgot Password & Remember me */}
          <div className="flex items-center justify-between">
            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="cursor-pointer" />
              <label
                htmlFor="terms"
                className="cursor-pointer text-xs leading-none font-medium opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            {/* Forgot Password */}
            <div>
              <Link href="/forgot-password" className="text-xs hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <LoadingButton
            loading={isLoading}
            type="submit"
            className="w-full select-none"
          >
            Sign In
            <LogIn className="ml-2 h-5 w-5" />
          </LoadingButton>

          {/* Or sign in with  */}
          <div className="flex items-center justify-between">
            <Separator className="my-4 !w-[35%]" />
            <span className="w-28 text-center text-xs text-gray-500">
              Or sign in with
            </span>
            <Separator className="my-4 !w-[35%]" />
          </div>

          {/* Sign In using Google or Facebook */}
          <div className="flex items-center justify-between gap-4">
            <button
              // onClick={handleGoogleSignIn}
              disabled={isGoogleLoading}
              className="border-gary-200 hover:bg-foreground hover:text-accent flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border px-4 py-2 transition-colors duration-200"
            >
              {isGoogleLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <FaGoogle className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">Google</span>
            </button>
            <button
              // onClick={handleFacebookSignIn}
              disabled={isFacebookLoading}
              className="border-gary-200 hover:bg-foreground hover:text-accent flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border px-4 py-2 transition-colors duration-200"
            >
              {isFacebookLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <FaFacebook className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
