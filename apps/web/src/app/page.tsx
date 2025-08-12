import { Hero } from "@/components/hero";
import { Posts } from "@/components/post/posts";
import { fetchPosts } from "@/lib/actions/post.action";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { page } = await searchParams;

  const { posts, count } = await fetchPosts({
    page: page ? +page : undefined,
    pageSize: 10,
  });

  return (
    <div>
      <Hero />
      <Posts
        posts={posts}
        count={Math.ceil(count / DEFAULT_PAGE_SIZE)}
        page={page ? +page : 1}
      />
    </div>
  );
}
