import { Hero } from "@/components/hero";
import { Posts } from "@/components/post/posts";

export default function Home() {
  return (
    <div>
      <Hero />
      <Posts posts={[]} />
    </div>
  );
}
