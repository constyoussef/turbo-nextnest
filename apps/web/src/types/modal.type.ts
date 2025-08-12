export interface Post {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  content: string;
  published: boolean;
  author: User;
  tags: Tag[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  bio: string;
  avatar: string;
  // posts: Post[];
  // comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Tag {
  id: number;
  name: string;
  // posts: Post[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: number;
  content: string;
  author: User;
  post: Post;
  createdAt: Date;
  updatedAt: Date;
}
