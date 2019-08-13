import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import titleSadImage from '@images/keeping-your-hands-off-the-servers-2019-07-17/desperate-2057116_960_720.jpg';
import titleHappyImage from '@images/keeping-your-hands-off-the-servers-2019-07-17/happy_happy_happy.jpeg';

// Page reveal styles
const stylesheets = [
  `${basePath}/static/reveal-3.8.0/theme/sky.css`,
  `${basePath}/static/reveal-3.8.0/reveal.css`
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

    this.title = 'Keeping your hands off the servers';
    this.description = 'Keeping your hands off the servers';
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
        <div className="reveal">
          <div className="slides">
            <section>
              <section>
                <h2>Keep Your Hands OFF !</h2>
                <p>
                  <span className="pseudo-h4">Going "Serverless" with GCP</span> 
                  <span className="pseudo-h7">... and G Suite</span>
                </p>
                <img className="fragment" 
                     data-fragment-index="2"
                     src={titleSadImage} 
                     style={{'maxHeight': '35%', 'maxWidth': '35%', 'width': '35%'}} />
                <p className="fragment" data-fragment-index="1">
                  <small>
                    By <a href="http://weiyuan-lane.github.io">Weiyuan Liu @ Rakuten Viki</a>
                  </small>
                </p>
              </section>

              <section>
                <h2>Keep Your Hands <b>UP</b> !</h2>
                  <p>
                    <span className="pseudo-h4">Going "Serverless" with GCP</span> 
                    <span className="pseudo-h7">... and G Suite</span>
                  </p>
                  <img data-src={titleHappyImage} 
                       style={{'maxHeight': '35%', 'maxWidth': '35%', 'width': '35%'}} />
                  <p>
                    <small>
                      By <a href="http://weiyuan-lane.github.io">Weiyuan Liu @ Rakuten Viki</a>
                    </small>
                  </p>
              </section>
            </section>

            <section>
              <h2>What is <b>"Serverless"</b></h2>
            </section>

            <section>
              <h2>Why <strike>&nbsp;is&nbsp;</strike> <b>"Serverless"</b></h2>
            </section>

            <section>
              <h1><b>"Serverless"</b> with <b>GCP</b> ?</h1>
            </section>

            <section>
              <h3>Qwiklabs References</h3><br/>
              <table style={{'fontSize': '0.67em'}}>
                <thead>
                  <tr>
                    <th>Topics</th>
                    <th>Link</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Compute Engine </td>
                    <td><a href="https://www.qwiklabs.com/focuses/3563?parent=catalog" target="_blank">Creating a Virtual Machine</a></td>
                  </tr>

                  <tr>
                    <td>Cloud Run</td>
                    <td><a href="https://www.qwiklabs.com/focuses/5162?parent=catalog" target="_blank">Hello Cloud Run</a></td>
                  </tr>

                  <tr>
                    <td>Kubernetes</td>
                    <td><a href="https://www.qwiklabs.com/quests/29" target="_blank">Kubernetes in the Google Cloud</a></td>
                  </tr>

                  <tr>
                    <td>App Engine (Flexible)</td>
                    <td><a href="https://www.qwiklabs.com/focuses/3340?parent=catalog" target="_blank">Deploy Node.js Express Application in App Engine</a></td>
                  </tr>

                  <tr>
                    <td>App Maker</td>
                    <td><a href="https://www.qwiklabs.com/focuses/4096?parent=catalog" target="_blank">Build a Complete Database Web App with App Maker</a></td>
                  </tr>
                </tbody>

              </table>
            </section>
          </div>
        </div>
      </React.Fragment>
    );

    // TODO avatar <meta property="og:image" content="<%= domain %>/images/avatar.jpg" />
  }
};
