import { NextPage } from "next"
import { useRouter } from "next/router"
import Image from 'next/image'
import Head from "next/head"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlight } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Header from "../../components/header"
import PostStyles from './Post.module.css'
import MarkdownStyles from '../../styles/Markdown.module.css'

import CoverImage from '../../public/assets/peak.jpg'

const Post: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  
  // TODO get post data by it's id
  const postData = {
    title: 'Post title being processed lets imagine that here is a very big title tho',
    date: '17 September 2021',
    image: CoverImage 
  }

  const markdown = `Ai vai um teste de maluco 
  ~~~js
console.log('It works!')
~~~
` 

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        {/* TODO Improve post SEO */}
      </Head>
      <main className='container'>
        <Header />
        <section className={PostStyles.postHeader}>
          <div className={PostStyles.postCover}>
            <Image src={postData.image} layout='responsive' alt='peak of ice mountain' />   
          </div>
          <h2>{postData.title}</h2>
          <span>{postData.date}</span>
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
            {markdown}
          </ReactMarkdown>
        </article>
      </main>
      <footer className={PostStyles.footer}>
        <span>Wrote by @joaovitorzv thank you for reading!</span>
      </footer>
    </>
  )
}

export default Post
