import React, { Fragment } from "react";
import "./sass/style.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Shorten />
      <Advanced />
      <Boost />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}

export default App;
