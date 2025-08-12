"use server";

import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { CREATE_USER_MUTATION } from "@/lib/gqlQueries";
import { SignUpFormSchema } from "@/lib/schema/auth";
import { SignUpFormSchemaType } from "@/types/validation";
import { print } from "graphql";
import { redirect } from "next/navigation";

export async function signUp(state: SignUpFormSchemaType) {
  console.log({ state });
  const validatedDate = SignUpFormSchema.safeParse(state);

  console.log({
    validatedDate,
  });

  if (!validatedDate.success) {
    return {
      errors: validatedDate.error.flatten().fieldErrors,
    };
  }

  console.log({
    data: validatedDate.data,
  });

  const data = await fetchGraphQL(print(CREATE_USER_MUTATION), {
    createUserInput: {
      ...validatedDate.data,
    },
  });

  if (data.errors) return { errors: data.errors };
  redirect("/sign-in");
}
