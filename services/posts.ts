import { join } from "path";
import fs from "fs";
import matter from "gray-matter";

export type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
  language: string;
  content: string;
  draft: string;
};

type PostItem = Omit<Post, "content" | "slug">;

const POSTS_DIR = join(process.cwd(), "/posts");

const postsSlugs = fs
  .readdirSync(POSTS_DIR)
  .filter((file) => file.endsWith(".mdx"));

const readPostFile = (slug: string) => {
  const postPath = join(POSTS_DIR, `${slug}.mdx`);
  return fs.readFileSync(postPath, "utf8");
};

const getPostsMeta = (slug: string) => {
  const postContent = readPostFile(slug);
  const { data } = matter(postContent);
  return data ? (data as PostItem) : undefined;
};

export const getPost = (slug: string) => {
  const postContent = readPostFile(slug);

  const { data, content } = matter(postContent);
  return { ...data, content } as Post;
};

export const listPostsMeta = () =>
  postsSlugs
    .map((slug) => {
      const post = getPostsMeta(slug.replace(/\.mdx$/, ""));
      if (!post) return;

      return {
        ...post,
        slug: slug.replace(/\.mdx$/, ""),
      };
    })
    .filter((post) => post !== undefined)
    .filter((post) => !post?.draft);
