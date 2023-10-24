import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Prepare from "../components/About/Prepare";
import Chap1 from '../components/About/Chap1';
import Chap2 from '../components/About/Chap2';
import Chap3 from '../components/About/Chap3';
import Chap4 from '../components/About/Chap4';
import Chap5 from '../components/About/Chap5';


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
      <Prepare scRef={ref}/>
      <Chap1 scRef={ref}/>
      <Chap2 scRef={ref}/>
      <Chap3 scRef={ref}/>
      <Chap4 scRef={ref}/>
      <Chap5 scRef={ref}/>
      <Footer/>
    </>
  );
};

export default Main;