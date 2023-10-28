import React from 'react';
import Header from "../components/Header";
import FooterAbout from '../components/Footer_about';


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
      
      <FooterAbout/>
    </>
  );
};

export default Main;