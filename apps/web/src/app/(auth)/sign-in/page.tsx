import { SignInForm } from "@/components/auth/sign-in-form";
// import { auth } from "@/lib/auth";
// import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function SignInPage() {
  // const session = await auth();
  // if (session) redirect("/dashboard");

  // Localization
  // const t = await getTranslations("auth.signIn");
  return (
    <main className="auth-container">
      {/* Form Section */}
      <section className="auth-form-section flex h-screen flex-col">
        <div className="auth-form-container text-center">
          <h1 className="text-2xl font-semibold">
            Welcome Back to Turbo Nextnest
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Enter your username and password to continue.
          </p>
          <div className="my-8">
            <SignInForm />
          </div>
          <Link href="/sign-up" className="block text-center hover:underline">
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </section>

      {/* Image Section */}
      <aside className="auth-image-section overflow-hidden">
        <Image
          src="/images/auth-pages.webp"
          alt="Learning LMS Auth Image"
          width={1200}
          height={1200}
          priority
        />
      </aside>
    </main>
  );
}
