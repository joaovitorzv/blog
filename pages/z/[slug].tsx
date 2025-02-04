import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import Header from "../../components/header";
import { GetStaticPaths } from "next";
import { getPost, listPostsMeta, Post } from "../../services/posts";
import { useMDXComponents } from "../../mdx-components";
import Head from "next/head";

import { ovo } from "../../fonts";

type Props = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  meta: Omit<Post, "content">;
};

export default function ZPost({ source, meta }: Props) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} key="desc" />
      </Head>

      <Header />
      <div
        className={`wrapper ${ovo.variable}`}
        style={{
          maxWidth: "var(--reading-width)",
          margin: "0 auto",
          fontFamily: "var(--font-ovo)",
          fontSize: "20px",
          lineHeight: "1.2",
        }}
      >
        <MDXRemote {...source} components={useMDXComponents} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = listPostsMeta();
  const paths = posts.map((post) => ({
    params: { slug: post?.slug },
  }));

  return { paths, fallback: false };
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { content, ...meta } = getPost(params!.slug as string);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
  });
  return { props: { source: mdxSource, meta } };
}
