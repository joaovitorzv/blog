import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import { PostsLangFilterContext } from "../hooks/FilterContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedLang, setSelectedLang] = useState("all");

  const changeSelectedLang = (lang: string) => {
    console.log(lang);
    return setSelectedLang(lang);
  };

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
      <PostsLangFilterContext.Provider
        value={{
          selectedLangFilter: selectedLang,
          changeLangFilter: changeSelectedLang,
        }}
      >
        <Component {...pageProps} />
      </PostsLangFilterContext.Provider>
    </>
  );
}
export default MyApp;
