import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

// Image assets
import demoLogos from '@images/keeping-your-hands-off-the-servers-2019-07-17/demo_logos.png';
import gcpMap from '@images/keeping-your-hands-off-the-servers-2019-07-17/gcp_map.png';
import headache from '@images/keeping-your-hands-off-the-servers-2019-07-17/headache.jpg';
import wallOfConfusion from '@images/keeping-your-hands-off-the-servers-2019-07-17/wallofconfusion.png';
import iaasImg from '@images/keeping-your-hands-off-the-servers-2019-07-17/IaaS.png';
import paasImg from '@images/keeping-your-hands-off-the-servers-2019-07-17/PaaS.png';
import faasImg from '@images/keeping-your-hands-off-the-servers-2019-07-17/FaaS.png';
import saasImg from '@images/keeping-your-hands-off-the-servers-2019-07-17/SaaS.png';
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
          <meta property="og:image" content={gcpComparisons} />
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
              </section>
              <section>
                <h3>"Serverless" are <b>more</b> than <b>functions</b></h3>
              </section>
              <section>
                <h2>"Serverless" is <b>NOT</b> <br/> <b><span className="pseudo-h6">one</span> <span className="pseudo-h4">size</span> <span className="pseudo-h7">fit</span> <span className="pseudo-h3">all</span></b></h2><br/>
                <small className="fragment smallalt">Find the tool that best suit your needs!</small>
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
                <img data-src={wallOfConfusion} 
                     style={{
                      'maxHeight': '55%', 
                      'maxWidth': '55%', 
                      'width': '35%',
                    }} />
              </section>
              <section>
                <blockquote><b><i>"You build it, you run it"</i></b> - Werner Vogels, CTO, Amazon</blockquote>
              </section>
              <section>
                <p><b>DevOps</b> - infra, tools and culture</p><br/>
                <p className="smallalt"><b>Developers</b> - develop and deploy</p><br/>
                <p className="pseudo-h7">Not suitable for small to medium sized orgs ?</p>
              </section>
              <section>
                <p><b>DevOps</b> - culture</p><br/>
                <p className="smallalt"><b>Cloud Provider</b> - infra and tools</p><br/>
                <p><b>Developers</b> - develop and deploy</p>
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
                <h2>Infrastructure as a Service (IaaS)</h2>
              </section>

              <section>
                <div>
                  <h3>Google Compute Engine (GCE)</h3>
                  <ul className="pseudo-h5">
                    <li>Virtual Machines<br/><br/></li>
                  </ul>
                </div>
                <div className="fragment">
                  <h3>Google Kubernetes Engine (GKE)</h3>
                  <ul className="pseudo-h5">
                    <li>Cluster of nodes / VMs (orchestration)<br/><br/></li>
                  </ul>
                </div>
              </section>

              <section>
                <img data-src={iaasImg} className="supress-reveal-img img-shadow"/>
              </section>

              <section>
                <h2>Serverless 🤔 ?</h2>
              </section>

              <section>
                <h2>Why IaaS?</h2>
                <ul className="pseudo-h5">
                  <li>For larger organisations, economies of scale<br/><br/></li>
                </ul>
              </section>
            </section>

            <section>
              <section>
                <h2>Function as a Service (FaaS)</h2>
              </section>

              <section>
                <h3>Cloud Functions</h3>
                <ul className="pseudo-h5">
                  <li>Function triggered by events (e.g. HTTP)<br/><br/></li>
                  <li className="smallalt">Limited Runtimes but lightweight<br/><br/></li>
                </ul>
              </section>

              <section>
                <img data-src={faasImg} className="supress-reveal-img img-shadow"/>
              </section>

              <section>
                <h3>Serverless 😊 !</h3>
              </section>

              <section>
                <h2>Why FaaS?</h2>
                <ul className="pseudo-h5">
                  <li className="smallalt">Solving singular problems that are decoupled from other applications<br/><br/></li>
                  <li className="fragment">May not be for frontend development<br/><br/></li>
                </ul>
              </section>
            </section>

            <section>
              <section>
                <h2>Software as a Service (SaaS)</h2>
              </section>

              <section>
                <h3>App Maker</h3>
                <ul className="pseudo-h5">
                  <li>GUI to make applications<br/><br/></li>
                </ul>
              </section>
              
              <section>
                <img data-src={saasImg} className="supress-reveal-img img-shadow"/>
              </section>

              <section>
                <h3>Serverless 🤢</h3>
              </section>
            </section>

            <section>
              <section>
                <h2>Platform as a Service (PaaS)</h2>
              </section>

              <section>
                <h3>Google App Engine (GAE)</h3>
                <ul className="pseudo-h5">
                  <li>Standard vs Flexible<br/><br/></li>
                </ul>
              </section>

              <section>
                <h3>Standard <b>VS</b> Flexible</h3>
                <ul className="pseudo-h5">
                  <li><b>Flexible</b> - No restrictions on runtimes<br/><br/></li>
                  <li className="smallalt fragment"><b>Standard</b> - deployed in sandbox - <b>faster</b><br/><br/></li>
                </ul>
              </section>
              
              <section>
                <img data-src={paasImg} className="supress-reveal-img img-shadow"/>
              </section>

              <section>
                <h3>Serverless 😇</h3>
              </section>

              <section>
                <h3>Why PaaS?</h3>
                <ul className="pseudo-h5">
                  <li className="smallalt">Balance between all tools<br/><br/></li>
                  <li className="fragment">Good for frontend development<br/><br/></li>
                </ul>
              </section>

            </section>

            <section>
              <img data-src={gcpComparisons} className="supress-reveal-img img-shadow"/>
            </section>

            <section>
              <section>
                <h3>Cloud Run</h3>
                <p>The new kid around the block <b>(*beta)</b></p>
              </section>

              <section>
                <h3>Cloud Run</h3>
                <ul className="pseudo-h5">
                  <li>Runs on a Dockerfile schematic<br/><br/></li>
                  <li className="smallalt">Managed or run alongside GKE</li>
                </ul>
              </section>

              <section>
                <h3>Cloud Run <b>vs</b><br/> App Engine Flexible</h3>
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
              <p>Linkedin / Github : <a href="https://bit.ly/weiyuan" target="_blank">bit.ly/weiyuan</a></p>
              <img 
                data-src={qrCodeBranding}
                style={{'maxHeight': '25%', 'maxWidth': '25%', 'width': '25%'}} />
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
};
