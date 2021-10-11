import { NextPage, GetStaticProps, GetStaticPaths } from "next"
import Image from 'next/image'
import Head from "next/head"
import Link from "next/link"
import { ParsedUrlQuery } from 'querystring'

import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlight } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Header from "../../components/header"
import PostStyles from './Post.module.css'
import MarkdownStyles from '../../styles/Markdown.module.css'

import { gql } from '@apollo/client'
import client from '../../graphql-client'

import { formatDate } from '../../utils'

type Post = {
  title: string,
  date: string,
  coverImage: {
    url: string,
    width: number,
    height: number 
  },
  content: {
    markdown: string 
  }
}
type Props = {
  post: Post
}

const Post: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        {/* TODO Improve post SEO */}
      </Head>
      <main className='container'>
        <Header />
        <section className={PostStyles.postHeader}>
          <div className={PostStyles.postCover}>
            <Image 
              src={post.coverImage.url} 
              width={post.coverImage.width} 
              height={post.coverImage.height}
              layout='responsive' 
              alt='peak of ice mountain' 
            />   
          </div>
          <h2>{post.title}</h2>
          <span>{formatDate(post.date)}</span>
        </section>
        <article>
          <ReactMarkdown
            className={MarkdownStyles.markdown}
            remarkPlugins={[remarkGfm]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlight
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    className={MarkdownStyles.syntax}
                  >
                    {children}
                  </SyntaxHighlight>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }} 
          >
            {post.content.markdown}
          </ReactMarkdown>
        </article>
        <div>
          <Link href='/'>Back to home</Link>
        </div>
      </main>
      <footer className={PostStyles.footer}>
        <span>Wrote by @joaovitorzv thank you for reading!</span>
      </footer>
    </>
  )
}

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
    `
  });

  const { posts } = await result.data 
  
  const paths = posts.map((post: { slug: string }) => ({
    params: { slug: post.slug },
  }))
  
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const result = await client.query({
    query: gql`
      query Post {
        post(where: {slug: "${slug}"}) {
          title,
          date,
          coverImage {
            url,
            width,
            height
          },
          content {
            markdown
          }
        }
      }
    `
  })

  const data = await result.data

  if (!data.post) {
    return {
      redirect: {
        destination: '/',
        permanent: false 
      }
    }
  }

  return {
    props: data
  }
}

export default Post
