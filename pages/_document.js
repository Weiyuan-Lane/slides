import Document, { Html, Head, Main, NextScript } from 'next/document';
import favicon from '@images/favicon.ico';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const gaID = publicRuntimeConfig.gaID || '';
const searchConsoleID = publicRuntimeConfig.searchConsoleID || '';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' type='image/x-icon' href={favicon} />
          <meta name="google-site-verification" content={searchConsoleID}></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script defer async src={ `https://www.googletagmanager.com/gtag/js?id=${gaID}` }></script>
        </body>
      </Html>
    );
  }
};

// Load client side script for GA
if (process.browser) {
  window.addEventListener('load', function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaID);
  });
}

export default MyDocument;