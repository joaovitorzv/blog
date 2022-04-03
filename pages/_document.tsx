import Document, { Html, Head, Main, NextScript } from "next/document";

class BlogDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&Zen+Antique+Soft&family=IBM+Plex+Mono:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/assets/blog-icon.ico" />

          {/* github pages domain */}
          <meta
            name="google-site-verification"
            content="BXyBgJEABD-lS0WS6u07BLfhlhHI8sT9TtYOH-VtkYs"
          />
          {/* is-a.dev domain */}
          <meta
            name="google-site-verification"
            content="v91Ks9t_Nh0XGmwV8GKa5bH-96U4ZKw23VpZajlhi6Y"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BlogDocument;
