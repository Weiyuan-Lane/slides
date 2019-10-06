import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';
import PersonalConstants from '@constants/personal';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import introPic from '@images/css-with-trigonometry-2019-10-19/introPic.png';
import problemLoader from '@images/css-with-trigonometry-2019-10-19/problemloader.gif';
import soompiSample from '@images/css-with-trigonometry-2019-10-19/soompiSample.gif';

import qrCodeBranding from '@images/branding/qr_code.png';

// Page reveal styles
const stylesheets = [
  `${basePath}/static/reveal-3.8.0/theme/night.css`,
  `${basePath}/static/reveal-3.8.0/reveal.css`,
]

// Page reveal plugins - loaded from static
const plugins = [
  { src: `${basePath}/static/reveal-3.8.0/plugin/markdown/marked.js` },
  { src: `${basePath}/static/reveal-3.8.0/plugin/markdown/markdown.js` },
  { src: `${basePath}/static/reveal-3.8.0/plugin/notes/notes.js`, async: true },
  { src: `${basePath}/static/reveal-3.8.0/plugin/highlight/highlight.js`, async: true }
];

// Presentation component
export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Implementing Trigonometry in SCSS, and lessons learnt';
    this.description = 'Basic CSS is insufficient. We use Sass (SCSS) to push the stylesheet language to the limit, where it’s similar to a programming language. Through implementing Trigonometry in SCSS as an example, we harness engineering principles such as code reuse, and perform unit-testing of SCSS functions.';
  }

  componentDidMount() {
    if (process.browser) {
      window.Reveal = revealInit();
      window.Reveal.initialize({
        dependencies: plugins,
        slideNumber: 'c/t',
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{ this.title }</title>
          <meta name="twitter:card" content="summary" />
          <meta property="og:title" content={ this.title } />
          <meta property="og:description" content={ this.description } />
          <meta property="og:image" content={introPic} />
          { stylesheets.map((src, i) => {
            return (
              <link key={i} rel="stylesheet" href={src} />
            )
          })}
        </Head>
        <div className="reveal background-white-translucent">
          <div className="slides">
            <section>
              <h2>Implementing Trigonometry in SCSS</h2>
              <p>... and lessons learnt</p>
              <img src={introPic} className="banner" />
              <p>
                <small>
                  By <a href={PersonalConstants.WEIYUAN.SITE}>Weiyuan Liu | Rakuten Viki</a>
                </small>
              </p>
            </section>

            <section>
              <h3>All tales starts with a nobody on a adventure ... </h3>
              <img
                data-src={problemLoader}
                className="supress-reveal-img img-shadow fragment" />
            </section>

            <section>
              <h3>"Final boss"</h3>
              <img
                data-src={soompiSample} />
            </section>

            <section>
              <h2>Thanks for listening!</h2><hr/>
              <p>My writeup on AMP: <a href="https://bit.ly/amp-medium" target="_blank">bit.ly/amp-medium</a></p>
              <hr/>
              <p>Linkedin / Github : <a href="https://bit.ly/weiyuan" target="_blank">bit.ly/weiyuan</a></p>
              <img 
                data-src={qrCodeBranding}
                style={{'maxHeight': '20%', 'maxWidth': '20%', 'width': '20%'}} />
            </section>
          </div>
        </div>
      </React.Fragment>
    );

    // TODO avatar <meta property="og:image" content={gcpComparisons} />
  }
};
