import React, { useState, useEffect, setSearchResult } from 'react';
import searchIcon from '../../assets/search.svg';
import data from '../../data/data.json';

const { kakao } = window;

function Kakao() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);


    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.542268, 126.967049),
            level: 3
        };
        const newMap = new kakao.maps.Map(container, options);
        setMap(newMap);
        
        fetch(data)
            .then(response => response.json())
            .then(data => {
                setSearchResult(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = () => {
        if (searchKeyword.trim() !== '' && map !== null) {
            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.addressSearch(searchKeyword, function (result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    // Clear previous markers
                    markers.forEach(marker => {
                        marker.setMap(null);
                    });

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
                backgroundColor: '#fff', 
                border: '1px solid #FF9B9B',
                borderRadius: '5px', 
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
                        border: 'none',
                        padding: '5px', 
                        borderRadius: '5px',
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        height: '40px',
                        color: 'transparent',
                        cursor: 'pointer',
                        backgroundImage: `url(${searchIcon})`, 
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        border: 'none', 
                        backgroundColor: '#fff5f5', 
                        borderRadius: '0px 5px 5px 0px',
                    }}
                >
                    Search
                </button>
            </div>
            <div id="map" style={{ width: '100%', height: '800px' }}></div>
        </div>
    );
}

export default Kakao;
