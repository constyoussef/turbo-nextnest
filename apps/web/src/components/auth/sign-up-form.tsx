"use client";
import { LoadingButton } from "@/components/shared/loading-button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, LogIn } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";

import { PasswordInput } from "@/components/shared/password-input";
import { Separator } from "@/components/ui/separator";

import { signUp } from "@/lib/actions/auth.action";
import { SignUpFormSchema } from "@/lib/schema/auth";
import { SignUpFormSchemaType } from "@/types/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);

  const router = useRouter();

  const form = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpFormSchemaType) => {
    setIsLoading(true);

    await signUp(data);

    setIsLoading(false);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3"
        aria-live="polite"
      >
        <div className="flex flex-col gap-y-2">
          {/* Username Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
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

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="text"
                    {...field}
                    className="h-12"
                    aria-label="Email"
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
          {/* Submit Button */}
          <LoadingButton
            loading={isLoading}
            type="submit"
            className="mt-4 w-full cursor-pointer"
          >
            Sign Up
            <LogIn className="ml-2 h-5 w-5" />
          </LoadingButton>

          {/* Or sign up with  */}
          <div className="flex items-center justify-between">
            <Separator className="my-4 !w-[30%]" />
            <span className="w-28 text-center text-xs text-gray-500">
              Or sign up with
            </span>
            <Separator className="my-4 !w-[30%]" />
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
