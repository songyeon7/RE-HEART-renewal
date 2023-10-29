import React, { useEffect } from 'react';
import styled from 'styled-components';

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=6cb98adbc3bfdcc9903aa83189a599d0&libraries=services,clusterer,drawing';
    document.head.appendChild(script);
    script.onload = () => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.542268, 126.967049),
        level: 3
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const latitude = coords.latitude;
          const longitude = coords.longitude;
          // Additional operations based on user's location
        });
      }

      const search = () => {
        const substring = document.getElementById('tbox').value;
        // Additional operations based on address search
      };

      document.getElementById('searchButton').addEventListener('click', search);
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '700px', marginTop: '10px' }}>
        <div style={{ position: 'absolute' }}>
          <Input
            type="text"
            id="tbox"
          />
        </div>
      </div>

      <div style={{ position: 'absolute' }}>
        <Button id="searchButton"></Button>
      </div>
    </div>
  );
};

const Input = styled.input`
width: 1000px;
height: 30px;
text-align: center;
border: 1px white;
border-radius: 5px;
position: fixed;
left: 270px;
top: 130px;
z-index: 10;
`;

const Button = styled.button`
position: fixed;
right: 140px;
top: 130px;
z-index: 10;
`;



export default MapComponent;
