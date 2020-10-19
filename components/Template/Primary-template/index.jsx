import React, { useEffect } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { theme } from "../../../constant";
import { ThemeProvider } from "@material-ui/core";
import Router from "next/router";
import NProgress from "nprogress";
export const PrimaryTemplate = ({ pageTitle, children }) => {
  Router.onRouteChangeStart = (url) => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  Router.onRouteChangeError = () => {
    NProgress.done();
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Head>
          <title>{pageTitle}</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="stylesheet" type="text/css" href={`/styles/home.css`} />

          <title>{pageTitle}</title>
        </Head>
        <>
          <Header />
          {children}
          <div className="overflow-hidden">
            <Footer />
          </div>
        </>
      </ThemeProvider>
    </div>
  );
};
