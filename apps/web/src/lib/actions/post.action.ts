"use server";

import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_POSTS } from "@/lib/gqlQueries";
import { transformTakeSkip } from "@/lib/helpers";
import { Post } from "@/types/modal.type";
import { print } from "graphql";

export async function fetchPosts({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) {
  const { skip, take } = transformTakeSkip({ page, pageSize });

  const data = await fetchGraphQL(print(GET_POSTS), { skip, take });

  return {
    posts: data.posts as Post[],
    count: data.postCount as number,
  };
}
