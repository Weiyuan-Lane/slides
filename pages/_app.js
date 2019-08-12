import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <title>Slides by Weiyuan</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
};

export default MyApp;