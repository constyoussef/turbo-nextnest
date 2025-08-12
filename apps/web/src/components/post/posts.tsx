import { Post } from "@/types/modal.type";
import { PostCard } from "./post-card";

interface PostsProps {
  posts: Post[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <section className="container m-8 mx-auto max-w-6xl">
      <h2 className="text-center text-5xl leading-tight font-bold text-gray-600">
        Latest Posts
      </h2>
      <div className="mx-auto mt-5 mb-9 h-1 w-96 rounded-t-md bg-gradient-to-r from-sky-500 to-indigo-500" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
