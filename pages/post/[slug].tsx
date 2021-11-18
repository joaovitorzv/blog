import { NextPage, GetStaticProps, GetStaticPaths } from "next"
import Image from 'next/image'
import Head from "next/head"
import Link from "next/link"
import { ParsedUrlQuery } from 'querystring'

import Header from "../../components/header"
import PostStyles from './Post.module.css'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-jsx'

import { RichText } from '@graphcms/rich-text-react-renderer'

import { gql } from '@apollo/client'
import client from '../../graphql-client'

import { formatDate } from '../../utils'
import MyLoader from '../../utils/image-loader'

import { ReactNode, useEffect } from "react"
import { NextSeo } from "next-seo"

type Post = {
  title: string;
	slug: string;
	description: string;
  date: string;
  coverImage: {
    url: string;
    width: number;
    height: number; 
  },
	coverImageAlt: string;
  content: {
    raw: [];
  },
	tags: string[];
}

type Props = {
  post: Post
}

type CodeBlock = {
	props: {
		content: [
			{ text: string }
		]
	}
}

const Post: NextPage<Props> = ({ post }) => {

	useEffect(() => {
		Prism.highlightAll()
	}, [])

	return (
    <>	
      <Head>
        <title>{post.title}</title>
      </Head>
			<NextSeo 
				openGraph={{
					title: post.title,
					description: post.description,
					url: `https://joaovitorzv.github.io/post/${post.slug}`,
					type: 'article',
					article: {
						publishedTime: `${post.date}T03:00:00.000Z`,
						modifiedTime: `${post.date}T3:00:00.000Z`,
						expirationTime: '2030-12-21T22:04:11Z',
						section: 'Technology',
						authors: [
							'https://github.com/joaovitorzv'
						],
						tags: post.tags,
					},
					 images: [
						{
							url: post.coverImage.url,
							width: post.coverImage.width,
							height: post.coverImage.height,
							alt: post.coverImageAlt,
						},
					],
				}}
			/>
      <main className='container'>
        <Header />
        <section className={PostStyles.postHeader}>
          <div className={PostStyles.postCover}>
            <Image 
              loader={MyLoader}
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
        <article id='keep-reading' className={PostStyles.content}>
					<RichText 
						content={post.content.raw} 
						renderers={{
							bold: ({ children }) => <b className='bold'>{children}</b>,
							li: ({ children }) => <li className='bulletList'>{children}</li>,
							img: ({ src, width, height }) => {
								console.log(src)
								return (
									<div className='img'>
										<Image
											src={src as string}
											loader={MyLoader}
											height={height}
											width={width}
											layout='intrinsic'
										/>
									</div>
								)
							},
							code: ({ children }) => <code className='inlineHighlight'>{children}</code>,
							code_block: ({ children }) => {
								const codeblock = children as CodeBlock

								const lang = /(?<=\$)(.*?)(?=\$)/.exec(codeblock.props.content[0].text || '')
								const codeblockWithoutLangIdentifier = codeblock.props.content[0].text.replace(/\$.*?\$\n/, '')
								
								return (
									<pre className={`blockHighlight language-${lang ? lang?.[1] : 'none'}`}><code>{codeblockWithoutLangIdentifier}</code></pre>
								)
							}
						}}
					/>
        </article>
        <div className={PostStyles.postFooter}>
          <Link href='/'>Voltar</Link>
        </div>
      </main>
      <footer className={PostStyles.footer}>
        <span>Escrito por @joaovitorzv obrigado por ler!</span>
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

  const { data } = await client.query({
    query: gql`
      query Post {
        post(where: {slug: "${slug}"}) {
          title,
					slug,
					description,
          date,
          coverImage {
            url,
            width,
            height
          },
					coverImageAlt,
          content {
						raw	
          },
					tags
        }
      }
    `
  })

  return {
    props: data
  }
}

export default Post
