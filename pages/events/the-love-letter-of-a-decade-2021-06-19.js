import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';
import PersonalConstants from '@constants/personal';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import introPic from '@images/the-love-letter-of-a-decade-2021-06-19/lily-of-the-valley.jpeg';
import masksPic from '@images/the-love-letter-of-a-decade-2021-06-19/masks.jpeg';
import symmoPic from '@images/the-love-letter-of-a-decade-2021-06-19/symmo.jpg';
import shortcutStatsPic from '@images/the-love-letter-of-a-decade-2021-06-19/shortcuts-stats.png';
import lang1Pic from '@images/the-love-letter-of-a-decade-2021-06-19/lang1.png';
import lang2Pic from '@images/the-love-letter-of-a-decade-2021-06-19/lang2.png';
import lang3Pic from '@images/the-love-letter-of-a-decade-2021-06-19/lang3.png';
import mk1Pic from '@images/the-love-letter-of-a-decade-2021-06-19/mk1.jpeg';
import mk2Pic from '@images/the-love-letter-of-a-decade-2021-06-19/mk2.jpeg';
import linkedinPic from '@images/the-love-letter-of-a-decade-2021-06-19/linkedin.png';
import archipelagoPic from '@images/the-love-letter-of-a-decade-2021-06-19/archipelago.png';



import qrCodeBranding from '@images/branding/qr_code.png';

