import React, { useEffect } from 'react';

const { kakao } = window;

function Kakao() {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.542268, 126.967049),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <div id="map" style={{
            width: '100%',
            height: '800px'
        }}></div>
    );
}

export default Kakao;