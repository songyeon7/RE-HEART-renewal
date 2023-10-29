import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Kakao from '../components/Map/Kakao';


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
      <Kakao scRef={ref}/>
      <Footer/>
    </>
  );
};

export default Main;