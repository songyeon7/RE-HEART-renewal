import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Whatis from "../components/Contact/WhatIs";

const Main = () => {
  const ref = React.useRef(null);
  function gotoScroll() {
    if(ref !== null) {
      const { offsetTop } = ref.current;
      window.scrollTo({ behavior: "smooth", top: offsetTop - 50});
    }
  }
  return (
    <>
      <Header isNotHome={false}/>
      <Whatis scRef={ref}/>
      <Footer/>
    </>
  );
};

export default Main;