import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import introPic from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/intro_pic.png';
import ampLogo from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/amp_logo.svg';

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

    this.title = 'Augmenting your / my own site with Accelerated Mobile Pages (AMP)';
    this.description = 'Inspired by sites, such as Reddit and Shopee, which has adopted Accelerated Mobile Pages (AMP), Weiyuan has converted parts of his own site to support AMP. He’ll share some tips on how he started and what he has done to change his site to support AMP, as well as the tools that are useful in validating AMP content.';
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
          { stylesheets.map((src, i) => {
            return (
              <link key={i} rel="stylesheet" href={src} />
            )
          })}
        </Head>
        <div className="reveal debug">
          <div className="slides">
            <section>
              <section>
                <h2>Augmenting my site with AMP</h2>
                <img 
                  src={introPic}
                  style={{
                    'maxHeight': '55%', 
                    'maxWidth': '55%', 
                    'width': '55%',
                  }} />
                <p>
                  <small>
                    By <a href="http://weiyuan-lane.github.io">Weiyuan Liu | Rakuten Viki</a>
                  </small>
                </p>
              </section>
            </section>

            <section>
              <section>
                <h2>What is AMP?</h2>
                <img 
                  data-src={ampLogo}
                  className="supress-reveal-img"
                  style={{
                    'maxHeight': '35%', 
                    'maxWidth': '35%', 
                    'width': '35%',
                  }} />
              </section>
              <section>
                <div style={{
                  'position':'relative', 
                  'paddingBottom':'calc(67.56% + 44px)'}}>
                  <iframe 
                    src='https://www.youtube.com/embed/C5lBHKrk_Bw' 
                    frameBorder='0' 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    width='95%' 
                    height='95%' 
                    style={{
                      'position':'absolute', 
                      'top': '0',
                      'left':'2.5%'
                    }} 
                    allowFullScreen={true}></iframe>
                </div>
              </section>
            </section>
          </div>
        </div>
      </React.Fragment>
    );

    // TODO avatar <meta property="og:image" content={gcpComparisons} />
  }
};
