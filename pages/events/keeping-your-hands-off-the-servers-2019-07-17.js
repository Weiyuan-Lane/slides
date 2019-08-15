import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import titleSadImage from '@images/keeping-your-hands-off-the-servers-2019-07-17/desperate-2057116_960_720.jpg';
import titleHappyImage from '@images/keeping-your-hands-off-the-servers-2019-07-17/happy_happy_happy.jpeg';
import demoLogos from '@images/keeping-your-hands-off-the-servers-2019-07-17/demo_logos.png';
import gcpMap from '@images/keeping-your-hands-off-the-servers-2019-07-17/gcp_map.png';
import headache from '@images/keeping-your-hands-off-the-servers-2019-07-17/headache.jpg';
import wallOfConfusion from '@images/keeping-your-hands-off-the-servers-2019-07-17/wallofconfusion.png';
import gcpComparisons from '@images/keeping-your-hands-off-the-servers-2019-07-17/gcp_comparisons.png';

import qrCodeBranding from '@images/branding/qr_code.png';

// Page reveal styles
const stylesheets = [
  `${basePath}/static/reveal-3.8.0/theme/sky.css`,
  `${basePath}/static/reveal-3.8.0/reveal.css`,
  `${basePath}/static/keeping-your-hands-off-the-servers-2019-07-17/base.css`
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
    this.description = 'Going "Serverless" with GCP and G Suite';
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
              <section>
                <h2>What is <b>"Serverless"</b></h2>
              </section>
              <section>
                <h3>"Serverless" is <b>NOT</b> a replacement for <b>DevOps</b> (culture)</h3><br/>
                <p className="fragment pseudo-h4 smallalt">Basic DevOps culture is needed</p><br/>
                <ul className="pseudo-h5">
                  <li className="fragment smallalt"><b>Setting up robust CI and CD</b> <br/><br/></li>
                  <li className="fragment smallalt"><b>Telemetry and alerting mechanisms</b></li>
                </ul>
              </section>
              <section>
                <h3>"Serverless" are <b>more</b> than <b>functions</b></h3>
              </section>
              <section>
                <h2>"Serverless" is <b>NOT</b> <br/> <b><span className="pseudo-h6">one</span> <span className="pseudo-h4">size</span> <span className="pseudo-h7">fit</span> <span className="pseudo-h3">all</span></b></h2><br/>
                <small className="fragment smallalt">Find the tool that best suit your needs!</small>
              </section>
              <section>
                <h3>"Serverless"</h3>
                <ul className="pseudo-h5">
                  <li className="fragment smallalt" style={{ paddingBottom: "1em" }}><b>offloading the operational (often menial) aspects</b>, such as deployment and scaling</li>
                  <li className="fragment smallalt">often represented as <b>stateless containers</b></li>
                </ul>
              </section>
            </section>

            <section>
              <section>
                <h2>Why <b>"Serverless"</b></h2>
              </section>
              <section>
                <h2>Once upon a time...</h2><br/>
                <p className="fragment smallalt">There were <b>sysadmins</b>!</p>
              </section>
              <section>
                <img data-src={wallOfConfusion} />
              </section>
              <section>
                <blockquote><b><i>"You build it, you run it"</i></b> - Werner Vogels, CTO, Amazon</blockquote>
              </section>
              <section>
                <p><b>DevOps</b> - tools and culture</p><br/>
                <p className="smallalt"><b>Developers</b> - applications and code</p><br/>
                <p className="pseudo-h7">Not suitable for small to medium sized orgs ?</p>
              </section>
              <section>
                <p><b>DevOps</b> - culture</p><br/>
                <p className="smallalt"><b>Cloud Provider</b> - tools</p><br/>
                <p><b>Developers</b> - applications and code</p>
              </section>
            </section>

            <section>
              <section>
                <h1><b>"Serverless"</b> with <b>GCP</b> ?</h1>
              </section>
              <section>
                <img data-src={gcpMap}
                      className="supress-reveal-img img-shadow"
                      style={{
                        'maxHeight': '55%', 
                        'maxWidth': '55%', 
                        'width': '55%',
                      }} />
              </section>
              <section>
                <img data-src={headache}/>
              </section>
              <section>
                <img data-src={gcpMap}
                      className="supress-reveal-img img-shadow"
                      style={{
                        'maxHeight': '25%', 
                        'maxWidth': '25%', 
                        'width': '25%',
                      }} /><br/><br/>
                <ul className="pseudo-h6" style={{ verticalAlign: 'top' }}>
                  <li><b>Compute Engine</b><br/><br/></li>
                  <li className="smallalt">Kubernetes Engine<br/><br/></li>
                  <li><b>App Engine (Standard)</b><br/><br/></li>
                  <li className="smallalt">App Engine (Flexible)<br/><br/></li>
                </ul>
                <ul className="pseudo-h6" style={{ verticalAlign: 'top' }}>
                  <li className="smallalt">Cloud Functions<br/><br/></li>
                  <li><b>App Maker (from G Suite)</b><br/><br/></li>
                  <li className="smallalt">Cloud Run (in beta)</li>
                </ul>
              </section>
            </section>

            <section>
              <section>
                <img data-src={gcpComparisons} className="supress-reveal-img img-shadow"/>
              </section>
              <section>
                <h2>Cloud Run vs App Engine Flexible (Deployment)</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/j6da-Kq8TYU" frameBorder="0" allowFullScreen></iframe>
              </section>
            </section>

            <section>
              <h3>Let's make a <b>CICD</b> pipeline with <b>"Serverless"</b> infrastructure !</h3>
              <img data-src={demoLogos} style={{ border: 'none', boxShadow: 'none', paddingTop: '1em', paddingBottom: '1em', background: 'none' }} /><br/>
              <a href="http://bit.ly/cloud-build-demo">http://bit.ly/cloud-build-demo</a>
            </section>

            <section>
              <h3>References | Qwiklabs</h3><br/>
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

            <section>
              <h2>Questions ?</h2><br/>
              <p>Linkedin / Github : <a href="bit.ly/weiyuan">bit.ly/weiyuan</a></p>
              <img 
                data-src={qrCodeBranding}
                style={{'maxHeight': '25%', 'maxWidth': '25%', 'width': '25%'}} />
            </section>
          </div>
        </div>
      </React.Fragment>
    );

    // TODO avatar <meta property="og:image" content="<%= domain %>/images/avatar.jpg" />
  }
};
