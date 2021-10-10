import { NextPage, GetServerSideProps } from "next"
import { useRouter } from "next/router"
import Image from 'next/image'
import Head from "next/head"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlight } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Header from "../../components/header"
import PostStyles from './Post.module.css'
import MarkdownStyles from '../../styles/Markdown.module.css'

import CoverImage from '../../public/assets/peak.jpg'

import { gql } from '@apollo/client'
import client from '../api/client'

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
  const router = useRouter()
  
  console.log(post)
  // TODO get post data by it's id
  const postData = {
    title: 'Post title being processed lets imagine that here is a very big title tho',
    date: '17 September 2021',
    image: CoverImage 
  }

  const markdown = `Ai vai um teste de maluco 
  ~~~bash
npm run dev
~~~
` 

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

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { data } = await client.query({
    query: gql`
      query BlogPost {
        post(where: {slug: "${context.query.slug}"}) {
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

  if (data) {
    return {
      props: data
    } 
  }

  return {
    redirect: {
      destination: '/',
      permanent: true 
    }
  }
}

export default Post
