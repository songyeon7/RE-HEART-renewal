import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Map = () => {
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
        <Footer/>
        </>
    );
};

export default Map;