import "@fontsource/roboto-slab";

import Router from "next/router";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/layout";
import theme from "../lib/theme";

// Prevent automatic page location restoration
if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
