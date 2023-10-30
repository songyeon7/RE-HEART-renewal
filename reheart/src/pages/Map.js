import React from 'react';
import Header from "../components/Header";
import Kakao from '../components/Map/Kakao';
import FooterMap from '../components/Footer_map';


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
      <FooterMap/>
    </>
  );
};

export default Main;