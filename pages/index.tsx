import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import client from "../graphql-client";
import styles from "../styles/Blog.module.css";
import { formatDate } from "../utils";
import { PostsLangFilterContext } from "../hooks/FilterContext";
import Layout from "../components/layout";

type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  language: string;
};
type Props = {
  posts: Post[];
};

const Home = ({ posts }: Props) => {
  const { selectedLangFilter } = useContext(PostsLangFilterContext);
  const [postsFiltered, setPostsFiltered] = useState<Post[]>([]);

  useEffect(() => {
    const filterPosts = posts.filter((post) => {
      if (selectedLangFilter === "all") {
        return post;
      }
      if (post.language === selectedLangFilter) {
        return post;
      }
    });

    setPostsFiltered(filterPosts);
  }, [selectedLangFilter, posts]);

  return (
    <Layout>
      <Head>
        <title>The coolest blog title</title>
        <meta
          name="description"
          content="Where I share my thoughts and write about tech."
        />
      </Head>
      <main className={styles.main}>
        {postsFiltered.map((post: Post) => (
          <section key={post.title} className={styles.post}>
            <Link href={`/post/${post.slug}`}>
              <a className={styles.postTitle}>{post.title}</a>
            </Link>
            <span>{formatDate(post.date, post.language)}</span>
            <p>{post.description}</p>
            <Link href={`/post/${post.slug}#keep-reading`}>
              {post.language === "pt-BR"
                ? "Continuar lendo..."
                : "Keep reading..."}
            </Link>
          </section>
        ))}
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query BlogPosts {
        posts(orderBy: createdAt_DESC) {
          id
          title
          description
          date
          slug
          language
        }
      }
    `,
  });

  return {
    props: data,
  };
};

export default Home;
