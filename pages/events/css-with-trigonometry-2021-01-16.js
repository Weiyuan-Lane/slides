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
import lottefilesLanding from '@images/css-with-trigonometry-2019-10-19/lottefilesLanding.png';
import lottiefilesJSONSize from '@images/css-with-trigonometry-2019-10-19/lottiefilesJSONSize.png';
import lottieJSFileCost from '@images/css-with-trigonometry-2019-10-19/lottieJSFile.png';
import failedCSSHexagon from '@images/css-with-trigonometry-2019-10-19/failedCSSHexagon.gif';
import trigonometryHexagon from '@images/css-with-trigonometry-2019-10-19/trigonometryHexagon.png';
import trueSassUnitTest from '@images/css-with-trigonometry-2021-01-16/trueSassUnitTest.png';
import cssSupport from '@images/css-with-trigonometry-2021-01-16/cssSupport.png';
import exampleTest from '@images/css-with-trigonometry-2019-10-19/exampleTest.png';
import testResult from '@images/css-with-trigonometry-2019-10-19/testResult.png';
import mathFormula from '@images/css-with-trigonometry-2019-10-19/mathFormula.png';
import mathFormulaHighlight from '@images/css-with-trigonometry-2019-10-19/mathFormulaHighlight.png';
import factorialCode from '@images/css-with-trigonometry-2019-10-19/factorialCode.png';
import sinFormula from '@images/css-with-trigonometry-2019-10-19/sinFormula.png';
import cosFormula from '@images/css-with-trigonometry-2019-10-19/cosFormula.png';
import tanFormula from '@images/css-with-trigonometry-2019-10-19/tanFormula.png';
import tanSupport from '@images/css-with-trigonometry-2019-10-19/tanSupport.png';
import cssCost from '@images/css-with-trigonometry-2019-10-19/cssCost.png';
import svgCost from '@images/css-with-trigonometry-2019-10-19/svgCost.png';

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
                  By <a href={PersonalConstants.WEIYUAN.SITE}>Weiyuan Liu</a>
                </small>
              </p>
            </section>

            <section>
              <h3>Problem</h3>
              <img
                data-src={problemLoader}
                className="supress-reveal-img img-shadow fragment" />
            </section>

            <section>
              <h3>"Context"</h3>
              <img
                data-src={soompiSample} />
            </section>

            <section>
              <h3>Solutions</h3>
              <div className="fragment">
                <img data-src={solutionsImg} className="supress-reveal-img img-shadow image-m" />
                <p>Many solutions</p><br/>
                <p className="fragment"><b>Spoiler in title 😣</b></p>
              </div>
            </section>

            <section>
              <h3>Solution #1 : "GIF"</h3>
              <div className="fragment">
                <hr/>
                <small>Is it pronouced `gee-if` or "jee-if" ?</small>
              </div>
            </section>

            <section>
              <p className="section-heading">Solution #1 : "GIF"</p>
              
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
                <img className="supress-reveal-img img-shadow image-m fragment" data-src={gifCost} />
              </section>

              <section>
                <h3>Why not ?</h3>
                <ul className="danger-list">
                  <li>File size can be big even at low resolutions</li>
                  <li className="fragment">Lower FPS vs file size</li>
                  <li className="fragment">Resize and Scaling (reusability) issues</li>
                  <li className="fragment">How do I even "GIF" ?</li>
                </ul>
              </section>
            </section>

            <section>
              <h3>Solution #2 : Animation Libraries</h3>
              <div className="fragment">
                <hr/>
                <small>Making our problem other people's problem</small>
              </div>
            </section>

            <section>
              <p className="section-heading">Solution #2 : Animation Libraries</p>

              <section>
                <img className="supress-reveal-img img-shadow image-l" data-src={lottefilesLanding} />
              </section>

              <section>
                <h3>How ?</h3>
                <ul className="cornsilk-list">
                  <li className="fragment">Create animation (online editor / photoshop)</li>
                  <li className="fragment">Export JSON file</li>
                  <li className="fragment">Load animation library</li>
                  <li className="fragment">Load JSON file</li>
                </ul>
              </section>

              <section>
                <h3>What ?</h3>
                <div style={{
                  'position':'relative', 
                  'paddingBottom':'55%'}}>
                  <iframe height="100%" width="100%" style={{
                      'position':'absolute', 
                      'top': '0',
                      'left':'2.5%'
                    }} scrolling="no" title="Soompi Loading Demo (Lottefile variant)" 
                    data-src="//codepen.io/weiyuan-lane/embed/qzqjQR?height=265&theme-id=0&default-tab=html,result" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
                    See the Pen <a href='https://codepen.io/weiyuan-lane/pen/qzqjQR/'>Soompi Loading Demo (Lottefile variant)</a> by Lane
                    (<a href='https://codepen.io/weiyuan-lane'>@weiyuan-lane</a>) on <a href='https://codepen.io'>CodePen</a>.
                  </iframe>
                </div>
              </section>

              <section>
                <h3>Why ?</h3>
                <ul className="success-list">
                  <li className="fragment">Smaller file size</li>
                </ul>
                <img className="supress-reveal-img img-shadow image-m fragment" data-src={lottiefilesJSONSize} />
              </section>

              <section>
                <h3>Why ?</h3>
                <ul className="success-list">
                  <li>Smaller file size</li>
                  <li className="fragment">Simple to use</li>
                  <li className="fragment">JSON file usable across platforms</li>
                </ul>
              </section>

              <section>
                <h3>Why not ?</h3>
                <ul className="danger-list">
                  <li className="fragment">Need photoshop skills ?</li>
                  <li className="fragment">High initialisation cost</li>
                </ul>
                <img className="supress-reveal-img img-shadow image-m fragment" data-src={lottieJSFileCost} />
              </section>
            </section>

            <section>
              <h3>It's time to engineer it ourselves!</h3>
              <div className="fragment">
                <hr/>
                <small>"Weiyuan, why are you looking up Wikipedia for trigonometry?" - Manager</small>
              </div>
            </section>

            <section>
              <h3>Solution #3 : CSS</h3>
            </section>

            <section>
              <p className="section-heading">Solution #3 : CSS</p>

              <section>
                <h3>How ?</h3>
                <ul className="cornsilk-list">
                  <li className="fragment">Implement CSS styles</li>
                  <li className="fragment">Load CSS Stylesheet</li>
                  <li className="fragment">That's it?</li>
                </ul>
              </section>

              <section>
                <h3>Breaking down the problem</h3>
                <ul className="cornsilk-list">
                  <li className="fragment">Hexagon</li>
                  <li className="fragment">Rotation Animation</li>
                  <li className="fragment">Hexagons of different sizes</li>
                  <li className="fragment">Clockwise and Anti-clockwise animation for each hexagon</li>
                </ul>
              </section>

              <section>
                <h3>Breaking down the problem</h3><br/>
                <ul className="cornsilk-list">
                  <li>Hexagon</li>
                  <li className="fragment fade-out">Rotation Animation</li>
                  <li className="fragment fade-out">Hexagons of different sizes</li>
                  <li className="fragment fade-out">Clockwise and Anti-clockwise animation for each hexagon</li>
                </ul>
              </section>

              <section>
                <h3>Hexagon</h3><br/>
                <ul className="cornsilk-list">
                  <li className="fragment">Draw a &lt;div /&gt; with top and bottom border</li>
                  <li className="fragment">Do the same for ":before", rotate 60°</li>
                  <li className="fragment">Do the same for ":after", rotate -60°</li>
                </ul>
              </section>

              <section>
                <img className="supress-reveal-img img-shadow image-s fragment " data-src={failedCSSHexagon} />
              </section>

              <section>
                <h3>Height !== Side (width)</h3>
                <img className="supress-reveal-img img-shadow image-s" data-src={failedCSSHexagon} />
              </section>

              <section>
                <h5>Re-examine the hexagon</h5>
                <img className="supress-reveal-img img-shadow image-m fragment" data-src={trigonometryHexagon} />
                <h5 className="fragment">#toacahsoh</h5>
              </section>
            </section>

            <section>
              <h3>Solution #3.1 : <del>CSS</del> Sass</h3>
              <div className="fragment">
                <hr/>
                <small>Using the SCSS syntax</small>
              </div>
            </section>

            <section>
              <h3>How to do in Sass ?</h3>
            </section>

            <section>
              <p className="section-heading">How to do in Sass ?</p>

              <section>
                <h5>#toacahsoh</h5>
                
                <div className="inline-block" style={{verticalAlign: 'middle'}} >
                  <h5>tan(30°) = O / A</h5><br/>
                  <h5 className="fragment">cos(30°) = A / H</h5><br/>
                  <h5 className="fragment">sin(30°) = O / H</h5><br/>
                </div>
                <div className="inline-block">
                  <img className="supress-reveal-img img-shadow image-l" style={{verticalAlign: 'middle'}} data-src={trigonometryHexagon} />
                </div>
              </section>
              
              <section>
                <div className="inline-block" style={{verticalAlign: 'middle'}} >
                  <h5>tan(30°) = O / A</h5><br/>
                  <h5>sin(30°) = O / H</h5><br/>
                </div>
                <div className="inline-block">
                  <img className="supress-reveal-img img-shadow image-l" style={{verticalAlign: 'middle'}} data-src={trigonometryHexagon} />
                </div>
              </section>

              <section>
                <div className="inline-block" style={{verticalAlign: 'middle'}} >
                  <h5>tan(30°) = O / A</h5>
                </div>
                <div className="inline-block">
                  <img className="supress-reveal-img img-shadow image-l" style={{verticalAlign: 'middle'}} data-src={trigonometryHexagon} />
                </div>
              </section>
              
              <section>
                <div className="inline-block" style={{verticalAlign: 'middle'}}>
                  <h5>O = tan(30°) * A</h5>
                </div>
                <div className="inline-block">
                  <img className="supress-reveal-img img-shadow image-l" style={{verticalAlign: 'middle'}} data-src={trigonometryHexagon} />
                </div>
              </section>

              <section>
                <div className="inline-block" style={{verticalAlign: 'middle'}}>
                  <h5>O = tan(30°) * A</h5>
                  <img className="supress-reveal-img img-shadow image-l fragment" style={{verticalAlign: 'middle'}} data-src={mathFormula} />
                </div>
                <div className="inline-block">
                  <img className="supress-reveal-img img-shadow image-l" style={{verticalAlign: 'middle'}} data-src={trigonometryHexagon} />
                </div>
              </section>

              <section>
                <div className="inline-block" style={{verticalAlign: 'middle'}}>
                  <h5>O = tan(30°) * A</h5>
                  <img className="supress-reveal-img img-shadow image-l" style={{verticalAlign: 'middle'}} data-src={mathFormula} /><br/>
                  <h5 className="fragment">tan(x) = sin(x) / cos(x)</h5><br/>
                  <h5 className="fragment">sin(x) = cos(x - 90°)</h5><br/>
                </div>
                <div className="inline-block">
                  <img className="supress-reveal-img img-shadow image-m" style={{verticalAlign: 'middle'}} data-src={trigonometryHexagon} />
                </div>
              </section>

              <section>
                <img className="supress-reveal-img img-shadow image-m" data-src={mathFormulaHighlight} />
              </section>

              <section>
                <h3>Solving for Factorial</h3>
                <img className="supress-reveal-img img-shadow image-m fragment" data-src={factorialCode} />
              </section>

              <section>
                <img className="supress-reveal-img img-shadow image-m" data-src={mathFormula} /><br/>
              </section>

              <section>
                <h3>Solving for Sin(x)</h3>
                <img className="supress-reveal-img img-shadow image-m fragment" data-src={sinFormula} /><br/>
              </section>

              <section>
                <h5 style={{opacity: '0.5'}}>O = tan(30°) * A</h5><br/>
                <h5 style={{opacity: '0.5'}}>tan(x) = sin(x) / cos(x)</h5><br/>
                <h5>sin(x) = cos(x - 90°)</h5><br/>
              </section>

              <section>
                <h3>Solving for Cos(x)</h3>
                <img className="supress-reveal-img img-shadow image-m fragment" data-src={cosFormula} /><br/>
              </section>

              <section>
                <h5 style={{opacity: '0.5'}}>O = tan(30°) * A</h5><br/>
                <h5>tan(x) = sin(x) / cos(x)</h5><br/>
                <h5 style={{opacity: '0.5'}}>sin(x) = cos(x - 90°)</h5><br/>
              </section>

              <section>
                <h3>Solving for Tan(x)</h3>
                <img className="supress-reveal-img img-shadow image-m fragment" data-src={tanFormula} /><br/>
              </section>

              <section>
                <h5>O = tan(30°) * A</h5><br/>
                <h5 style={{opacity: '0.5'}}>tan(x) = sin(x) / cos(x)</h5><br/>
                <h5 style={{opacity: '0.5'}}>sin(x) = cos(x - 90°)</h5><br/>
              </section>

              <section>
                <div style={{
                  'position':'relative', 
                  'paddingBottom':'55%'}}>
                  <iframe height="100%" width="100%" style={{
                      'position':'absolute', 
                      'top': '0',
                      'left':'2.5%'
                    }} scrolling="no" title="&lt;amp-sidebar&gt; example" 
                    data-src="//codepen.io/weiyuan-lane/embed/pXedaK/?height=265&theme-id=0&default-tab=html,result" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
                    See the Pen <a href='https://codepen.io/weiyuan-lane/pen/pXedaK/'>Trigonometry hexagon</a> by Lane
                    (<a href='https://codepen.io/weiyuan-lane'>@weiyuan-lane</a>) on <a href='https://codepen.io'>CodePen</a>.
                  </iframe>
                </div>
              </section>

              <section>
                <h3>File size</h3>
                <img className="supress-reveal-img img-shadow image-m" data-src={cssCost} />
              </section>
            </section>

            <section>
              <h3>FAQ : Why not SVG ?</h3>
              <div className="fragment">
                <hr/>
                <small>SVG is used by 29.7% of all the websites <sup>1</sup></small>
              </div>
              <p className="pseudo-h8 fragment align-left" style={{ 'marginLeft': '5%' }}>1 - Fun fact from <a href="https://w3techs.com/technologies/details/im-svg" target="_blank">W3Techs</a></p>
            </section>

            <section>
              <p className="section-heading">FAQ : Why not SVG ?</p>

              <section>
                <div style={{
                  'position':'relative', 
                  'paddingBottom':'55%'}}>
                  <iframe height="100%" width="100%" style={{
                      'position':'absolute', 
                      'top': '0',
                      'left':'2.5%'
                    }} scrolling="no" title="&lt;amp-sidebar&gt; example" 
                    data-src="//codepen.io/weiyuan-lane/embed/jOOOpqp/?height=265&theme-id=0&default-tab=html,result" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
                    See the Pen <a href='https://codepen.io/weiyuan-lane/pen/jOOOpqp/'>Hexagon animation test</a> by Lane
                    (<a href='https://codepen.io/weiyuan-lane'>@weiyuan-lane</a>) on <a href='https://codepen.io'>CodePen</a>.
                  </iframe>
                </div>
              </section>

              <section>
                <img className="supress-reveal-img img-shadow image-s" data-src={svgSample} />
              </section>

              <section>
                <h3>Smallest file size !!!</h3>
                <img className="supress-reveal-img img-shadow image-m" data-src={svgCost}/>
              </section>

              <section>
                <h3>Why not ?</h3>
                <ul className="danger-list">
                  <li className="fragment">Build process = Sass + SVG</li>
                </ul>
              </section>
            </section>

            <section>
              <h3>What if my Sass functions break ?</h3>
              <div className="fragment">
                <hr/>
                <small>Can we even unit test CSS ?</small>
              </div>
            </section>

            <section>
              <p className="section-heading">What if my SCSS functions break ?</p>
              
              <section>
                <img className="supress-reveal-img img-shadow image-l" data-src={trueSassUnitTest} />
              </section>

              <section>
                <h3>Writing a test for factorial method</h3>
                <img className="supress-reveal-img img-shadow image-l fragment" data-src={exampleTest} />
              </section>

              <section>
                <h3>It works!</h3>
                <img className="supress-reveal-img img-shadow image-l fragment" data-src={testResult} />
              </section>
            </section>

            <section>
              <section>
                <h3>Trigonometry in CSS - WIP ?</h3><h3>Maybe? Soon!</h3>
                <img className="supress-reveal-img img-shadow image-l" data-src={tanSupport} />
              </section>

              <section>
                <img className="supress-reveal-img img-shadow image-l" data-src={cssSupport} />
              </section>
            </section>

            <section>
              <h2>Thanks for listening!</h2><hr/>
              <p>My writeup on this topic: <a href="https://bit.ly/scss-hexagon" target="_blank">bit.ly/scss-hexagon</a></p>
              <hr/>
              <p>Linkedin / Github : <a href="https://bit.ly/weiyuan" target="_blank">bit.ly/weiyuan</a></p>
            </section>
          </div>
        </div>
      </React.Fragment>
    );

    // TODO avatar <meta property="og:image" content={gcpComparisons} />
  }
};
