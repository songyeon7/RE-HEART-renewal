import React, { useState, useEffect } from 'react';

const Mapjs = () => {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]); // Define the markers state variable
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        // ComponentDidMount 로직
        const mapOption = {
            center: new window.kakao.maps.LatLng(37.542268, 126.967049),
            level: 3,
        };

        const initializedMap = new window.kakao.maps.Map(document.getElementById('map'), mapOption);
        setMap(initializedMap);

        // ... (위 코드에서 변경 없음)

        // 위치 이름 기반 검색 함수
        function handleSearch() {
            markers.forEach((marker) => marker.setMap(null)); // 기존 마커 제거
            setMarkers([]); // 마커 배열 초기화

            for (let i = 0; i < 5000; i++) {
                const stringVal = window.mapJson.data[i].buildaddress;
                const substring = searchInput;

                if (stringVal.includes(substring)) {
                    const markerPosition = new window.kakao.maps.LatLng(window.mapJson.data[i].wgs84lat, window.mapJson.data[i].wgs84lon);
                    // 마커를 생성합니다
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: markerPosition,
                        title: window.mapJson.data[i].buildplace,
                    });
                    setMarkers((prevMarkers) => [...prevMarkers, marker]);
                }
            }
        }
    }, []);

    // ... (위 코드에서 변경 없음)

    const mapStyles = {
        width: '100%',
        height: '500px',
    };

    const searchInputStyles = {
        width: '200px',
        height: '30px',
        marginRight: '10px',
    };

    const searchButtonStyles = {
        width: '50px',
        height: '30px',
    };

    const Mapjs = () => {
        const [map, setMap] = useState(null);
        const [markers, setMarkers] = useState([]); // Define the markers state variable
        const [searchInput, setSearchInput] = useState('');

        useEffect(() => {
            // ComponentDidMount 로직
            const mapOption = {
                center: new window.kakao.maps.LatLng(37.542268, 126.967049),
                level: 3,
            };

            const initializedMap = new window.kakao.maps.Map(document.getElementById('map'), mapOption);
            setMap(initializedMap);

            // ... (위 코드에서 변경 없음)

        }, []);

        // 위치 이름 기반 검색 함수
        function handleSearch() {
            markers.forEach((marker) => marker.setMap(null)); // 기존 마커 제거
            setMarkers([]); // 마커 배열 초기화

            for (let i = 0; i < 5000; i++) {
                const stringVal = window.mapJson.data[i].buildaddress;
                const substring = searchInput;

                if (stringVal.includes(substring)) {
                    const markerPosition = new window.kakao.maps.LatLng(window.mapJson.data[i].wgs84lat, window.mapJson.data[i].wgs84lon);
                    // 마커를 생성합니다
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: markerPosition,
                        title: window.mapJson.data[i].buildplace,
                    });
                    setMarkers((prevMarkers) => [...prevMarkers, marker]);
                }
            }
        }

        const mapStyles = {
            width: '100%',
            height: '500px',
        };

        const searchInputStyles = {
            width: '200px',
            height: '30px',
            marginRight: '10px',
        };

        const searchButtonStyles = {
            width: '50px',
            height: '30px',
        };

        return (
            <div>
                <div id="map" style={mapStyles}></div>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    style={searchInputStyles}
                />
                <button onClick={handleSearch} style={searchButtonStyles}>Search</button>
            </div>
        );
    };
};
