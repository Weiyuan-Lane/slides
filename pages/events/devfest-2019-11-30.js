import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';
import PersonalConstants from '@constants/personal';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import introPic from '@images/devfest-2019-11-30/introPic.png';
import reviewStep1 from '@images/devfest-2019-11-30/reviewStep1.png';
import reviewStep2a from '@images/devfest-2019-11-30/reviewStep2a.png';
import reviewStep2b from '@images/devfest-2019-11-30/reviewStep2b.png';
import reviewStep2c from '@images/devfest-2019-11-30/reviewStep2c.png';
import reviewStep3 from '@images/devfest-2019-11-30/reviewStep3.png';
import reviewStep4 from '@images/devfest-2019-11-30/reviewStep4.png';
import reviewStep5 from '@images/devfest-2019-11-30/reviewStep5.png';
import reviewStep6a from '@images/devfest-2019-11-30/reviewStep6a.png';
import reviewStep6b from '@images/devfest-2019-11-30/reviewStep6b.png';
import reviewStep6c from '@images/devfest-2019-11-30/reviewStep6c.png';
import reviewStep6d from '@images/devfest-2019-11-30/reviewStep6d.png';
import reviewStep7 from '@images/devfest-2019-11-30/reviewStep7.png';
import reviewStep10 from '@images/devfest-2019-11-30/reviewStep10.png';

