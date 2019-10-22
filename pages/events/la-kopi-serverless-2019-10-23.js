import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';
import PersonalConstants from '@constants/personal';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import introPic from '@images/la-kopi-serverless-2019-10-23/introPic.png';
import soompiweb from '@images/la-kopi-serverless-2019-10-23/soompiweb.png';

import qrCodeBranding from '@images/branding/qr_code.png';

// Page reveal styles
const stylesheets = [
  `${basePath}/static/reveal-3.8.0/theme/sky.css`,
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

    this.title = 'Doing more with (server)less';
    this.description = 'What else can you do with serverless in Google Cloud Platform?';
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
              <h2>Doing More With (Server)less</h2>
              <p>"P2, Da Recap"</p>
              <img src={introPic} className="banner image-s" />
              <p>
                <small>
                  By <a href={PersonalConstants.WEIYUAN.SITE}>Weiyuan Liu | Rakuten Viki</a>
                </small>
              </p>
            </section>

            <section>
              <h3>Recap</h3>
              <ul className="aquablue-list">
                <li className="fragment">New Google Cloud Platform project</li>
                <li className="fragment">Deployed CICD pipeline with Cloud Build</li>
                <li className="fragment">Deployed Web application(s) to App Engine &amp; Cloud Run</li>
              </ul>
            </section>

            <section>
              <h2>Thanks for listening!</h2><hr/>
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
