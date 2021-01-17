import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';
import PersonalConstants from '@constants/personal';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import introPic from '@images/technical-and-non-technical-tips-swe-2021-01-23/introPic.jpg';
import timeTravelTardis from '@images/technical-and-non-technical-tips-swe-2021-01-23/timeTravelTardis.jpg';
import defectBySize from '@images/technical-and-non-technical-tips-swe-2021-01-23/defectBySize.gif';
import defectByTime from '@images/technical-and-non-technical-tips-swe-2021-01-23/defectByTime.gif';
import langTrends from '@images/technical-and-non-technical-tips-swe-2021-01-23/langTrends.png';
import phoenixProject from '@images/technical-and-non-technical-tips-swe-2021-01-23/phoenixProject.jpg';

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

    this.title = 'Technical and Non-technical tips - SWE';
    this.description = 'A personal list of tips and tricks to excel as a Software Engineer';
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
              <h2>Technical and Non-technical tips</h2>
              <p>From a SWE</p>
              <img src={introPic} className="banner" />
              <p>
                <small>
                  By <a href={PersonalConstants.WEIYUAN.SITE}>Weiyuan Liu | Staff SWE, Hubble | GDE, Google Cloud</a>
                </small>
              </p>
            </section>

            <section>
              <section>
                <h3>As you embark into the industry...</h3>
              </section>

              <section>
                <h3 class="fragment">Being an engineer is <b class="text-danger">easy</b></h3>
                <h3 class="fragment">Being an <b class="text-success">good</b> engineer is <b class="text-success">hard</b></h3>
              </section>

              <section>
                <h3>Things I wish I could tell myself <b class="text-warning">5</b> years ago</h3>
                <img src={timeTravelTardis} className="banner" />
              </section>
            </section>

            <section>
              <h3>Disclaimer!</h3>
              <hr/>
              <small class="fragment">Take away what you believe in, ask around, get more info</small>
              <small class="fragment"><b class="text-warning">Objective</b>, but also with some <b class="text-warning">opinions</b></small>
            </section>

            <section>
              <h3>10 + 6 tips</h3>
            </section>
            
            <section>
              <h2>In the <b class="text-cornsilk">Workplace</b></h2>
            </section>

            <section>
              <h4 className="section-heading">In the <span class="text-cornsilk">Workplace</span></h4>
              
              <section>
                <h3>Don't <span class="text-danger">lock</span> yourself to a <span class="text-warning">framework / language</span></h3>
              </section>
              
              <section>
                <h3>Don't <span class="text-danger">lock</span> yourself to a <span class="text-warning">framework / language</span></h3>
                <hr/>
                <img src={langTrends} className="banner" style={{"max-width": "80%", "width": "80%"}} />
                <small class="fragment">Learn the principles, not just the language</small>
              </section>

              <section>
                <h3>Follow trends with some <span class="text-warning">caution</span></h3>
              </section>

              <section>
                <h3>Follow trends with some <span class="text-warning">caution</span></h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Do your due diligence before adopting some technology</li>
                  <li class="fragment">Some self-questions: is there enough adopters?</li>
                </ul>
              </section>

              <section>
                <h3>Use <span class="text-warning">linters</span> whenever you can </h3>
              </section>

              <section>
                <h3>Use <span class="text-warning">linters</span> whenever you can </h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Structured code</li>
                  <li class="fragment">Learn to write structured code</li>
                </ul>
              </section>

              <section>
                <h3>Be wary of creating <span class="text-warning">long pull requests</span></h3>
              </section>

              <section>
                <h3>Be wary of creating <span class="text-warning">long pull requests</span></h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Huge PRs usually is harder to review and is prone to lower discovery of bugs. Some tips <a href="https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/" target="_blank">here.</a></li>
                  <li class="fragment">Longer turnover for reviews</li>
                  <li class="fragment">Split big PRs to smaller PRs with a descriptive title</li>
                </ul>
              </section>

              <section>
                <img src={defectBySize} style={{"background-color": "white"}}/>&nbsp;
                <img src={defectByTime} style={{"background-color": "white"}}/>
              </section>

              <section>
                <h3>Know when to ask for <span class="text-warning">help</span></h3>
              </section>

              <section>
                <h3>Know when to ask for <span class="text-warning">help</span></h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li>If you are stuck on a problem for too long, ask for help!</li>
                  <li class="fragment">Try to find the solution yourself first</li>
                  <li class="fragment">If needed, talk to your manager/buddy at work and find a good balance</li>
                </ul>
              </section>

              <section>
                <h3>Drop the <span class="text-danger">Arrogance</span></h3>
              </section>

              <section>
                <h3>Drop the <span class="text-danger">Arrogance</span></h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Don't take offense at feedback in pull requests (pride is ok, but not too far!)</li>
                  <li class="fragment">Don't jump to rebutt, but give no action for recourse</li>
                  <li class="fragment">Don't assume that that you know everything</li>
                </ul>
              </section>

              <section>
                <h3>Be a <span class="text-success">team player</span></h3>
              </section>

              <section>
                <h3>Be a <span class="text-success">team player</span></h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li>When in doubt, ask for the reason why the feedback is required, without confronting </li>
                  <li class="fragment">Vocal is good, + Listen is better</li>
                  <li class="fragment">Don't silo knowledge</li>
                </ul>
              </section>

              <section>
                <h3>Use your <span class="text-success">shortcuts</span>!</h3>
              </section>

              <section>
              <h3>Use your <span class="text-success">shortcuts</span>!</h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li>e.g: CMD + p (or CTRL + p) in code editors to quickly locate a file </li>
                  <li class="fragment">CMD + arrow keys, or OPTION + arrow key, for faster travesal in characters</li>
                  <li class="fragment">Challenge yourself - restrict using the trackpad/mouse for short periods of time</li>
                </ul>
              </section>

              <section>
                <h3>Environment</h3>
              </section>

              <section>
                <h3>Environment</h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li><span class="text-warning">Unix based systems</span> are generally better for development</li>
                  <li class="fragment">Windows Subsystem for Linux (WSL) can also work</li>
                </ul>
              </section>

              <section>
                <h3>Hiring <span class="text-success">tips</span></h3>
              </section>

              <section>
                <h3>Hiring <span class="text-success">tips</span></h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Prepare your algorithms</li>
                  <li class="fragment">Don't oversaturate your resume with details</li>
                  <li class="fragment">Be truthful and yourself</li>
                </ul>
              </section>
            </section>

            <section>
              <h2>Outside the <span class="text-cornsilk">Workplace</span></h2>
            </section>

            <section>
              <h4 className="section-heading">Outside the <span class="text-cornsilk">Workplace</span></h4>
              
              <section>
                <h3>Do your <span class="text-warning">own side projects</span> or <span class="text-warning">open source</span></h3>
              </section>

              <section>
                <h3><span class="text-success">Participate/volunteer</span> in community activities</h3>
              </section>

              <section>
                <h3><span class="text-warning">Teach/coach</span> in boot camps and the likes</h3>
              </section>

              <section>
                <h3><span class="text-warning">Public speaking</span> and <span class="text-warning">blogging</span></h3>
              </section>

              <section>
                <h3>Read, read and read</h3>
              </section>

              <section>
                <h3>Read, read and read</h3>
                <hr/>
                <ul class="cornsilk-list">
                  <li>Hackernews + newsletter</li>
                  <li class="fragment">Books</li>
                </ul>
              </section>

              <section>
                <img src={phoenixProject} class="banner" style={{"max-width": "40%"}}/>
              </section>

              <section>
                <h3>Find a <span class="text-success">mentor</span></h3>
              </section>
            </section>

            <section>
              <h2>Thanks for listening! Let's talk more offline: </h2><hr/>
              <p>Linkedin / Github : <a href="https://bit.ly/weiyuan" target="_blank">bit.ly/weiyuan</a></p>
            </section>
          </div>
        </div>
      </React.Fragment>
    );

    // TODO avatar <meta property="og:image" content={gcpComparisons} />
  }
};
