import React from 'react'
import Head from 'next/head'
import Analytics from "../components/analytics.js";
import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import { PusherProvider } from '@harelpls/use-pusher';

const pusherConfig = {
  clientKey: "de6cd13556d73c05beed",
  appId: "1435548",
  cluster: "us2",
  useTLS: true,
};

const App = ({ Component, pageProps }) => (
  <PusherProvider {...pusherConfig}>
  <ThemeProvider theme={theme}>
    <Meta as={Head} />
    <Component {...pageProps} />
    <Analytics />
  </ThemeProvider>
  </PusherProvider>
)

export default App
