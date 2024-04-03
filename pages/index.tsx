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
    <PostsLangFilterContext.Consumer>
      {({ selectedLangFilter, changeLangFilter }) => (
        <Layout>
          <Head>
            <title>The coolest blog title</title>
            <meta
              name="description"
              content="Where I share my thoughts and write about tech."
            />
          </Head>
          <div className={styles.langFilterContainer}>
            <select
              name="langs"
              defaultValue={selectedLangFilter}
              onChange={(e) => {
                changeLangFilter(e.target.value);
                document.documentElement.lang =
                  e.target.value === "all" ? "en" : e.target.value;
              }}
            >
              <option value="all">All languages</option>
              <option value="en-US">English</option>
              <option value="pt-BR">Português</option>
            </select>
          </div>
          <main className={styles.main}>
            {postsFiltered.map((post: Post) => (
              <section key={post.title} className={styles.post}>
                <Link href={`/post/${post.slug}`} className={styles.postTitle}>
                  {post.title}
                </Link>
                <span>{formatDate(post.date, post.language)}</span>
                <p>{post.description}</p>
                <Link href={`/post/${post.slug}#keep-reading`} legacyBehavior>
                  {post.language === "pt-BR"
                    ? "Continuar lendo..."
                    : "Keep reading..."}
                </Link>
              </section>
            ))}
          </main>
        </Layout>
      )}
    </PostsLangFilterContext.Consumer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const { data } = await client.query({
  //   query: gql`
  //     query BlogPosts {
  //       posts(orderBy: createdAt_DESC) {
  //         id
  //         title
  //         description
  //         date
  //         slug
  //         language
  //       }
  //     }
  //   `,
  // });

  return {
    props: { posts: [] },
  };
};

export default Home;
