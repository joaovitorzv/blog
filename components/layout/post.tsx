import { PropsWithChildren } from "react";

export interface PostModel {
  title: string;
  description: string;
  author: string;
  postedAt: Date;
}

export interface Post extends PostModel {
  slug: string;
}

export type PostViewProps = PropsWithChildren<{
  post: PostModel;
}>;

export default function Post(props: PostViewProps) {
  return (
    <article>
      <header>
        <h1>{props.post.title}</h1>
        <time dateTime={props.post.postedAt.toISOString()}>
          <span>
            {props.post.postedAt.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </span>
        </time>
      </header>
      <div>{props.children}</div>
    </article>
  );
}

// import Header from "../components/header";

// <Header />

// # First

// - is this some kind of ... easter egg?

// ```tsx
// backtick.fences("for blocks");
// ```

// ![Alt text](https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg)
