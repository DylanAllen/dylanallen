import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    console.log(process.env.NODE_ENV);
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
          {(process.env.NODE_ENV !== 'development') && <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ga_id}`}
          />}
          <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
          {(process.env.NODE_ENV !== 'development') && <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    window.ga_id = '${process.env.ga_id}';
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.ga_id}');
                `,
            }}
          />}
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument