import Head from 'next/head';
import { revealInit } from '@external-libraries/reveal/reveal-3.8.0.js';

// Page styles
import '@styles/reveal-base.scss';
import '@styles/reveal-3.8.0/theme/white.css';
import '@styles/reveal-3.8.0/reveal.css';

// Presentation component
export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.title = 'Keeping your hands off the servers';
    this.description = 'Keeping your hands off the servers';
  }

  componentDidMount() {
    if (process.browser) {
      this.Reveal = revealInit();
      this.Reveal.initialize();
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
        </Head>
        <div className="reveal">
          <div className="slides">
            <section>Single Horizontal Slide</section>
            <section>
              <section>Vertical Slide 1</section>
              <section>Vertical Slide 2</section>
            </section>
          </div>
        </div>
      </React.Fragment>
    );

    // TODO avatar <meta property="og:image" content="<%= domain %>/images/avatar.jpg" />
  }
};
