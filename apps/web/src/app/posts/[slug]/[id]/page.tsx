import { SanitizeContent } from "@/components/sanitize-content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { fetchPostById } from "@/lib/actions/post.action";
import Link from "next/link";

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const post = await fetchPostById(+id);
  const readingTime = Math.ceil(post.content.split(" ").length / 200); // 200 words/minute

  return (
    <main className="w-full bg-gradient-to-br from-sky-500 to-indigo-500 pt-30">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-md bg-white px-4 py-8 shadow-md lg:grid-cols-[2fr_1fr]">
        {/* Main column */}
        <div>
          {/* Breadcrumbs */}
          <nav className="text-muted-foreground mb-4 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt;{" "}
            <Link href="#" className="hover:underline">
              Articles
            </Link>{" "}
            &gt; <span className="text-foreground">{post.title}</span>
          </nav>

          {/* Post title */}
          <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
          <div className="text-muted-foreground mb-6 flex items-center gap-3 text-sm">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.author.name}`}
              />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <span>{post.author.name}</span>
            <span>•</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>

          {/* Post thumbnail */}
          {post.thumbnail && (
            <div className="relative mb-6 h-80 w-full">
              <img
                src={post.thumbnail ?? "https://placehold.co/600x400"}
                alt={post.title}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          )}

          {/* Post content */}
          <SanitizeContent>{post.content}</SanitizeContent>

          {/* Tags */}
          <div className="mb-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag.id} variant="secondary">
                #{tag.name}
              </Badge>
            ))}
          </div>

          <Separator className="mb-8" />

          {/* About the author */}
          <div className="mb-12 flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.author.name}`}
              />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{post.author.name}</h3>
              <p className="text-muted-foreground text-sm">
                A software developer and technology enthusiast. Writes articles
                about web development and modern technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Related Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Getting Started with Next.js
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    React Best Practices
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Introduction to TypeScript
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