// Page reveal styles
const stylesheets = [
  `${basePath}/static/reveal-3.8.0/theme/league.css`,
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

    this.title = 'The Love Letter of a Decade';
    this.description = 'Recalling the contentments and regrets';
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
        <div className="reveal">
          <div className="slides">
            <section>
              <h2><b class="text-success">Love Letter</b> of a <b class="text-warning">Decade</b></h2>
              <img src={introPic} className="banner" />
              <p>
                <small>
                  By <a href={PersonalConstants.WEIYUAN.SITE}>Weiyuan Liu, Staff SWE, Hubble</a>
                </small>
              </p>
            </section>

            <section>
              <section>
                <h3>Alternate titles</h3>
              </section>

              <section>
                <p><b class="text-warning">(Original)</b> Technical and non-technical tips</p>
              </section>

              <section>
                <p><b class="text-warning">(First Draft)</b> The Endless Journey</p>
              </section>
            </section>

            <section>
              <h2><b class="text-success">Love Letter</b> of a <b class="text-warning">Decade</b></h2>
              <hr/>
              <ul class="cornsilk-list fragment">
                <li>Contentments - What went well?</li>
                <li class="fragment">Regrets - What could have been better? </li>
                <li class="fragment">Hopefully, this could help you? </li>
              </ul>
            </section>

            <section>
              <h3><b class="text-warning">Disclaimer!</b></h3>
              <hr/>
              <small class="fragment text-cornsilk">These are my stories, my anecdotes. Our journeys may differ. </small>
              <small class="fragment">But...there come from <b class="text-success">success stories</b> and <b class="text-success">experiences</b> from the people around me as well.</small>
            </section>

            <section>
              <h2>My journey in the last <b class="text-warning">decade</b></h2>
            </section>

            <section>
              <h4 className="section-heading">My journey in the last <b class="text-warning">decade</b></h4>

              <section>
                <p class="fragment text-cornsilk">Finished NS <small style={{'vertical-align': 'middle'}}>(2011)</small></p>
                <hr/>
                <p class="fragment">School <small style={{'vertical-align': 'middle'}}>(2011-2015)</small></p>
                <hr/>
                <p class="fragment text-cornsilk"><del>Growing white hair</del> Work <small style={{'vertical-align': 'middle'}}>(2015-present)</small></p>
              </section>

              <section>
                <p><b class="text-success">Contentments</b> and <b class="text-warning">Regrets</b></p>
                <img 
                  data-src={masksPic}
                  style={{'maxHeight': '35%', 'maxWidth': '35%', 'width': '35%'}} />
              </section>
            </section>

            <section>
              <p><b class="text-cornsilk">Y1 - Y3</b> Honeymoon period</p>
            </section>

            <section>
              <h4 className="section-heading"><b class="text-cornsilk">Y1 - Y3</b> Honeymoon period</h4>

              <section>
                <h2>Regrets</h2>
                <hr/>
                <ul class="cornsilk-list fragment">
                  <li>Hackathons - Y7</li>
                  <li class="fragment">Community activities - Y5</li>
                  <li class="fragment">Internships - Late Y3</li>
                </ul>
              </section>

              <section>
                <h2>Contentments</h2>
                <hr/>
                <ul class="cornsilk-list fragment">
                  <li>Freelancing - Y2+</li>
                  <li class="fragment">OR Open source (up-for-grabs.net), side projects</li>
                </ul>
                <br/>
                <img 
                  class="fragment"
                  data-src={symmoPic}
                  style={{'maxHeight': '35%', 'maxWidth': '35%', 'width': '35%'}} />
              </section>
            </section>

            <section>
              <p><b class="text-cornsilk">Y4 - Y7</b> Feet's getting wet</p>
            </section>

            <section>
              <h4 className="section-heading"><b class="text-cornsilk">Y4 - Y7</b> Feet's getting wet</h4>

              <section>
                <h2>Regrets</h2>
                <hr/>
                <ul class="cornsilk-list fragment">
                  <li>Shortcuts! (I must have lived under a rock)</li>
                </ul>
              </section>

              <section>
                <img
                  data-src={shortcutStatsPic}
                  style={{'maxHeight': '60%', 'maxWidth': '60%', 'width': '60%'}} />
                <p style={{ 'font-size': '1rem', 'margin-top': '0' }}>https://visual.ly/community/Infographics/technology/11-pc-keyboard-shortcuts-enhance-your-productivity</p>
              </section>

              <section>
                <h2>Regrets</h2>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Shortcuts! (I must have lived under a rock)</li>
                  <li class="fragment">Focused on language and trends</li>
                </ul>
              </section>

              <section>
                <img
                  data-src={lang1Pic}
                  style={{'maxHeight': '47%', 'maxWidth': '47%', 'width': '47%'}} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  data-src={lang2Pic}
                  style={{'maxHeight': '47%', 'maxWidth': '47%', 'width': '47%'}} />

                <img
                  data-src={lang3Pic}
                  style={{'maxHeight': '47%', 'maxWidth': '47%', 'width': '47%'}} />
                <p style={{ 'font-size': '1rem'}}>fb.me/bigondevelopment</p>
              </section>

              <section>
                <h2>Regrets</h2>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Shortcuts! (I must have lived under a rock)</li>
                  <li>Focused on language and trends</li>
                </ul>
              </section>


              <section>
                <h2>Contentments</h2>
                <hr/>
                <ul class="cornsilk-list fragment">
                  <li>Community activities - Speak, blog, volunteer</li>
                </ul>
                <br/>
                <div class="fragment">
                  <img
                    data-src={mk1Pic}
                    style={{'maxHeight': '35%', 'maxWidth': '35%', 'width': '35%'}} />
                  &nbsp;
                  <img 
                    data-src={mk2Pic}
                    style={{'maxHeight': '35%', 'maxWidth': '35%', 'width': '35%'}} />
                </div>
              </section>

              <section>
                <img 
                  data-src={linkedinPic}
                  style={{'maxHeight': '55%', 'maxWidth': '55%', 'width': '55%'}} />
                <p style={{ 'font-size': '1rem', 'margin-top': '0' }}>https://news.linkedin.com/2017/6/eighty-percent-of-professionals-consider-networking-important-to-career-success</p>
              </section>

              <section>
                <h2>Contentments</h2>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Community activities - Speak, blog, volunteer</li>
                  <li class="fragment">Professional activities - Co-FYP supervisor</li>
                </ul>
                <br/>
                <img 
                  class="fragment"
                  data-src={archipelagoPic}
                  style={{'maxHeight': '45%', 'maxWidth': '45%', 'width': '45%'}} />
                <br/>
              </section>
            </section>

            <section>
              <p><b class="text-cornsilk">Y8 - beyond</b> Growing white hair</p>
            </section>

            <section>
              <h4 className="section-heading"><b class="text-cornsilk">Y8 - beyond</b> Growing white hair</h4>

              <section>
                <h2>Regrets</h2>
                <hr/>
                <ul class="cornsilk-list fragment">
                  <li>Read</li>
                  <li class="fragment">Tip - use NLB, listen to audiobooks</li>
                  <li class="fragment">Book - The Phoenix Project</li>
                </ul>
              </section>

              <section>
                <h2>Contentments</h2>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Worked hard. Be humble (and a giver)</li>
                  <li class="fragment">Find a mentor</li>
                </ul>
                <br/>
              </section>
            </section>

            <section>
              <h3>This was my love letter to my past self</h3>
              <img src={introPic} className="banner" />
              <p>END</p>
            </section>

            <section>
              <p class="text-cornsilk">Come poke me! </p>
              <small class="text-cornsilk">Make sure to tell me you're from today's session</small>
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
