import React, { useEffect, useState } from 'react';
import mapJson from './/files/data.json';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // ComponentDidMount 로직
    const mapOption = {
      center: new kakao.maps.LatLng(37.542268, 126.967049),
      level: 3,
    };

    const initializedMap = new kakao.maps.Map(document.getElementById('map'), mapOption);
    setMap(initializedMap);

    // ... 기타 초기화 로직
    const mydata = mapJson.data
    // 현재 위치 기반 검색 로직 (navigator.geolocation)
    function success({ coords, timestamp }) {
      const latitude = coords.latitude;
      const longitude = coords.longitude;
      alert(`위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`);

      // 기존 위치 기반 검색 로직 이어서 작성

      for (let i = 0; i < 5000; i++) {
        // ...

        if (onchecked === true) {
          // setMarkers(null); // React에서 상태 업데이트
          setMarkers([]);
        }

        if (tmpser < 20) {
          const markerPosition = new kakao.maps.LatLng(mydata[i].wgs84lat, mydata[i].wgs84lon);
          onchecked = true;
          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            map: initializedMap,
            position: markerPosition,
            title: mydata[i].buildplace,
          });
          setMarkers((prevMarkers) => [...prevMarkers, marker]);
        }
      }
    }

    function getUserLocation() {
      if (!navigator.geolocation) {
        throw "위치 정보가 지원되지 않습니다.";
      }
      navigator.geolocation.getCurrentPosition(success);
    }

    getUserLocation();
  }, []); // 빈 배열을 전달하여 ComponentDidMount와 같은 동작을 수행

  // 위치 이름 기반 검색 함수
  function handleSearch() {
    // clusterer.clear();
    markers.forEach((marker) => marker.setMap(null)); // 기존 마커 제거

    for (let i = 0; i < 5000; i++) {
      const stringVal = mydata[i].buildaddress;
      const substring = searchInput;

      if (stringVal.includes(substring)) {
        const markerPosition = new kakao.maps.LatLng(mydata[i].wgs84lat, mydata[i].wgs84lon);
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: markerPosition,
          title: mydata[i].buildplace,
        });
        setMarkers((prevMarkers) => [...prevMarkers, marker]);
      }
    }
  }

  return (
    <div>
      <div id="map" style={mapStyles}></div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={searchInputStyles}
      />
      <button onClick={handleSearch} style={searchButtonStyles}></button>
    </div>
  );
};

const mapStyles = {
  width: '100%',
  height: '700px',
  marginTop: '10px',
};

const searchInputStyles = {
  width: '1000px',
  height: '30px',
  textAlign: 'center',
  border: '1px white',
  borderRadius: '5px',
  position: 'fixed',
  left: '270px',
  top: '130px',
  zIndex: 10,
};

const searchButtonStyles = {
  position: 'fixed',
  right: '140px',
  top: '130px',
  zIndex: 10,
};

export default MapComponent;
