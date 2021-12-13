import Document, { Html, Head, Main, NextScript } from "next/document";

class BlogDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&family=IBM+Plex+Mono:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <meta name="google-site-verification" content="BXyBgJEABD-lS0WS6u07BLfhlhHI8sT9TtYOH-VtkYs" />
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
