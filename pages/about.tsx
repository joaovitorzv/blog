import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import Layout from "../components/layout";
import { ovo } from "../fonts";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>joaovitorzv · blog</title>
        <meta
          name="description"
          content="Where I share my thoughts and write about tech."
        />
      </Head>
      <main className={`${styles.main} ${ovo.variable}`}>
        <p>Hey, if you want to know a bit more about me there you go:</p>
        <p>
          I was born in 2003 and raised in Franca, São Paulo 🇧🇷. I have always
          been interest and loved to mess around with technology.
        </p>
        <p>
          I really got into tech in mid 2018 and after some time teaching myself
          programming I started working as a Full-Stack developer in Early 2022
          at a Startup that provides agriculture drone services. Since then
          i&apos;ve been working daily with TypeScript, GraphQL, Remix.run,
          React Native, and AWS services (DynamoDB, Lambda, S3, Cognito and a
          bunch of other cool stuff).
        </p>
        <p>
          I enjoy solving problems that is &quot;unknown&quot; stuff like doing
          reverse engineering, learning something from scratch. Always aiming on
          gathering new concepts that I can use when solving different kind of
          problems and I usually <Link href="/">write about it here</Link>.
        </p>
        <p>That&apos;s all.</p>
      </main>
    </Layout>
  );
};

export default About;
