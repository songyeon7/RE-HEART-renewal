import React, { useState, useEffect } from 'react';

const { kakao } = window;

function Kakao() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [map, setMap] = useState(null);

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.542268, 126.967049),
            level: 3
        };
        const newMap = new kakao.maps.Map(container, options);
        setMap(newMap);
    }, []);

    const handleSearch = () => {
        if (searchKeyword.trim() !== '' && map !== null) {
            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.addressSearch(searchKeyword, function (result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    const marker = new kakao.maps.Marker({
                        position: coords,
                        map: map
                    });

                    map.setCenter(coords);
                } else {
                    alert('검색 결과가 없습니다.');
                }
            });
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ 
                position: 'absolute', 
                top: '100px',
                left: '50%', 
                transform: 'translateX(-50%)', 
                zIndex: '10', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="주소를 입력하세요"
                    style={{
                        width: '800px',
                        height: '30px',
                        marginRight: '10px',
                        border: '1px solid #000',
                    }}
                />
                <button onClick={handleSearch}>검색</button>
            </div>
            <div id="map" style={{ width: '100%', height: '800px' }}></div>
        </div>
    );
}

export default Kakao;
