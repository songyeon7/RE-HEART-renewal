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

        // 데이터 로드
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                // 여기서 데이터를 이용하여 지도에 Marker를 추가하는 작업을 수행
                data.forEach(item => {
                    // item에서 위도와 경도 정보 추출
                    const latLng = new kakao.maps.LatLng(item.latitude, item.longitude);

                    // Marker 추가
                    const marker = new kakao.maps.Marker({
                        position: latLng,
                        map: map
                    });
                });
            })
            .catch(error => {
                console.error('데이터를 가져오는 중 에러 발생:', error);
            });

    }, []);

    return (
        <div id="map" style={{
            width: '100%',
            height: '800px'
        }}></div>
    ); 
}

export default Kakao;