// Page reveal styles
const stylesheets = [
  `${basePath}/static/reveal-3.8.0/theme/sky.css`,
  `${basePath}/static/reveal-3.8.0/reveal.css`,
  `${basePath}/static/reveal-3.8.0/lib/monokai.css`,
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
    this.description = 'P2, 10 steps in 10 minutes';
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
              <p>"P2, 10 steps in 10 minutes"</p>
              <img src={introPic} className="banner image-s" />
              <p>
                <small>
                  By <a href={PersonalConstants.WEIYUAN.SITE}>Weiyuan Liu | Rakuten Viki</a>
                </small>
              </p>
            </section>

            <section>
              <h3>Overview</h3>
              <ul className="aquablue-list pseudo-h6">
                <li className="fragment">Created new Google Cloud Platform project</li>
                <li className="fragment">Deployed CICD pipeline with Cloud Build</li>
                <li className="fragment">Assigned roles to service account for Cloud Build to perform deployment for App Engine and Cloud Run </li>
                <li className="fragment">Deployed applications to App Engine &amp; Cloud Run</li>
              </ul>
            </section>

            <section>
              <h3>Let's examine the speedrun,<br/> in <b>10</b> distinct steps</h3>
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
              <ul className="aquablue-list pseudo-h6 ">
                <li className="fragment">Assess the above from the Navigation Menu - "App Engine > Dashboard"</li>
                <li className="fragment">Click the <b>Create Application</b> button</li>
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
              <p className="pseudo-h6s">See more on choosing the appropriate<br/> App Engine environment <a href="https://cloud.google.com/appengine/docs/the-appengine-environments" target="_blank">here</a></p>
            </section>

            <section>
              <h5>#3 - Enable App Engine Admin API</h5>
              <img 
                data-src={reviewStep3}
                className="image-m" />
              <ul className="aquablue-list pseudo-h6">
                <li className="fragment">Assess the above from the Navigation Menu - "APIs &amp; Services > Dashboard"</li>
                <li className="fragment">Search for "App Engine Admin API" and click the <b>Enable</b> button</li>
                <li className="fragment">See <a href="https://cloud.google.com/appengine/docs/admin-api/overview" target="_blank">here</a> on why this API is required</li>
              </ul>
            </section>

            <section>
              <h5>#4 - Enable Cloud Run</h5>
              <img 
                data-src={reviewStep4}
                className="image-m" />
              <ul className="aquablue-list pseudo-h6">
                <li className="fragment">Assess the above from the Navigation Menu - "Cloud Run"</li>
                <li className="fragment">Click the <b>Start Using Cloud Run</b> button</li>
              </ul>
            </section>

            <section>
              <h5>#5 - Enable Cloud Build (for CI/CD)</h5>
              <img 
                data-src={reviewStep5}
                className="image-m" />
              <ul className="aquablue-list pseudo-h6">
                <li className="fragment">Assess the above from the Navigation Menu - "Cloud Build"</li>
                <li className="fragment">Click the <b>Enable Cloud Build API</b> button</li>
              </ul>
            </section>

            <section>
              <h5>#6a - Add Cloud Build configuration</h5>
              <img 
                data-src={reviewStep6a}
                className="image-m" />
              <ul className="aquablue-list pseudo-h6">
                <li className="fragment">Assess the above from the Navigation Menu - "Cloud Build > Triggers"</li>
                <li className="fragment">Click <b>Connect Repository</b></li>
              </ul>
            </section>

            <section>
              <h5>#6b - Connect Repository</h5>
              <img 
                data-src={reviewStep6b}
                className="image-m" />
              <ul className="aquablue-list pseudo-h6">
                <li className="fragment">Select the correct code repository product that you are using</li>
                <li className="fragment">Click <b>Continue</b> once you're ready</li>
              </ul>
            </section>

            <section>
              <h5>#6c - Proceed to add build trigger</h5>
              <img 
                data-src={reviewStep6c}
                className="image-m" />
              <ul className="aquablue-list pseudo-h6">
                <li className="fragment">Click <b>Add Trigger</b></li>
              </ul>
            </section>

            <section>
              <h5>#6d - Connect Repository</h5>
              <img 
                data-src={reviewStep6d}
                className="image-m" />
              <ul className="aquablue-list pseudo-h6">
                <li className="fragment">Select the "Build configuration" setting as seen above</li>
                <li className="fragment">Add branch regex (optional) if you only want to target a certain group of branches</li>
                <li className="fragment">Click <b>Create Trigger</b></li>
              </ul>
            </section>

            <section>
              <h5>#7 - Add IAM roles to Cloud Build Service Account</h5>
              <img 
                data-src={reviewStep7}
                className="image-m" />
              <ul className="aquablue-list pseudo-h6">
                <li className="fragment">Assess the above from the Navigation Menu - "IAM &amp; admin > IAM"</li>
                <li className="fragment">Add the above IAM roles to <b>$&#123;id&#125;@cloudbuild.gserviceaccount.com</b>. This is a service account that is the underlying identity when running Cloud Build.</li>
                <li className="fragment">View the privileges offered under the above roles from Navigation Menu - "IAM &amp; admin > Roles"</li>
              </ul>
            </section>

            <section>
              <h5>#8 - Add App Engine Configuration to codebase</h5>
              <pre>
                <code className="hljs yaml">{"\
runtime: nodejs10\n\
instance_class: B1\n\
manual_scaling:\n\
  instances: 1\n\
\n\
handlers:\n\
- url: /static\n\
  static_dir: static\n\
- url: /public\n\
  static_dir: public\n\
- url: /client-assets\n\
  static_dir: client-assets\
                "}</code>
              </pre>
              <p className="pseudo-h6 fragment">Add the above in the root dir of project as <b>app.yaml</b></p>
              <p className="pseudo-h6 fragment">App Engine configuration differs between environment (Standard VS Flexible). Do check out the standard configuration <a href="https://cloud.google.com/appengine/docs/standard/nodejs/config/appref" target="_blank">here</a> and flexible configuration <a href="https://cloud.google.com/appengine/docs/flexible/nodejs/reference/app-yaml" target="_blank">here</a> .</p>
              <p className="pseudo-h6 fragment">See code base that I used <a href="https://github.com/Weiyuan-Lane/slides/tree/backup/serverless-demo" target="_blank">here</a> .</p>
            </section>

            <section>
              <h5>#9 - Add Cloud Build Configuration to codebase</h5>
              <pre>
                <code className="hljs yaml">{"\
timeout: '600s'\n\
steps:\n\
- id: init\n\
  waitFor: ['-']\n\
  name: 'gcr.io/cloud-builders/npm'\n\
  args: ['install']\n\
\n\
- id: frontendTest\n\
  waitFor: ['init']\n\
  name: 'gcr.io/cloud-builders/npm'\n\
  args: ['run', 'f-test']\n\
\n\
- id: backendTest\n\
  waitFor: ['init']\n\
  name: 'gcr.io/cloud-builders/npm'\n\
  args: ['run', 'b-test']\n\
\n\
- id: buildAssets\n\
  waitFor: ['frontendTest', 'backendTest']\n\
  name: 'gcr.io/cloud-builders/npm'\n\
  args: ['run', 'build']\n\
\n\
- id: appEngineDeploy\n\
  waitFor: ['buildAssets']\n\
  name: 'gcr.io/cloud-builders/gcloud'\n\
  args: ['app', 'deploy', '-q', '--project', '$PROJECT_ID']\n\
\n\
- id: cloudRunDeploy\n\
  waitFor: ['frontendTest', 'backendTest']\n\
  name: 'gcr.io/cloud-builders/gcloud'\n\
  entrypoint: 'sh'\n\
  args:\n\
    - -c\n\
    - |\n\
      gcloud builds submit --tag gcr.io/$PROJECT_ID/webapp:1 -q\n\
      gcloud beta run deploy --image gcr.io/$PROJECT_ID/webapp:1 -q --allow-unauthenticated --platform=\"managed\" --region=\"us-central1\" webapp\n\
                "}</code>
              </pre>
              <p className="pseudo-h6 fragment">Add the above in the root dir of project as <b>cloudbuild.yaml</b></p>
              <p className="pseudo-h6 fragment">The above runs the application's unit tests, before building the assets and deploying the applications to Cloud Run and App Engine. See <a href="https://cloud.google.com/cloud-build/docs/build-config" target="_blank">here</a> for more details on Cloud Build's configuration.</p>
            </section>

            <section>
              <h5>#10 - Commit the configurations</h5>
              <img 
                data-src={reviewStep10}
                className="image-m" />
              <p className="pseudo-h6 fragment">Committing the code above will trigger Cloud Build to starting building based on the trigger from <b>#6</b></p>
            </section>

            <section>
              <h4>Viola! Wait for a few minutes before your web applications are deployed</h4><br/>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
};
