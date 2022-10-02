import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../utils/styles/_reset.scss';
import '../utils/styles/_fonts.scss';
import Layout from '../utils/hocs/layout';


class TheApp extends App {
  state = {
    readyForAds: false
  };

  render() {
    const { Component, pageProps} = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

// Wraps all components in the tree with the data provider
export default TheApp;
