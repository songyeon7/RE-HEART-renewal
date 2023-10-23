import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chap1 from "../components/About/Chap1";


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
      <Chap1 scRef={ref}/>
      <Footer/>
    </>
  );
};

export default Main;