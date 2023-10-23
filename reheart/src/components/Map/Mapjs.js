import mapJson from '/files/data.json' assert {type: 'json'};

const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
const mapOption = {
    center: new kakao.maps.LatLng(37.542268, 126.967049), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

// 지도를 생성합니다    
const map = new kakao.maps.Map(mapContainer, mapOption);

// JSON 파싱
const mydata = mapJson.data;
let onchecked = false;

const addressArray = [];
const contentArray = [];

function success({ coords, timestamp }) {
    const latitude = coords.latitude;   // 위도
    const longitude = coords.longitude; // 경도
    alert(`위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`);
    for (let i = 0; i < 5000; i++) {
        const tmplat = latitude - mydata[i].wgs84lat;
        const tmplong = longitude - mydata[i].wgs84lon;
        if (tmplong < 0) {
            tmplong *= -1;
        }
        if (tmplat < 0) {
            tmplat *= -1;
        }
        const tmpser = tmplat + tmplong;

        if (onchecked) {
            setMarkers(null);
        }
        if (tmpser < 20) {
            const markerPosition = new kakao.maps.LatLng(mydata[i].wgs84lat, mydata[i].wgs84lon);
            onchecked = true;
            const marker = new kakao.maps.Marker({
                map: map,
                position: markerPosition,
                title: mydata[i].buildplace,
            });
        }
    }
}

function getUserLocation() {
    if (!navigator.geolocation) {
        throw "위치 정보가 지원되지 않습니다.";
    }
    navigator.geolocation.getCurrentPosition(success);
}

function search() {
    for (let i = 0; i < 5000; i++) {
        const stringVal = mydata[i].buildaddress;
        const substring = document.getElementById("tbox").value;
        if (stringVal.indexOf(substring) !== -1) {
            const markerPosition = new kakao.maps.LatLng(mydata[i].wgs84lat, mydata[i].wgs84lon);
            const marker = new kakao.maps.Marker({
                map: map,
                position: markerPosition,
                title: mydata[i].buildplace,
            });
        }
    }
}

function render() {
    const searchButton = document.querySelector("#searchButton");
    searchButton.addEventListener('click', search);
    getUserLocation();
}

window.onload = render;
