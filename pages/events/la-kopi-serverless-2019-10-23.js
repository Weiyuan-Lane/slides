import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';
import PersonalConstants from '@constants/personal';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import introPic from '@images/la-kopi-serverless-2019-10-23/introPic.png';
import shockedCat from '@images/la-kopi-serverless-2019-10-23/shockedCat.jpg';
import reviewStep1 from '@images/la-kopi-serverless-2019-10-23/reviewStep1.png';
import reviewStep2a from '@images/la-kopi-serverless-2019-10-23/reviewStep2a.png';
import reviewStep2b from '@images/la-kopi-serverless-2019-10-23/reviewStep2b.png';
import reviewStep2c from '@images/la-kopi-serverless-2019-10-23/reviewStep2c.png';
import reviewStep3 from '@images/la-kopi-serverless-2019-10-23/reviewStep3.png';
import reviewStep4 from '@images/la-kopi-serverless-2019-10-23/reviewStep4.png';
import reviewStep5 from '@images/la-kopi-serverless-2019-10-23/reviewStep5.png';

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
    this.description = 'The Speedrun of Serverless, with Google Cloud Platform';
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
              <p>"P2, Recapping the Speedrun of Serverless, <br/> With Google Cloud Console (UI)"</p>
              <img src={introPic} className="banner image-s" />
              <p>
                <small>
                  By <a href={PersonalConstants.WEIYUAN.SITE}>Weiyuan Liu | Rakuten Viki</a>
                </small>
              </p>
            </section>

            <section>
              <h3>This is P2 of the speedrun</h3>
              <img 
                data-src={shockedCat}
                style={{'maxHeight': '20%', 'maxWidth': '20%', 'width': '20%'}} />
              <p>For the slides in P1, go <a target="_blank" href="https://drive.google.com/open?id=1n6S6rYLYbQwEntyqNW8gk3yCvOOhQEPINhT3oOEbMnw">here</a> </p>
            </section>

            <section>
              <h3>Overview</h3>
              <ul className="aquablue-list">
                <li className="fragment">New Google Cloud Platform project</li>
                <li className="fragment">Deployed CICD pipeline with Cloud Build</li>
                <li className="fragment">Assigned roles to service account for Cloud Build to perform deployment for App Engine and Cloud Run </li>
                <li className="fragment">Deployed Web application(s) to App Engine &amp; Cloud Run</li>
              </ul>
            </section>

            <section>
              <h3>Let's examine the speedrun,<br/> in <b>9</b> distinct steps</h3>
            </section>

            <section>
              <h5>#1 - Create the Project</h5>
              <img 
                data-src={reviewStep1}
                className="image-m" />
            </section>

            <section>
              <h5>#2a - Enable App Engine </h5>
              <img 
                data-src={reviewStep2a}
                className="image-m" />
              <ul className="aquablue-list">
                <li className="fragment">Assess the above from the Navgation Menu - "App Engine > Dashboard"</li>
                <li className="fragment">Click the "Create Application" button</li>
              </ul>
            </section>

            <section>
              <h5>#2b - Select App Engine Region</h5>
              <img 
                data-src={reviewStep2b}
                className="image-m" />
            </section>

            <section>
              <h5>#2c - Set App Engine Core Configuration</h5>
              <img 
                data-src={reviewStep2c}
                className="image-m" />
              <p>See more on choosing the appropriate<br/> App Engine environment <a href="https://cloud.google.com/appengine/docs/the-appengine-environments" target="_blank">here</a></p>
            </section>

            <section>
              <h5>#3 - Enable App Engine Admin API</h5>
              <img 
                data-src={reviewStep3}
                className="image-m" />
              <ul className="aquablue-list" style={{'fontSize': '25px'}}>
                <li className="fragment">Assess the above from the Navgation Menu - "APIs &amp; Services > Dashboard"</li>
                <li className="fragment">Search for "App Engine Admin API" and click the "Enable" button</li>
                <li className="fragment">See <a href="https://cloud.google.com/appengine/docs/admin-api/overview" target="_blank">here</a> on why this API is required</li>
              </ul>
            </section>

            <section>
              <h5>#4 - Enable Cloud Run</h5>
              <img 
                data-src={reviewStep4}
                className="image-m" />
              <ul className="aquablue-list">
                <li className="fragment">Assess the above from the Navgation Menu - "Cloud Run"</li>
                <li className="fragment">Click the "Start Using Cloud Run" button</li>
              </ul>
            </section>

            <section>
              <h5>#4 - Enable Cloud Build (for CI/CD)</h5>
              <img 
                data-src={reviewStep5}
                className="image-m" />
              <ul className="aquablue-list" style={{'fontSize': '25px'}}>
                <li className="fragment">Assess the above from the Navgation Menu - "Cloud Build"</li>
                <li className="fragment">Click the "Enable Cloud Build API" button</li>
              </ul>
            </section>

            <section>
              <h5>#5 - Add Cloud Build trigger</h5>
              <img 
                data-src={reviewStep5}
                className="image-m" />
              <ul className="aquablue-list" style={{'fontSize': '25px'}}>
                <li className="fragment">Assess the above from the Navgation Menu - "Cloud Build"</li>
                <li className="fragment">Click the "Enable Cloud Build API" button</li>
              </ul>
            </section>

            <section>
              <h5>#6 - Add IAM roles to Cloud Build Service Account</h5>
              <img 
                data-src={reviewStep5}
                className="image-m" />
              <ul className="aquablue-list" style={{'fontSize': '25px'}}>
                <li className="fragment">Assess the above from the Navgation Menu - "Cloud Build"</li>
                <li className="fragment">Click the "Enable Cloud Build API" button</li>
              </ul>
            </section>

            <section>
              <h5>#7 - Add App Engine Configuration to codebase</h5>
              <img 
                data-src={reviewStep5}
                className="image-m" />
              <ul className="aquablue-list" style={{'fontSize': '25px'}}>
                <li className="fragment">Assess the above from the Navgation Menu - "Cloud Build"</li>
                <li className="fragment">Click the "Enable Cloud Build API" button</li>
              </ul>
            </section>

            <section>
              <h5>#8 - Add Cloud Build Configuration to codebase</h5>
              <img 
                data-src={reviewStep5}
                className="image-m" />
              <ul className="aquablue-list" style={{'fontSize': '25px'}}>
                <li className="fragment">Assess the above from the Navgation Menu - "Cloud Build"</li>
                <li className="fragment">Click the "Enable Cloud Build API" button</li>
              </ul>
            </section>

            <section>
              <h5>#9 - Add Dockerfile Configuration to codebase</h5>
              <img 
                data-src={reviewStep5}
                className="image-m" />
              <ul className="aquablue-list" style={{'fontSize': '25px'}}>
                <li className="fragment">Assess the above from the Navgation Menu - "Cloud Build"</li>
                <li className="fragment">Click the "Enable Cloud Build API" button</li>
              </ul>
            </section>

            <section>
              <h5>#10 - Commit the previous configurations into your code repository</h5>
              <img 
                data-src={reviewStep5}
                className="image-m" />
              <ul className="aquablue-list" style={{'fontSize': '25px'}}>
                <li className="fragment">Assess the above from the Navgation Menu - "Cloud Build"</li>
                <li className="fragment">Click the "Enable Cloud Build API" button</li>
              </ul>
            </section>

            <section>
              <h4>Viola! Wait for a few minutes before your web applications are deployed</h4><br/>
              <p>Note that you might want to omit the usage of <b>Cloud Run</b> if you're using <b>App Engine</b>, or vice versa, as you only need to serve a web application from one of them. <br/><br/>Deploying using both tools during the speedrun was part of the challenge to show how easy it was to get started with "serverless"</p>
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
  }
};
