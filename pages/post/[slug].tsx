import { gql } from "@apollo/client";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect } from "react";
import Layout from "../../components/layout";
import client from "../../graphql-client";
import { formatDate } from "../../utils";
import MyLoader from "../../utils/image-loader";
import PostStyles from "./Post.module.css";

type Post = {
  title: string;
  slug: string;
  description: string;
  language: string;
  date: string;
  coverImage: {
    url: string;
    width: number;
    height: number;
    handle: string;
  };
  coverImageAlt: string;
  content: {
    raw: [];
  };
  tags: string[];
};

type Props = {
  post: Post;
};

type CodeBlock = {
  props: {
    content: [{ text: string }];
  };
};

const Post: NextPage<Props> = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="author" content="https://github.com/joaovitorzv" />
      </Head>
      <NextSeo
        openGraph={{
          title: post.title,
          description: post.description,
          url: `https://joaovitorzv.github.io/post/${post.slug}`,
          type: "article",
          article: {
            publishedTime: `${post.date}T03:00:00Z`,
            modifiedTime: `${post.date}T03:00:00Z`,
            expirationTime: "2030-12-21T03:00:00Z",
            section: "Technology",
            authors: ["https://github.com/joaovitorzv"],
            tags: post.tags,
          },
          images: [
            {
              url:
                "https://media.graphcms.com/resize=width:1920/" +
                post.coverImage.handle,
              width: 1920,
              height: 1080,
              alt: post.coverImageAlt,
            },
          ],
        }}
      />
      <section className={PostStyles.postHeader}>
        <div className={PostStyles.postCover}>
          <Image
            loader={MyLoader}
            src={post.coverImage.url}
            width={post.coverImage.width}
            height={post.coverImage.height}
            layout="responsive"
            alt="peak of ice mountain"
          />
        </div>
        <h2>{post.title}</h2>
        <span>{formatDate(post.date, post.language)}</span>
      </section>
      <article id="keep-reading" className={PostStyles.content}>
        <RichText
          content={post.content.raw}
          renderers={{
            bold: ({ children }) => <b className="bold">{children}</b>,
            li: ({ children }) => <li className="li">{children}</li>,
            img: ({ src, width, height, altText }) => {
              return (
                <div className="img">
                  <Image
                    src={src as string}
                    alt={altText}
                    loader={MyLoader}
                    height={height}
                    width={width}
                    layout="intrinsic"
                  />
                </div>
              );
            },
            code: ({ children }) => (
              <code className="inlineHighlight">{children}</code>
            ),
            code_block: ({ children }) => {
              const codeblock = children as CodeBlock;

              const extractedLang = /(?<=\$)(.*?)(?=\$)/.exec(
                codeblock.props.content[0].text || ""
              );
              const lang = extractedLang
                ? "language-" + extractedLang[0]
                : "none";

              const codeblockWithoutLangIdentifier =
                codeblock.props.content[0].text.replace(/\$.*?\$\n/, "");

              return (
                <pre className="blockHighlight" style={{ fontSize: "14px" }}>
                  <code className={lang}>{codeblockWithoutLangIdentifier}</code>
                </pre>
              );
            },
            blockquote: ({ children }) => (
              <blockquote className="quote">{children}</blockquote>
            ),
          }}
        />
      </article>
      <div className={PostStyles.postFooter}>
        <Link href="/">{post.language === "pt-BR" ? "Voltar" : "Back"}</Link>
      </div>
    </Layout>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await client.query({
    query: gql`
      query BlogPosts {
        posts {
          slug
        }
      }
    `,
  });

  const { posts } = await result.data;

  const paths = posts.map((post: { slug: string }) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const { data } = await client.query({
    query: gql`
      query Post {
        post(where: {slug: "${slug}"}) {
          title,
					slug,
          language,
					description,
          date,
          coverImage {
            url,
            width,
            height,
						handle
          },
					coverImageAlt,
          content {
						raw	
          },
					tags
        }
      }
    `,
  });

  return {
    props: data,
  };
};

export default Post;
