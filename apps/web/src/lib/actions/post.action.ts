"use server";

import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_POSTS } from "@/lib/gqlQueries";
import { Post } from "@/types/modal.type";
import { print } from "graphql";

export async function fetchPosts() {
  const data = await fetchGraphQL(print(GET_POSTS));

  return data.posts as Post[];
}
