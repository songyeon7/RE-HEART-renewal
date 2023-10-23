import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/Main/MainContent";


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
      <MainContent scRef={ref}/>
      <Footer/>
    </>
  );
};

export default Main;