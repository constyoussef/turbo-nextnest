import { SignUpForm } from "@/components/auth/sign-up-form";

import Image from "next/image";
import Link from "next/link";

export default async function SignUpPage() {
  return (
    <main className="auth-container">
      {/* Form Section */}
      <section className="auth-form-section">
        <div className="auth-form-container text-center">
          <h1 className="text-2xl font-semibold">Create Your Account</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Sign up to access all features of Turbo Nextnest.
          </p>
          <div className="my-8">
            <SignUpForm />
          </div>
          <Link href="/sign-in" className="block text-center hover:underline">
            Already have an account? Sign in
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
