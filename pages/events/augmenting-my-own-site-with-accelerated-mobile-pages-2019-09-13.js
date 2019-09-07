import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import introPic from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/intro_pic.png';
import ampLogo from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/amp_logo.svg';
import ampAccel from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/amp_accel.png';
import ampValidator from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/amphtml_validator.png';
import searchConsoleSitemap from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/search_console_sitemap.png';
import searchConsoleAmp from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/search_console_amp.png';
import endSuccess from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/success.png';

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
                <h2>What is AMP ?</h2>
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

              <section>
                <h2>What is AMP ?</h2>
                <br/>
                <ul className="cornsilk-list">
                  <li className="fragment">Web component framework for optimising page loading</li>
                  <li className="fragment">e.g. Non-blocking JS and CSS during page render</li>
                  <li className="fragment">Lightweight</li>
                </ul>
              </section>
            </section>

            <section>
              <section>
                <h2>Why AMP ?</h2>
              </section>

              <section>
                <h3>Why should I load AMP pages (as a user) ? </h3>
                <br/>
                <ul className="cornsilk-list fragment">
                  <li>Faster page load times</li>
                  <li className="fragment">Frankly, we don't have a choice (Google's search engine for mobile)</li>
                </ul>
              </section>

              <section>
                <h3>Why should I implement it ? </h3>
                <br/>
                <div className="fragment">
                  <ul className="cornsilk-list">
                    <li>SEO</li>
                  </ul>
                  <img 
                    data-src={ampAccel}
                    style={{
                      'maxHeight': '64%', 
                      'maxWidth': '64%', 
                      'width': '64%',
                    }} />
                </div>
              </section>

              <section>
                <h3>Why should I implement it ?</h3>
                <br/>
                <ul className="cornsilk-list">
                  <li>SEO</li>
                  <li className="fragment">Mobile internet traffic accounts for <b>70%</b> of all traffic in 2018, projected to <b>80%</b> in 2019 <sup>1</sup> </li>
                  <li className="fragment"><b>95.58%</b> <sup>2</sup> of mobile search traffic is attributed Google (from June 2018 to June 2019)</li>
                </ul>
                <br/>
                <p class="pseudo-h8 fragment align-left" style={{ 'marginLeft': '5%' }}>1 - Mobile traffic data from <a href="https://www.ciodive.com/news/70-of-internet-traffic-comes-from-mobile-phones/510120/" target="_blank">Zenith Media</a> <br/><br/>2 - Search engine data from <a href="http://gs.statcounter.com/search-engine-market-share/mobile/worldwide" target="_blank">statcounter</a></p>
              </section>

              <section>
                <p>Counter-intuitive: Check your performance scores (e.g. lighthouse) and user engagement mediums (mostly mobile), <b>you may not need AMP 😏</b></p>
              </section>

              <section>
                <h3>For personal site ?</h3>
                <br/>
                <ul className="cornsilk-list">
                  <li className="fragment">A good way to learn AMP</li>
                  <li className="fragment">Initiative to integrating search console(s)</li>
                  <li className="fragment">Raise your profile?</li>
                </ul>
              </section>
            </section>

            <section>
              <section>
                <h2>How do I AMP ? 🎸🤘</h2>
              </section>
            </section>

            <section>
              <section>
                <h2>Tips</h2>
              </section>

              <section>
                <h2>Tip #1</h2>
                <br/>
                <p>Do more with Google's search console</p>
              </section>

              <section>
                <img 
                  data-src={searchConsoleSitemap}
                  style={{'maxHeight': '80%', 'maxWidth': '80%', 'width': '80%'}} />
              </section>

              <section>
                <img 
                  data-src={searchConsoleAmp}
                  style={{'maxHeight': '80%', 'maxWidth': '80%', 'width': '80%'}} />
              </section>

              <section>
                <h2>Tip #2</h2>
                <br/>
                <p>Don't invest in <b>Bing</b> (for now) :(</p>
                <p className="pseudo-h7">Unless you can get featured in the AMP Carousel, in the United States ...</p>
              </section>

              <section>
                <h2>Tip #3</h2>
                <br/>
                <p>"Build" against silent failures</p>
                <img 
                  data-src={ampValidator}
                  style={{'maxHeight': '60%', 'maxWidth': '60%', 'width': '60%'}} />
                <p className="pseudo-h7">Use <b>"amphtml-validator"</b> or the likes to test against a<br/><br/> <b>link to some page</b> (e.g. test server) or a <b>static HTML file</b></p>
              </section>
            </section>

            <section>
              <section>
                <h1> AMP ON !!! 🤘🤘🤘</h1>
              </section>


              <section>
                <h3> AMP ON !!! 🤘🤘🤘</h3>
                <img 
                  data-src={endSuccess}
                  style={{'maxHeight': '50%', 'maxWidth': '50%', 'width': '50%'}} />
              </section>
            </section>

            <section>
              <h2>Questions ?</h2><hr/>
              <p>Official documentation: <a href="https://amp.dev" target="_blank">amp.dev</a></p>
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
