import { Post } from "@/types/modal.type";

interface PostsProps {
  posts: Post[];
}

export function Posts({ posts }: PostsProps) {
  return (
    <section>
      <h2 className="text-center text-5xl leading-tight font-bold text-gray-600">
        Latest Posts
      </h2>
      <div className="mx-auto mt-5 mb-9 h-1 w-96 rounded-t-md bg-gradient-to-r from-sky-500 to-indigo-500" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
