import Head from "next/head";
import Header from "../components/header";

import NotFoundStyles from "../styles/404.module.css";

function Custom404() {
  return (
    <div className="container">
      <Head>
        <title>Well that&apos;s an 404 error</title>
      </Head>
      <Header />
      <main className={NotFoundStyles.content}>
        <h2>404</h2>
        <p>Sorry, this page is missing.</p>
      </main>
    </div>
  );
}

export default Custom404;
