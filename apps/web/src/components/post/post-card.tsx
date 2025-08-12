import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/types/modal.type";
import Link from "next/link";

type PostCardProps = Partial<Post>;

export function PostCard({
  id,
  slug,
  title,
  content,
  thumbnail,
  createdAt,
}: PostCardProps) {
  return (
    <Card className="!gap-2 overflow-hidden rounded-xl border border-gray-100 bg-white pt-0 shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Thumbnail */}
      <div className="relative h-48 w-full">
        <img
          src={thumbnail ?? "https://placehold.co/600x400"}
          alt={title ?? ""}
          className="h-full max-h-[200px] w-full object-cover"
        />
      </div>

      {/* Content */}
      <CardHeader className="p-2">
        <CardTitle className="h-16 text-lg font-bold text-gray-800">
          {title ?? "Untitled Post"}
        </CardTitle>
        <div className="w-full">
          <p className="ml-auto w-fit text-xs text-gray-500">
            {createdAt
              ? new Date(createdAt).toLocaleDateString()
              : "Unknown date"}
          </p>
        </div>
      </CardHeader>

      <CardContent className="p-4 pb-0">
        <CardDescription className="line-clamp-3 text-gray-600">
          {content ?? "No content available."}
        </CardDescription>
        <Link
          href={`/posts/${slug}/${id}`}
          className="mt-4 block text-blue-600 hover:underline"
        >
          Read More
        </Link>
      </CardContent>
    </Card>
  );
}
