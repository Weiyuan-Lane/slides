import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';
import PersonalConstants from '@constants/personal';

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
import headache from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/jackieisheadache.jpg';
import chromeExtDemo from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/chromeExtDemo.png';
import googleAmpValidator from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/googleAmpValidator.png'
import bingImage from '@images/augmenting-my-own-site-with-accelerated-mobile-pages-2019-09-13/bingImage.png';

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
                    By <a href={PersonalConstants.WEIYUAN.SITE}>Weiyuan Liu | Rakuten Viki</a>
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
            </section>

            <section>
              <p className="section-heading">What is AMP ?</p>
              <section>
                <div style={{
                  'position':'relative', 
                  'paddingBottom':'55%'}}>
                  <iframe 
                    src='https://www.youtube.com/embed/C5lBHKrk_Bw' 
                    frameBorder='0' 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    width='95%' 
                    height='100%' 
                    style={{
                      'position':'absolute', 
                      'top': '0',
                      'left':'2.5%'
                    }} 
                    allowFullScreen={true}></iframe>
                </div>
              </section>

              <section>
                <ul className="cornsilk-list">
                  <li>Web component framework for optimising page loading</li>
                  <li className="fragment">e.g. Non-blocking JS and CSS during page render</li>
                  <li className="fragment">HTML != AMP-HTML</li>
                </ul>
              </section>
            </section>

            <section>
              <section>
                <h2>Why AMP ?</h2>
                <br/>
                <ul className="cornsilk-list">
                  <li className="fragment">User</li>
                  <li className="fragment">Developer / Organisation</li>
                </ul>
              </section>
            </section>

            <section>
              <p className="section-heading">Why should I use AMP (as a user) ?</p>
              <section>
                <ul className="cornsilk-list">
                  <li>Better perceived latency and/or better latency </li>
                  <li className="fragment">Frankly, we don't have a choice (Google's search engine for mobile)</li>
                </ul>
              </section>
            </section>

            <section>
              <p className="section-heading">Why should I use AMP (as a dev) ?</p>
              <section>
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
                <ul className="cornsilk-list">
                  <li>SEO</li>
                  <li className="fragment">Mobile internet traffic accounts for <b>70%</b> of all traffic in 2018, projected to <b>80%</b> in 2019 <sup>1</sup> </li>
                  <li className="fragment"><b>95.58%</b> <sup>2</sup> of mobile search traffic is attributed Google (from June 2018 to June 2019)</li>
                </ul>
                <br/>
                <p className="pseudo-h8 fragment align-left" style={{ 'marginLeft': '5%' }}>1 - Mobile traffic data from <a href="https://www.ciodive.com/news/70-of-internet-traffic-comes-from-mobile-phones/510120/" target="_blank">Zenith Media</a> <br/><br/>2 - Search engine data from <a href="http://gs.statcounter.com/search-engine-market-share/mobile/worldwide" target="_blank">statcounter</a></p>
              </section>

              <section>
                <p>Counter-intuitive: Check your performance scores (e.g. lighthouse) and user engagement mediums (mostly mobile), <b>you may not need AMP 😏</b></p>
              </section>

              <section>
                <h3>For personal learning ?</h3>
                <br/>
                <ul className="cornsilk-list">
                  <li className="fragment">Raise your profile?</li>
                  <li className="fragment">Hours to months to first prototype</li>
                </ul>
              </section>
            </section>

            <section>
              <section>
                <h2>How do I AMP ? 🎸🤘</h2>
              </section>
            </section>

            <section>
              <p className="section-heading">How do I AMP ? 🎸🤘</p>
              <section>
                <h3>"Architecture"</h3><br/>
                <h5 className="fragment"><span style={{ 'color': 'cornsilk' }}>Hybrid</span> or <span style={{ 'color': 'cornsilk' }}>Amp-only</span></h5>
              </section>

              <section>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Actual Path</th>
                      <th>AMP Path</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span style={{ 'color': 'cornsilk' }}><b>Hybrid</b></span></td>
                      <td>/users</td>
                      <td>/users?amp=1</td>
                    </tr>
                    <tr>
                      <td><span style={{ 'color': 'cornsilk' }}><b>Amp-only</b></span></td>
                      <td>/users</td>
                      <td>/amp/users</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            
              <section>
                <h3><span style={{ 'color': 'cornsilk' }}>Hybrid</span> or <span style={{ 'color': 'cornsilk' }}>Amp-only</span></h3>
                <ul>
                  <li className="fragment">Hybrid - one view template - high coupling<br/><br/></li>
                  <li className="fragment">Amp-only - two view templates - low coupling</li>
                </ul>
              </section>

              <section>
                <h3>Build / Use a valid AMP layout</h3>
              </section>

              <section>
                <pre>
                  <code className="hljs" data-line-numbers="7-8,14" style={{ 'display': 'block', 'whiteSpace': 'pre-wrap' }}>
                    {'<!doctype html>\n<html amp lang=\"en\">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">\n\n    <title><%= title %></title>\n    <link rel="canonical" href="<%= linkToNonAmpVersion %>">\n\n    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>\n    <script async src="https://cdn.ampproject.org/v0.js"></script>\n  </head>\n  <body>\n    <%= yield %>\n  </body>\n</html>\n'}
                  </code>
                </pre>
              </section>
            
              <section>
                <h3>Problem ?</h3>
                <p className="fragment">Script tags with type as <span style={{ 'color': 'cornsilk' }}>application/javascript</span> and link tags with rel value as <span style={{ 'color': 'cornsilk' }}>stylesheet</span> are not allowed in <span style={{ 'color': 'cornsilk' }}>AMP</span>. </p>
                <img 
                  className="fragment"
                  data-src={headache}
                  style={{'maxHeight': '30%', 'maxWidth': '30%', 'width': '30%'}} />
              </section>

              <section>
                <h3>Styling</h3><br/>
                <p>Use inline style tags ( max 50kB )</p>
              </section>

              <section>
                <h3>Scripting</h3><br/>
                <ul className="cornsilk-list">
                  <li className="fragment">Use AMP components</li>
                </ul>
              </section>

              <section>
                <h5>AMP components</h5><br/>
                <ul className="cornsilk-list">
                  <li className="fragment">&lt;amp-img&gt; use in place of &lt;img&gt;</li>
                  <li className="fragment">&lt;amp-video&gt; use in place of &lt;video&gt;</li>
                  <li className="fragment">&lt;amp-analytics&gt; use in place of analytics script logic</li>
                  <li className="fragment">&lt;amp-sidebar&gt; use in place of a sidebar component</li>
                </ul>
              </section>

              <section>
                <div style={{
                  'position':'relative', 
                  'paddingBottom':'55%'}}>
                  <iframe height="100%" width="100%" style={{
                      'position':'absolute', 
                      'top': '0',
                      'left':'2.5%'
                    }} scrolling="no" title="&lt;amp-sidebar&gt; example" src="//codepen.io/weiyuan-lane/embed/aeojZW/?height=265&theme-id=0&default-tab=html,result" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
                    See the Pen <a href='https://codepen.io/weiyuan-lane/pen/aeojZW/'>&lt;amp-sidebar&gt; example</a> by Lane
                    (<a href='https://codepen.io/weiyuan-lane'>@weiyuan-lane</a>) on <a href='https://codepen.io'>CodePen</a>.
                  </iframe>
                </div>
              </section>

              <section>
                <h3>Scripting</h3><br/>
                <ul className="cornsilk-list">
                  <li>Use AMP components</li>
                  <li className="fragment">Use &lt;amp-iframe&gt; to load scripts and view from a different route</li>
                  <li className="fragment">Use &lt;amp-script&gt; to load scripts (Just released!)</li>
                </ul>
              </section>

              <section>
                <h3>Validation</h3><br/>
                <ul className="cornsilk-list">
                  <li className="fragment">Use browser extensions (recommended) </li>
                </ul>
              </section>

              <section>
                <img
                  data-src={chromeExtDemo}
                  style={{'maxHeight': '80%', 'maxWidth': '80%', 'width': '80%'}} />
                <p>https://validator.ampproject.org/</p>
              </section>

              <section>
                <h3>Validation</h3><br/>
                <ul className="cornsilk-list">
                  <li>Use browser extensions (recommended) </li>
                  <li className="fragment">Use Google's AMP validator</li>
                </ul>
              </section>

              <section>
                <img
                  data-src={googleAmpValidator}
                  style={{'maxHeight': '80%', 'maxWidth': '80%', 'width': '80%'}} />
              </section>
            </section>

            <section>
              <section>
                <h2>Tips</h2>
              </section>
            </section>

            <section>
              <p className="section-heading">Tips</p>
              <section>
                <h2>Tip #1</h2>
                <br/>
                <p>Use Google's search console</p>
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
                <img
                  src={bingImage} 
                  style={{'maxHeight': '80%', 'maxWidth': '80%', 'width': '80%'}}/>
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
