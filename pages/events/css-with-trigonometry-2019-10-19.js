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
import solutionsImg from '@images/css-with-trigonometry-2019-10-19/solutions.jpg';
import gifCost from '@images/css-with-trigonometry-2019-10-19/gifCost.png';
import svgSample from '@images/css-with-trigonometry-2019-10-19/sampleSVG.svg';

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
              <h3>All tales starts with a hero-to-be on a adventure ... </h3>
            </section>

            <section>
              <h3>His / her quest ?</h3>
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
              <h3>Breaking down the problem</h3>
              <ul className="cornsilk-list">
                <li className="fragment">Hexagon</li>
                <li className="fragment">Rotation Animation</li>
                <li className="fragment">Hexagons nested in each other</li>
                <li className="fragment">Clockwise and Anti-clockwise animation for each hexagon</li>
              </ul>
            </section>

            <section>
              <h3>Solutions</h3>
              <div className="fragment">
                <img data-src={solutionsImg} className="supress-reveal-img img-shadow image-m" />
                <p>Many potential solutions</p><br/>
                <p className="fragment"><b>Spoiler in title 😣</b></p>
              </div>
            </section>

            <section>
              <h3>Potential Solution #1 : "GIF"</h3>
              <div className="fragment">
                <hr/>
                <small>Is it pronouced `gee-if` or "jee-if" ?</small>
              </div>
            </section>

            <section>
              <p className="section-heading">Potential Solution #1 : "GIF"</p>
              
              <section>
                <h3>How ?</h3>
                <ul className="cornsilk-list">
                  <li className="fragment">Save animation as a GIF</li>
                  <li className="fragment">Host the GIF file somewhere</li>
                  <li className="fragment">Load the GIF asset</li>
                </ul>
              </section>

              <section>
                <h3>What ?</h3>
                <img
                  data-src={problemLoader}
                  className="supress-reveal-img img-shadow fragment" />
              </section>

              <section>
                <h3>Why ?</h3>
                <ul className="success-list">
                  <li className="fragment">"Plug and play"</li>
                </ul>
              </section>

              <section>
                <h3>Why not ?</h3>
                <ul className="danger-list">
                  <li className="fragment">File size can be big even at low resolutions</li>
                </ul>
                <img className="supress-reveal-img img-shadow image-m fragment" src={gifCost} />
              </section>

              <section>
                <h3>Why not ?</h3>
                <ul className="danger-list">
                  <li>File size can be big even at low resolutions</li>
                  <li className="fragment">Reduced animation "stuttering" vs file size</li>
                  <li className="fragment">Scaling / Reusability issues</li>
                  <li className="fragment">How do I even "GIF" ?</li>
                </ul>
              </section>
            </section>

            <section>
              <h3>Potential Solution #2 : Animation Libraries</h3>
              <div className="fragment">
                <hr/>
                <small>Outsourcing our problems to other people</small>
              </div>
            </section>

            <section>
              <p className="section-heading">Potential Solution #2 : Animation Libraries</p>

            </section>

            <section>
              <h3>Hey I'm an engineer</h3>
            </section>

            <section>
              <h3>Potential Solution #3 : CSS</h3>
              <div className="fragment">
                <hr/>
                <small>D.I.Y.</small>
              </div>
            </section>

            <section>
              <h3>Potential Solution #3 : Sass</h3>
              <div className="fragment">
                <hr/>
                <small>Using the SCSS syntax</small>
              </div>
            </section>

            <section>
              <h3>Alternative Solution #1 : SVG</h3>
              <div className="fragment">
                <hr/>
                <small>1.2% of all domains were using at least one SVG background image <sup>1</sup></small>
              </div>
              <p className="pseudo-h8 fragment align-left" style={{ 'marginLeft': '5%' }}>1 - Fun fact from <a href="https://css-tricks.com/random-interesting-facts-htmlsvg-usage/" target="_blank">Css Tricks</a></p>
            </section>

            <section>
              <p className="section-heading">Alternative Solution #1 : SVG</p>
              {/* <section>
                <h3>How ?</h3>
                <ul className="cornsilk-list">
                  <li className="fragment">Same as GIF</li>
                </ul>
              </section> */}

              <section>
                <div style={{
                  'position':'relative', 
                  'paddingBottom':'55%'}}>
                  <iframe height="100%" width="100%" style={{
                      'position':'absolute', 
                      'top': '0',
                      'left':'2.5%'
                    }} scrolling="no" title="&lt;amp-sidebar&gt; example" src="//codepen.io/weiyuan-lane/embed/jOOOpqp/?height=265&theme-id=0&default-tab=html,result" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
                    See the Pen <a href='https://codepen.io/weiyuan-lane/pen/jOOOpqp/'>&lt;amp-sidebar&gt; example</a> by Lane
                    (<a href='https://codepen.io/weiyuan-lane'>@weiyuan-lane</a>) on <a href='https://codepen.io'>CodePen</a>.
                  </iframe>
                </div>
              </section>

              <section>
                <img className="supress-reveal-img img-shadow image-s" src={svgSample} />
              </section>

              {/* <section>
                <h3>Why ?</h3>
                <ul className="success-list">
                  <li className="fragment">"Plug and play"</li>
                  <li className="fragment">SVGs are scaleable!</li>
                  <li className="fragment">File size are small for this animation (&lt; 1kB)</li>
                  <li className="fragment">Animation is smooth</li>
                </ul>
              </section> */}

              <section>
                <h3>Why not SVG ?</h3>
                <ul className="danger-list">
                  <li className="fragment">Solution spans across HTML, CSS, SVG</li>
                </ul>
              </section>
            </section>

            <section>
              <h3>What if my SCSS functions break ?</h3>
              <div className="fragment">
                <hr/>
                <small>Can we even unit test CSS ?</small>
              </div>
            </section>

            <section>
              <h2>Thanks for listening!</h2><hr/>
              <p>My writeup on AMP: <a href="https://bit.ly/scss-hexagon" target="_blank">bit.ly/scss-hexagon</a></p>
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
