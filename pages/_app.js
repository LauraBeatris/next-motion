import React from "react";
import { AnimatePresence } from 'framer-motion'
import App from "next/app";
import Head from 'next/head'
import "../styles.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
    
      /* 
        AnimatePresence - Animation ==> Motion Components <== as there're
        unmounted from the React Tree

        It enables the exit prop which can define an animate to use when 
        the component unmount
      */
     <>
      <Head>
          <title> Starbucks Drinks </title>
      </Head>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;
