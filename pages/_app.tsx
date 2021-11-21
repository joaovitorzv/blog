import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://joaovitorzv.github.io",
          site_name: "@joaovitorzv • blog",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
