import { Hero } from "@/components/hero";
import { Posts } from "@/components/post/posts";
import { fetchPosts } from "@/lib/actions/post.action";

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <div>
      <Hero />
      <Posts posts={posts} />
    </div>
  );
}
