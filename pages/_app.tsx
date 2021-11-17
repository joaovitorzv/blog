import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      </Head>
			<DefaultSeo 
				openGraph={{
					type: 'website',
					locale: 'pt_BR',
					url: 'https://joaovitorzv.github.io',
					site_name: '@joaovitorzv blog'
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image'
				}}
			/>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
